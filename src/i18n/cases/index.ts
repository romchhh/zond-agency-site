import type { Locale } from "@/i18n/config";
import type { CaseItem } from "./types";
import casesEn from "./cases.en";
import casesRu from "./cases.ru";
import casesUk from "./cases.uk";

const casesByLocale: Record<Locale, CaseItem[]> = {
  uk: casesUk,
  ru: casesRu,
  en: casesEn,
};

export type { CaseItem } from "./types";

export function getCases(locale: Locale): CaseItem[] {
  return casesByLocale[locale];
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
