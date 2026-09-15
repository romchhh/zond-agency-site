import { defaultLocale, type Locale } from "@/i18n/config";

export function getLocalePath(locale: Locale, hash?: string): string {
  const base = locale === defaultLocale ? "" : `/${locale}`;
  const path = base || "/";
  return hash ? `${path}#${hash}` : path;
}

export function getLocalizedUrl(siteUrl: string, locale: Locale): string {
  if (locale === defaultLocale) return siteUrl;
  return `${siteUrl}/${locale}`;
}

export function getAlternateLanguages(siteUrl: string): Record<string, string> {
  return {
    uk: siteUrl,
    en: `${siteUrl}/en`,
    ru: `${siteUrl}/ru`,
    "x-default": siteUrl,
  };
}
