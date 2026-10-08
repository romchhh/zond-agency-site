import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/** First path segment if it is a non-default locale; otherwise default (UK is unprefixed). */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment)) return segment;
  return defaultLocale;
}
