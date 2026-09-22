import { defaultLocale, type Locale } from "@/i18n/config";

/** Matches zond.agency sitemap: UK uses marketing360, EN/RU use marketing-360. */
export function toServiceUrlSlug(slug: string, locale: Locale): string {
  if (slug === "marketing-360") {
    return locale === "uk" ? "marketing360" : "marketing-360";
  }
  return slug;
}

export function fromServiceUrlSlug(urlSlug: string): string {
  if (urlSlug === "marketing360" || urlSlug === "marketing-360") {
    return "marketing-360";
  }
  return urlSlug;
}

type Route =
  | { type: "home" }
  | { type: "home-alias" }
  | { type: "case-index" }
  | { type: "case-detail"; slug: string }
  | { type: "service-index" }
  | { type: "service-detail"; slug: string }
  | { type: "blog-index" }
  | { type: "blog-detail"; slug: string }
  | { type: "contact" }
  | { type: "policy" }
  | { type: "unknown"; path: string };

function normalizePath(pathname = ""): string {
  const stripped = pathname.replace(/^\/(en|ru|uk)(?=\/|$)/, "") || "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function parsePublicPath(pathname = "/"): { route: Route; locale: Locale } {
  const path = pathname.replace(/\/$/, "") || "/";

  const caseUk = path.match(/^\/projects\/([^/]+)$/);
  if (caseUk) {
    return { route: { type: "case-detail", slug: caseUk[1] }, locale: "uk" };
  }

  const caseEn = path.match(/^\/projects-eng\/([^/]+)$/);
  if (caseEn) {
    return { route: { type: "case-detail", slug: caseEn[1] }, locale: "en" };
  }

  const caseRu = path.match(/^\/ru-projects\/([^/]+)$/);
  if (caseRu) {
    return { route: { type: "case-detail", slug: caseRu[1] }, locale: "ru" };
  }

  const serviceUk = path.match(/^\/our-services\/([^/]+)$/);
  if (serviceUk) {
    return {
      route: { type: "service-detail", slug: fromServiceUrlSlug(serviceUk[1]) },
      locale: "uk",
    };
  }

  const serviceEn = path.match(/^\/our-services-eng\/([^/]+)$/);
  if (serviceEn) {
    return {
      route: { type: "service-detail", slug: fromServiceUrlSlug(serviceEn[1]) },
      locale: "en",
    };
  }

  const blogRu = path.match(/^\/ru-blog\/([^/]+)$/);
  if (blogRu) {
    return { route: { type: "blog-detail", slug: blogRu[1] }, locale: "ru" };
  }

  if (path === "/policy") {
    return { route: { type: "policy" }, locale: "uk" };
  }

  if (path === "/ru/policy-ru") {
    return { route: { type: "policy" }, locale: "ru" };
  }

  let locale: Locale = defaultLocale;
  let rest = path;

  if (path.startsWith("/en/")) {
    locale = "en";
    rest = path.slice(3) || "/";
  } else if (path.startsWith("/ru/")) {
    locale = "ru";
    rest = path.slice(3) || "/";
  }

  if (rest === "" || rest === "/") {
    return { route: { type: "home" }, locale };
  }

  if (rest === "/home") {
    return { route: { type: "home-alias" }, locale };
  }

  if (rest === "/cases") {
    return { route: { type: "case-index" }, locale };
  }

  const caseDetail = rest.match(/^\/cases\/([^/]+)$/);
  if (caseDetail) {
    return { route: { type: "case-detail", slug: caseDetail[1] }, locale };
  }

  if (rest === "/services") {
    return { route: { type: "service-index" }, locale };
  }

  const serviceDetail = rest.match(/^\/services\/([^/]+)$/);
  if (serviceDetail) {
    return {
      route: { type: "service-detail", slug: fromServiceUrlSlug(serviceDetail[1]) },
      locale,
    };
  }

  if (rest === "/blog" || rest === "/blog-ru") {
    return { route: { type: "blog-index" }, locale };
  }

  const blogDetail = rest.match(/^\/blog\/([^/]+)$/);
  if (blogDetail) {
    return { route: { type: "blog-detail", slug: blogDetail[1] }, locale };
  }

  if (rest === "/contact") {
    return { route: { type: "contact" }, locale };
  }

  if (rest === "/policy" || rest === "/policy-ru") {
    return { route: { type: "policy" }, locale };
  }

  return { route: { type: "unknown", path }, locale };
}

export function buildPublicPath(locale: Locale, route: Route): string {
  switch (route.type) {
    case "home":
      return locale === defaultLocale ? "/" : `/${locale}`;
    case "home-alias":
      return locale === defaultLocale ? "/home" : `/${locale}/home`;
    case "case-index":
      return locale === defaultLocale ? "/cases" : `/${locale}/cases`;
    case "case-detail":
      if (locale === "uk") return `/projects/${route.slug}`;
      if (locale === "en") return `/projects-eng/${route.slug}`;
      return `/ru-projects/${route.slug}`;
    case "service-index":
      return locale === defaultLocale ? "/services" : `/${locale}/services`;
    case "service-detail": {
      const urlSlug = toServiceUrlSlug(route.slug, locale);
      if (locale === "uk") return `/our-services/${urlSlug}`;
      if (locale === "en") return `/our-services-eng/${urlSlug}`;
      return `/ru/services/${urlSlug}`;
    }
    case "blog-index":
      if (locale === "ru") return "/ru/blog-ru";
      return locale === defaultLocale ? "/blog" : `/${locale}/blog`;
    case "blog-detail":
      if (locale === "ru") return `/ru-blog/${route.slug}`;
      return locale === defaultLocale ? `/blog/${route.slug}` : `/${locale}/blog/${route.slug}`;
    case "contact":
      return locale === defaultLocale ? "/contact" : `/${locale}/contact`;
    case "policy":
      if (locale === "uk") return "/policy";
      if (locale === "ru") return "/ru/policy-ru";
      return "/en/policy";
    case "unknown":
      return route.path;
  }
}

