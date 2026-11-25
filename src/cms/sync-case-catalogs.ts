import { locales, type Locale } from "@/i18n/config";
import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import type { CaseItem } from "@/i18n/cases/types";

type CaseBodyDoc = {
  shared: Pick<CaseItem, "slug" | "cover" | "listCover" | "media" | "theme" | "mediaCaptions">;
} & Partial<
  Record<
    Locale,
    Pick<
      CaseItem,
      "title" | "description" | "tagline" | "serviceTag" | "body" | "blocks" | "cardDescription"
    >
  >
>;

/** After saving cases/body/{slug}, rebuild that slug inside cases/catalog/{locale}. */
export async function syncCaseBodyIntoCatalogs(slug: string, body: CaseBodyDoc): Promise<void> {
  for (const locale of locales) {
    const localeFields = body[locale];
    if (!localeFields) continue;
    const catalog =
      (await readCmsDoc<CaseItem[]>(`cases/catalog/${locale}`)) ?? [];
    const nextItem: CaseItem = {
      ...body.shared,
      ...localeFields,
    };
    const index = catalog.findIndex((item) => item.slug === slug);
    if (index >= 0) catalog[index] = nextItem;
    else catalog.push(nextItem);
    await writeCmsDoc(`cases/catalog/${locale}`, catalog);
  }
}
