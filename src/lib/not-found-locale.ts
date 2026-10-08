import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/** Resolve 404 locale from middleware `x-locale` / path (not-found has no params). */
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
