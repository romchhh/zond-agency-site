import { locales, type Locale } from "@/i18n/config";
import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import { syncCaseBodyIntoCatalogs } from "@/cms/sync-case-catalogs";
import type { CaseItem } from "@/i18n/cases/types";

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

type CaseBodyDoc = {
  shared: Record<string, unknown>;
} & Partial<Record<Locale, Record<string, unknown>>>;

/**
 * After saving a locale catalog, push multilingual mediaCaptions into
 * cases/body/{slug} (all locales) and rebuild every catalog from body.
 */
export async function syncCatalogMediaCaptions(
  sourceLocale: Locale,
  catalog: CaseItem[],
): Promise<void> {
  for (const item of catalog) {
    if (!item.slug || !item.mediaCaptions) continue;
    const captions = normalizeMediaCaptions(item.mediaCaptions, sourceLocale);
    if (!Object.keys(captions).length) continue;

    const bodyId = `cases/body/${item.slug}`;
    const body = await readCmsDoc<CaseBodyDoc>(bodyId);
    if (!body || !isPlainObject(body)) {
      // No body doc — patch sibling catalogs directly.
      for (const locale of locales) {
        if (locale === sourceLocale) continue;
        const sibling =
          (await readCmsDoc<CaseItem[]>(`cases/catalog/${locale}`)) ?? [];
        const index = sibling.findIndex((row) => row.slug === item.slug);
        if (index < 0) continue;
        const row = sibling[index]!;
        sibling[index] = {
          ...row,
          mediaCaptions: captions,
          blocks: applyLocalizedCaptionsToBlocks(row.blocks, captions, locale) as CaseItem["blocks"],
        };
        await writeCmsDoc(`cases/catalog/${locale}`, sibling);
      }
      continue;
    }

    const nextBody: CaseBodyDoc = {
      ...body,
      shared: {
        ...body.shared,
        mediaCaptions: captions,
        ...(item.cover ? { cover: item.cover } : {}),
        ...(item.listCover !== undefined ? { listCover: item.listCover } : {}),
        ...(item.media ? { media: item.media } : {}),
        ...(item.theme ? { theme: item.theme } : {}),
        slug: item.slug,
      },
    };

    for (const locale of locales) {
      const localeData = body[locale];
      if (!localeData && locale !== sourceLocale) continue;
      const base =
        locale === sourceLocale
          ? {
              ...(localeData ?? {}),
              title: item.title,
              description: item.description,
              tagline: item.tagline,
              serviceTag: item.serviceTag,
              body: item.body,
              cardDescription: item.cardDescription,
              blocks: item.blocks ?? localeData?.blocks,
            }
          : { ...(localeData ?? {}) };
      nextBody[locale] = {
        ...base,
        blocks: applyLocalizedCaptionsToBlocks(base.blocks, captions, locale),
      };
    }

    await writeCmsDoc(bodyId, nextBody);
    await syncCaseBodyIntoCatalogs(item.slug, nextBody as never);
  }
}
