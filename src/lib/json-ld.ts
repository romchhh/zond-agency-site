import { localeMeta, type Locale } from "@/i18n/config";
import { applySeoOverride } from "@/i18n/seo-overrides";
import { getLocalizedUrl } from "@/i18n/routing";
import { media } from "@/lib/media";
import { getCanonicalSiteUrl, siteConfig } from "@/lib/site";

export type JsonLdBreadcrumb = {
  name: string;
  path: string;
};

export type JsonLdArticle = {
  headline: string;
  image: string;
  datePublished: string;
  dateModified: string;
  path: string;
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "вул. Васильківська, 89",
  addressLocality: "Київ",
  addressCountry: "UA",
};

export function siteOrigin() {
  return getCanonicalSiteUrl().replace(/\/$/, "");
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const origin = siteOrigin();
  if (!path || path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageCanonicalUrl(locale: Locale, pathname: string) {
  return getLocalizedUrl(siteOrigin(), locale, pathname);
}

export function resolvePageCopy(
  pathname: string,
  meta: { title: string; description: string },
) {
  return applySeoOverride(pathname, meta);
}

export function organizationJsonLd() {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: origin,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.instagram, siteConfig.telegramBot],
    description: siteConfig.description,
    logo: absoluteUrl(media.logo),
    address: postalAddress,
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: pageCanonicalUrl(locale, "/"),
    inLanguage: localeMeta[locale].htmlLang,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function professionalServiceJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: pageCanonicalUrl(locale, "/"),
    image: absoluteUrl(media.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "Worldwide",
    address: postalAddress,
  };
}

export function webPageJsonLd(
  locale: Locale,
  pathname: string,
  name: string,
  description: string,
) {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: pageCanonicalUrl(locale, pathname),
    inLanguage: localeMeta[locale].htmlLang,
    description,
    isPartOf: {
      "@type": "WebSite",
      url: origin,
    },
  };
}

export function articleJsonLd(locale: Locale, article: JsonLdArticle) {
  const origin = siteOrigin();
  const pageUrl = pageCanonicalUrl(locale, article.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: absoluteUrl(article.image),
    inLanguage: localeMeta[locale].htmlLang,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(media.logo),
      },
    },
  };
}

export function breadcrumbListJsonLd(locale: Locale, crumbs: JsonLdBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: pageCanonicalUrl(locale, crumb.path),
    })),
  };
}
