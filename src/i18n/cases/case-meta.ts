import { readCmsDocSync } from "@/cms/store";
import type { Locale } from "@/i18n/config";
import { CASE_SERVICE_TAGS, CASE_TESTIMONIALS } from "./case-meta.locale";
import { caseMetaEntries, type CaseMetaEntry } from "./case-meta-data";

export type { CaseMetaEntry };
export { caseMetaEntries };

export type CaseTestimonial = {
  heading?: string;
  paragraphs: string[];
  author: string;
  role: string;
};

function resolvedCaseMeta() {
  return (
    readCmsDocSync<Record<string, CaseMetaEntry>>("cases/case-meta") ?? caseMetaEntries
  );
}

export function getCaseClientUrl(slug: string): string | undefined {
  return resolvedCaseMeta()[slug]?.clientUrl;
}

export function getCaseServiceTag(slug: string, locale: Locale): string | undefined {
  return CASE_SERVICE_TAGS[slug]?.[locale];
}

export function getCaseMetaCategories(slug: string) {
  return resolvedCaseMeta()[slug]?.categories;
}

export function getCaseTestimonial(
  slug: string,
  locale: Locale,
): CaseTestimonial | undefined {
  return CASE_TESTIMONIALS[slug]?.[locale];
}
