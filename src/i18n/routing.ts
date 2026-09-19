import { defaultLocale, type Locale } from "@/i18n/config";

function normalizePath(pathname = ""): string {
  const stripped = pathname.replace(/^\/(en|ru|uk)(?=\/|$)/, "") || "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function getLocalePath(locale: Locale, pathname = "/"): string {
  const path = normalizePath(pathname);
  const suffix = path === "/" ? "" : path;

  if (locale === defaultLocale) return suffix || "/";
  return `/${locale}${suffix}`;
}

export function getLocalizedUrl(
  siteUrl: string,
  locale: Locale,
  pathname = "/",
  options?: { keepHomeAlias?: boolean },
): string {
  const path = normalizePath(pathname);
  const canonicalPath =
    path === "/home" && !options?.keepHomeAlias ? "/" : path;
  const suffix = canonicalPath === "/" ? "" : canonicalPath;
  const origin = siteUrl.replace(/\/$/, "");

  if (locale === defaultLocale) return `${origin}${suffix || ""}` || origin;
  return `${origin}/${locale}${suffix}`;
}

export function getAlternateLanguages(
  siteUrl: string,
  pathname = "/",
  options?: { keepHomeAlias?: boolean },
): Record<string, string> {
  return {
    uk: getLocalizedUrl(siteUrl, "uk", pathname, options),
    en: getLocalizedUrl(siteUrl, "en", pathname, options),
    ru: getLocalizedUrl(siteUrl, "ru", pathname, options),
    "x-default": getLocalizedUrl(siteUrl, "uk", pathname, options),
  };
}

