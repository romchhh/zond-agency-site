import { locales, type Locale } from "@/i18n/config";
import { stripMediaVersion } from "@/lib/media-version";

export type LocalizedCaption = Partial<Record<Locale, string>>;
export type MediaCaptionsStore = Record<string, string | LocalizedCaption>;

export function mediaMatchKey(path: string): string {
  return path
    .trim()
    .replace(/[?#].*$/, "")
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\/assets\/cases\//i, "")
    .replace(/^media\//i, "")
    .replace(/^\//, "")
    .toLowerCase();
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function captionsFromBlocks(blocks: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!Array.isArray(blocks)) return out;
  for (const block of blocks) {
    if (!isPlainObject(block) || block.type !== "gallery" || !Array.isArray(block.images)) continue;
    for (const image of block.images) {
      if (!isPlainObject(image) || typeof image.src !== "string") continue;
      if (typeof image.caption === "string" && image.caption.trim()) {
        out[mediaMatchKey(image.src)] = image.caption;
      }
    }
  }
  return out;
}

export function applyCaptionToBlocks(blocks: unknown, mediaPath: string, caption: string): unknown {
  if (!Array.isArray(blocks)) return blocks;
  const key = mediaMatchKey(mediaPath);
  return blocks.map((block) => {
    if (!isPlainObject(block) || block.type !== "gallery" || !Array.isArray(block.images)) return block;
    let changed = false;
    const images = block.images.map((image) => {
      if (!isPlainObject(image) || typeof image.src !== "string") return image;
      if (mediaMatchKey(image.src) !== key) return image;
      changed = true;
      if (!caption.trim()) {
        const { caption: _removed, ...rest } = image;
        void _removed;
        return rest;
      }
      return { ...image, caption };
    });
    return changed ? { ...block, images } : block;
  });
}

export function normalizeCaptionEntry(
  value: string | LocalizedCaption | undefined,
  fallbackLocale: Locale,
): LocalizedCaption {
  if (!value) return {};
  if (typeof value === "string") {
    return value.trim() ? { [fallbackLocale]: value } : {};
  }
  const next: LocalizedCaption = {};
  for (const locale of locales) {
    const text = value[locale];
    if (typeof text === "string" && text.trim()) next[locale] = text;
  }
  return next;
}

export function normalizeMediaCaptions(
  store: MediaCaptionsStore | undefined,
  fallbackLocale: Locale,
): Record<string, LocalizedCaption> {
  const out: Record<string, LocalizedCaption> = {};
  if (!store) return out;
  for (const [key, value] of Object.entries(store)) {
    const entry = normalizeCaptionEntry(value, fallbackLocale);
    if (Object.keys(entry).length) out[key] = entry;
  }
  return out;
}

export function applyLocalizedCaptionsToBlocks(
  blocks: unknown,
  captions: Record<string, LocalizedCaption>,
  locale: Locale,
): unknown {
  let next = blocks;
  for (const [path, entry] of Object.entries(captions)) {
    next = applyCaptionToBlocks(next, path, entry[locale] ?? "");
  }
  return next;
}

function pathVariants(from: string, key: string): string[] {
  const clean = stripMediaVersion(from).trim();
  const list = [
    clean,
    clean.replace(/^\//, ""),
    `media/${key}`,
    `/media/${key}`,
    `/assets/cases/${key}`,
    `assets/cases/${key}`,
  ];
  return [...new Set(list.filter((item) => item.length >= 6))].sort((a, b) => b.length - a.length);
}

/** Point every stored copy of `from` (gallery blocks, body tags, cover) at `to`. */
export function replaceMediaSrc(value: unknown, from: string, to: string): unknown {
  const toPath = stripMediaVersion(to).trim();
  const fromKey = mediaMatchKey(from);
  const toKey = mediaMatchKey(toPath);
  if (!fromKey || !toPath || fromKey === toKey) return value;
  const needles = pathVariants(from, fromKey);

  function rewriteString(input: string): string {
    const stripped = stripMediaVersion(input.trim());
    if (mediaMatchKey(stripped) === fromKey && !input.includes("[") && !input.includes("\n")) {
      return toPath;
    }
    let next = input;
    for (const needle of needles) {
      if (next.includes(needle)) next = next.split(needle).join(toPath);
    }
    return next;
  }

  function walk(node: unknown): unknown {
    if (typeof node === "string") return rewriteString(node);
    if (Array.isArray(node)) return node.map(walk);
    if (!isPlainObject(node)) return node;
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(node)) out[key] = walk(child);
    return out;
  }

  return walk(value);
}

type MediaCarrier = {
  media?: string[];
  cover?: string;
  listCover?: string;
  blocks?: unknown;
  body?: unknown;
};

function asPath(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function asPathList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

/**
 * When a cover or gallery file is replaced, copy that new URL into the
 * blocks and body text that the public page actually renders.
 */
export function applyCaseMediaEdits<T extends object>(prev: T | undefined, next: T): T {
  if (!prev) return next;
  const previous = prev as MediaCarrier;
  const incoming = next as MediaCarrier;
  const pairs: Array<[string | undefined, string | undefined]> = [
    [asPath(previous.cover), asPath(incoming.cover)],
    [asPath(previous.listCover), asPath(incoming.listCover)],
  ];
  const prevMedia = asPathList(previous.media);
  const nextMedia = asPathList(incoming.media);
  const count = Math.max(prevMedia.length, nextMedia.length);
  for (let index = 0; index < count; index += 1) {
    pairs.push([prevMedia[index], nextMedia[index]]);
  }

  let blocks = incoming.blocks;
  let body = incoming.body;
  for (const [from, to] of pairs) {
    if (!from || !to || mediaMatchKey(from) === mediaMatchKey(to)) continue;
    blocks = replaceMediaSrc(blocks, from, to);
    body = replaceMediaSrc(body, from, to);
  }
  if (blocks === incoming.blocks && body === incoming.body) return next;
  return { ...next, blocks, body } as T;
}

/** Same rewrite for cases/body/{slug}, where media lives on `shared`. */
export function applyBodyDocMediaEdits(prev: unknown, next: unknown): unknown {
  if (!isPlainObject(prev) || !isPlainObject(next)) return next;
  const prevShared = isPlainObject(prev.shared) ? prev.shared : {};
  const nextShared = isPlainObject(next.shared) ? next.shared : {};
  const pairs: Array<[string | undefined, string | undefined]> = [
    [asPath(prevShared.cover), asPath(nextShared.cover)],
    [asPath(prevShared.listCover), asPath(nextShared.listCover)],
  ];
  const prevMedia = asPathList(prevShared.media);
  const nextMedia = asPathList(nextShared.media);
  const count = Math.max(prevMedia.length, nextMedia.length);
  for (let index = 0; index < count; index += 1) {
    pairs.push([prevMedia[index], nextMedia[index]]);
  }
  const changes = pairs.filter(
    (pair): pair is [string, string] =>
      Boolean(pair[0] && pair[1] && mediaMatchKey(pair[0]) !== mediaMatchKey(pair[1]!)),
  );
  if (!changes.length) return next;

  const out: Record<string, unknown> = { ...next };
  for (const locale of locales) {
    const localeData = next[locale];
    if (!isPlainObject(localeData)) continue;
    let blocks = localeData.blocks;
    let body = localeData.body;
    for (const [from, to] of changes) {
      blocks = replaceMediaSrc(blocks, from, to);
      body = replaceMediaSrc(body, from, to);
    }
    out[locale] = { ...localeData, blocks, body };
  }
  return out;
}
