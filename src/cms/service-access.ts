import { cmsLocaleContent } from "@/cms/resolve";
import type { Locale } from "@/i18n/config";
import type { BrandingSeoContent } from "@/i18n/branding-seo";

export function getServicePageContent<T>(
  slug: string,
  fallback: Record<Locale, T>,
  locale: Locale,
): T {
  return cmsLocaleContent(`services/${slug}/page`, fallback, locale);
}

export function getServiceSeoContent(
  slug: string,
  fallback: Record<Locale, BrandingSeoContent> | ((locale: Locale) => BrandingSeoContent),
  locale: Locale,
): BrandingSeoContent {
  if (typeof fallback === "function") {
    const map = {
      uk: fallback("uk"),
      en: fallback("en"),
      ru: fallback("ru"),
    };
    return cmsLocaleContent(`services/${slug}/seo`, map, locale);
  }
  return cmsLocaleContent(`services/${slug}/seo`, fallback, locale);
}
