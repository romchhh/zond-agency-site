import { defaultLocale, type Locale } from "@/i18n/config";

/** Public service slug. Marketing 360 is `marketing360` in every language. */
export function toServiceUrlSlug(slug: string, _locale?: Locale): string {
  if (slug === "marketing-360") return "marketing360";
  return slug;
}

export function fromServiceUrlSlug(urlSlug: string): string {
  if (urlSlug === "marketing360" || urlSlug === "marketing-360") {
    return "marketing-360";
  }
  return urlSlug;
}

function withLocalePrefix(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
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

  const caseEnLegacy = path.match(/^\/projects-eng\/([^/]+)$/);
  if (caseEnLegacy) {
    return { route: { type: "case-detail", slug: caseEnLegacy[1] }, locale: "en" };
  }

  const caseRuLegacy = path.match(/^\/ru-projects\/([^/]+)$/);
  if (caseRuLegacy) {
    return { route: { type: "case-detail", slug: caseRuLegacy[1] }, locale: "ru" };
  }

  const serviceUk = path.match(/^\/our-services\/([^/]+)$/);
  if (serviceUk) {
    return {
      route: { type: "service-detail", slug: fromServiceUrlSlug(serviceUk[1]) },
      locale: "uk",
    };
  }

  const serviceEnLegacy = path.match(/^\/our-services-eng\/([^/]+)$/);
  if (serviceEnLegacy) {
    return {
      route: { type: "service-detail", slug: fromServiceUrlSlug(serviceEnLegacy[1]) },
      locale: "en",
    };
  }

  const blogRuLegacy = path.match(/^\/ru-blog\/([^/]+)$/);
  if (blogRuLegacy) {
    return { route: { type: "blog-detail", slug: blogRuLegacy[1] }, locale: "ru" };
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
  } else if (path.startsWith("/uk/")) {
    locale = "uk";
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

  const caseDetail = rest.match(/^\/(?:projects|cases)\/([^/]+)$/);
  if (caseDetail) {
    return { route: { type: "case-detail", slug: caseDetail[1] }, locale };
  }

  if (rest === "/services") {
    return { route: { type: "service-index" }, locale };
  }

  const serviceDetail = rest.match(/^\/(?:our-services|services)\/([^/]+)$/);
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
      return withLocalePrefix(locale, "/home");
    case "case-index":
      return withLocalePrefix(locale, "/cases");
    case "case-detail":
      return withLocalePrefix(locale, `/projects/${route.slug}`);
    case "service-index":
      return withLocalePrefix(locale, "/services");
    case "service-detail":
      return withLocalePrefix(locale, `/our-services/${toServiceUrlSlug(route.slug)}`);
    case "blog-index":
      return withLocalePrefix(locale, "/blog");
    case "blog-detail":
      return withLocalePrefix(locale, `/blog/${route.slug}`);
    case "contact":
      return withLocalePrefix(locale, "/contact");
    case "policy":
      return withLocalePrefix(locale, "/policy");
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

/** Map public pretty URLs onto App Router files. Old aliases are 308s in next.config. */
export function resolveLegacyRewrite(
  pathname: string,
): { locale: Locale; internalPath: string } | null {
  const caseUk = pathname.match(/^\/projects\/([^/]+)$/);
  if (caseUk) {
    return { locale: "uk", internalPath: `/uk/cases/${caseUk[1]}` };
  }

  const caseLocalized = pathname.match(/^\/(en|ru)\/projects\/([^/]+)$/);
  if (caseLocalized) {
    return {
      locale: caseLocalized[1] as Locale,
      internalPath: `/${caseLocalized[1]}/cases/${caseLocalized[2]}`,
    };
  }

  const serviceUk = pathname.match(/^\/our-services\/([^/]+)$/);
  if (serviceUk) {
    const slug = fromServiceUrlSlug(serviceUk[1]);
    return { locale: "uk", internalPath: `/uk/services/${slug}` };
  }

  const serviceLocalized = pathname.match(/^\/(en|ru)\/our-services\/([^/]+)$/);
  if (serviceLocalized) {
    const slug = fromServiceUrlSlug(serviceLocalized[2]);
    return {
      locale: serviceLocalized[1] as Locale,
      internalPath: `/${serviceLocalized[1]}/services/${slug}`,
    };
  }

  if (pathname === "/policy") {
    return { locale: "uk", internalPath: "/uk/policy" };
  }

  return null;
}
