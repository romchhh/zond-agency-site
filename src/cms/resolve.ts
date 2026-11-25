import type { Locale } from "@/i18n/config";
import { readCmsDocSync } from "@/cms/store";

export function cmsOrFallbackSync<T>(docId: string, fallback: () => T): T {
  const data = readCmsDocSync<T>(docId);
  return data ?? fallback();
}

export function cmsLocaleContent<T>(
  docId: string,
  fallback: Record<Locale, T>,
  locale: Locale,
): T {
  const data = readCmsDocSync<Record<Locale, T>>(docId);
  return data?.[locale] ?? fallback[locale];
}

export function cmsLocaleMap<T>(
  docId: string,
  fallback: Record<Locale, T>,
): Record<Locale, T> {
  return readCmsDocSync<Record<Locale, T>>(docId) ?? fallback;
}
