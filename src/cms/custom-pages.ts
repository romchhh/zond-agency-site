import { readCmsDocSync } from "@/cms/store";
import type { Locale } from "@/i18n/config";

export type CustomPageContent = {
  title: string;
  description: string;
  body: string;
};

export function getCustomPageSlugs(): string[] {
  return readCmsDocSync<string[]>("pages/index") ?? [];
}

export function getCustomPage(
  locale: Locale,
  slug: string,
): CustomPageContent | undefined {
  const doc = readCmsDocSync<Partial<Record<Locale, CustomPageContent>>>(`pages/${slug}`);
  return doc?.[locale];
}

export function isCustomPageSlug(slug: string): boolean {
  return getCustomPageSlugs().includes(slug);
}
