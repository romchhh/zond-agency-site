import type { ProjectItem } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getCases } from "@/i18n/cases";
import {
  getCaseCategories,
  type CaseCategory,
} from "@/i18n/cases/categories";
import { getCaseDetailPath } from "@/i18n/routing";
import type { ServiceSlug } from "@/i18n/services";

const SERVICE_CASE_CATEGORIES: Record<ServiceSlug, CaseCategory[]> = {
  branding: ["branding"],
  logo: ["branding"],
  identity: ["branding"],
  brandbook: ["branding"],
  rebranding: ["branding"],
  "brand-character": ["branding"],
  packaging: ["packaging"],
  smm: ["smm"],
  graphics: ["graphic"],
  illustration: ["graphic"],
  "web-development": ["web"],
  positioning: ["strategy"],
  naming: ["strategy", "branding"],
  communication: ["strategy"],
  "marketing-360": ["strategy", "smm"],
  "influence-marketing": ["strategy", "smm"],
};

function toProjectItem(
  locale: Locale,
  caseItem: ReturnType<typeof getCases>[number],
): ProjectItem {
  const image = caseItem.listCover ?? caseItem.cover;
  const isVideo = image.endsWith(".mp4") || image.endsWith(".webm");

  return {
    title: caseItem.title,
    description: caseItem.cardDescription ?? caseItem.description,
    image,
    poster: isVideo ? caseItem.cover : undefined,
    href: getCaseDetailPath(locale, caseItem.slug),
  };
}

export function getProjects(locale: Locale): ProjectItem[] {
  return getCases(locale).slice(0, 6).map((caseItem) => toProjectItem(locale, caseItem));
}

export function getServiceProjects(
  locale: Locale,
  service: ServiceSlug,
): ProjectItem[] {
  const categories = SERVICE_CASE_CATEGORIES[service];
  const cases = getCases(locale);
  const matched = cases.filter((item) =>
    getCaseCategories(item.slug).some((category) => categories.includes(category)),
  );

  return (matched.length > 0 ? matched : cases).map((caseItem) =>
    toProjectItem(locale, caseItem),
  );
}