export function getCaseDetailPath(locale: Locale, slug: string): string {
  return buildPublicPath(locale, { type: "case-detail", slug });
}

export function getCaseIndexPath(locale: Locale): string {
  return buildPublicPath(locale, { type: "case-index" });
}

export function getServiceDetailPath(locale: Locale, slug: string): string {
  return buildPublicPath(locale, { type: "service-detail", slug });
}

export function getServiceIndexPath(locale: Locale): string {
  return buildPublicPath(locale, { type: "service-index" });
}

export function getBlogDetailPath(locale: Locale, slug: string): string {
  return buildPublicPath(locale, { type: "blog-detail", slug });
}

export function getBlogIndexPath(locale: Locale): string {
  return buildPublicPath(locale, { type: "blog-index" });
}

export function getPolicyPath(locale: Locale): string {
  return buildPublicPath(locale, { type: "policy" });
}

export function getLocalePath(locale: Locale, pathname = "/"): string {
  const { route } = parsePublicPath(pathname);

  if (route.type !== "unknown") {
    return buildPublicPath(locale, route);
  }

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
  const { route } = parsePublicPath(pathname);
  const origin = siteUrl.replace(/\/$/, "");

  if (route.type === "home-alias" && !options?.keepHomeAlias) {
    return getLocalizedUrl(siteUrl, locale, "/", options);
  }

  const publicPath = route.type === "unknown"
    ? getLocalePath(locale, pathname)
    : buildPublicPath(locale, route);

  if (publicPath === "/") return origin;
  return `${origin}${publicPath}`;
}

export function getAlternateLanguages(
  siteUrl: string,
  pathname = "/",
  options?: { keepHomeAlias?: boolean },
): Record<string, string> {
  const { route } = parsePublicPath(pathname);
  const origin = siteUrl.replace(/\/$/, "");

  if (route.type === "unknown") {
    return {
      uk: getLocalizedUrl(siteUrl, "uk", pathname, options),
      en: getLocalizedUrl(siteUrl, "en", pathname, options),
      ru: getLocalizedUrl(siteUrl, "ru", pathname, options),
      "x-default": getLocalizedUrl(siteUrl, "uk", pathname, options),
    };
  }

  const effectiveRoute =
    route.type === "home-alias" && !options?.keepHomeAlias
      ? { type: "home" as const }
      : route;

  const build = (locale: Locale) => {
    const publicPath = buildPublicPath(locale, effectiveRoute);
    return publicPath === "/" ? origin : `${origin}${publicPath}`;
  };

  return {
    uk: build("uk"),
    en: build("en"),
    ru: build("ru"),
    "x-default": build("uk"),
  };
}

export function resolveLegacyRewrite(
  pathname: string,
): { locale: Locale; internalPath: string } | null {
  const caseUk = pathname.match(/^\/projects\/([^/]+)$/);
  if (caseUk) {
    return { locale: "uk", internalPath: `/uk/cases/${caseUk[1]}` };
  }

  const caseEn = pathname.match(/^\/projects-eng\/([^/]+)$/);
  if (caseEn) {
    return { locale: "en", internalPath: `/en/cases/${caseEn[1]}` };
  }

  const caseRu = pathname.match(/^\/ru-projects\/([^/]+)$/);
  if (caseRu) {
    return { locale: "ru", internalPath: `/ru/cases/${caseRu[1]}` };
  }

  const serviceUk = pathname.match(/^\/our-services\/([^/]+)$/);
  if (serviceUk) {
    const slug = fromServiceUrlSlug(serviceUk[1]);
    return { locale: "uk", internalPath: `/uk/services/${slug}` };
  }

  const serviceEn = pathname.match(/^\/our-services-eng\/([^/]+)$/);
  if (serviceEn) {
    const slug = fromServiceUrlSlug(serviceEn[1]);
    return { locale: "en", internalPath: `/en/services/${slug}` };
  }

  const blogRu = pathname.match(/^\/ru-blog\/([^/]+)$/);
  if (blogRu) {
    return { locale: "ru", internalPath: `/ru/blog/${blogRu[1]}` };
  }

  if (pathname === "/ru/blog-ru") {
    return { locale: "ru", internalPath: "/ru/blog" };
  }

  if (pathname === "/policy") {
    return { locale: "uk", internalPath: "/uk/policy" };
  }

  if (pathname === "/ru/policy-ru") {
    return { locale: "ru", internalPath: "/ru/policy" };
  }

  return null;
}
