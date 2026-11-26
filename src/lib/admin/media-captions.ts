import { locales, type Locale } from "@/i18n/config";

export type LocalizedCaption = Partial<Record<Locale, string>>;
export type MediaCaptionsStore = Record<string, string | LocalizedCaption>;

export function mediaMatchKey(path: string): string {
  return path
    .trim()
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
