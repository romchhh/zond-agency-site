import type { ProjectItem } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getCases } from "@/i18n/cases";
import { getCaseDetailPath } from "@/i18n/routing";

export function getProjects(locale: Locale): ProjectItem[] {
  return getCases(locale)
    .slice(0, 6)
    .map((caseItem) => ({
      title: caseItem.title,
      description: caseItem.cardDescription ?? caseItem.description,
      image: caseItem.cover,
      href: getCaseDetailPath(locale, caseItem.slug),
    }));
}
