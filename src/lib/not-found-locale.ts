import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/** Resolve 404 locale from route params, then middleware `x-locale`, then path. */
export async function resolveNotFoundLocale(
  params?: Promise<{ locale?: string }>,
): Promise<Locale> {
  const resolved = params ? await params : undefined;
  if (resolved?.locale && isLocale(resolved.locale)) return resolved.locale;

  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get("x-locale");
  if (headerLocale && isLocale(headerLocale)) return headerLocale;

  const pathname =
    requestHeaders.get("x-pathname") ??
    requestHeaders.get("next-url") ??
    requestHeaders.get("x-invoke-path") ??
    "";
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment) && segment !== defaultLocale) return segment;

  return defaultLocale;
}
