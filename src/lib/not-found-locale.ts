import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/**
 * Resolve 404 locale for the root `app/not-found` (no locale layout).
 * Segment `app/[locale]/not-found` reads locale from AppLocaleProvider instead —
 * `not-found` files do not receive params, and `force-static` blocks headers there.
 */
export async function resolveNotFoundLocale(): Promise<Locale> {
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
