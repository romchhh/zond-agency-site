import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export async function resolveRequestLocale(
  params?: Promise<{ locale?: string }>,
): Promise<Locale> {
  if (params) {
    const resolved = await params;
    if (resolved?.locale && isLocale(resolved.locale)) {
      return resolved.locale;
    }
  }

  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  if (localeHeader && isLocale(localeHeader)) {
    return localeHeader;
  }

  return defaultLocale;
}
