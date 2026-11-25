import type { Locale } from "@/i18n/config";
import { PUBLISHED_CASE_SLUGS_FOR_CMS } from "@/cms/case-slugs";
import { readCmsDocSync } from "@/cms/store";
import type { CaseItem } from "./types";
import { getCaseCardDescription } from "./card-descriptions";
import casesEn from "./cases.en";
import casesRu from "./cases.ru";
import casesUk from "./cases.uk";
import { mergeCaseCatalog } from "./merge-catalog";

const casesByLocaleFallback: Record<Locale, CaseItem[]> = {
  uk: casesUk,
  ru: casesRu,
  en: mergeCaseCatalog("en", casesUk, casesEn),
};

function casesByLocale(locale: Locale): CaseItem[] {
  return (
    readCmsDocSync<CaseItem[]>(`cases/catalog/${locale}`) ??
    casesByLocaleFallback[locale]
  );
}

/**
 * Published on site (listings, homepage, /projects routes).
 * CMS `cases/published` overrides the built-in list after seed/create.
 */
function getPublishedSlugOrder(): Map<string, number> {
  const fromCms = readCmsDocSync<string[]>("cases/published");
  const list = fromCms?.length ? fromCms : [...PUBLISHED_CASE_SLUGS_FOR_CMS];
  return new Map(list.map((slug, index) => [slug, index]));
}

export type { CaseItem } from "./types";

export function getCases(locale: Locale): CaseItem[] {
  const publishedSlugOrder = getPublishedSlugOrder();
  return casesByLocale(locale)
    .filter((item) => publishedSlugOrder.has(item.slug))
    .sort(
      (a, b) =>
        (publishedSlugOrder.get(a.slug) ?? 0) -
        (publishedSlugOrder.get(b.slug) ?? 0),
    )
    .map((item) => {
      const cardDescription = getCaseCardDescription(locale, item.slug);
      return cardDescription ? { ...item, cardDescription } : item;
    });
}

export function getCase(locale: Locale, slug: string): CaseItem | undefined {
  return getCases(locale).find((item) => item.slug === slug);
}

export function getCaseSlugs(locale: Locale): string[] {
  return getCases(locale).map((item) => item.slug);
}

export function isCaseSlug(locale: Locale, slug: string): boolean {
  return getCaseSlugs(locale).includes(slug);
}

export function getRelatedCases(
  locale: Locale,
  slug: string,
  limit = 3,
): CaseItem[] {
  const cases = getCases(locale);
  const currentIndex = cases.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) return [];

  const related: CaseItem[] = [];
  for (let offset = 1; related.length < limit && offset < cases.length; offset++) {
    const item = cases[(currentIndex + offset) % cases.length];
    if (item.slug !== slug) related.push(item);
  }

  return related;
}
