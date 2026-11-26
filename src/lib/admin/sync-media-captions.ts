import { locales, type Locale } from "@/i18n/config";
import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import { syncCaseBodyIntoCatalogs } from "@/cms/sync-case-catalogs";
import type { CaseItem } from "@/i18n/cases/types";
import {
  applyLocalizedCaptionsToBlocks,
  normalizeMediaCaptions,
} from "@/lib/admin/media-captions";

type CaseBodyDoc = {
  shared: Record<string, unknown>;
} & Partial<Record<Locale, Record<string, unknown>>>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

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
