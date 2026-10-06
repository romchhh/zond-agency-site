import type { Metadata } from "next";
import { defaultLocale, localeMeta, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import {
  getAlternateLanguages,
  getCaseDetailPath,
  getLocalizedUrl,
  getServiceDetailPath,
} from "@/i18n/routing";
import { applySeoOverride } from "@/i18n/seo-overrides";
import { media } from "@/lib/media";
import { getCanonicalSiteUrl, siteConfig } from "@/lib/site";

function siteOrigin() {
  return getCanonicalSiteUrl();
}

export function homeSeoPath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function createNotFoundMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const title = `${dictionary.notFound.title} | ZOND`;

  return {
    title,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function createPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
): Metadata {
  const siteUrl = siteOrigin();
  const pageUrl = getLocalizedUrl(siteUrl, locale);
  const { meta } = dictionary;
  const resolved = applySeoOverride(homeSeoPath(locale), meta);
  const { ogLocale } = localeMeta[locale];

  return {
    title: resolved.title,
    description: resolved.description,
    keywords: meta.keywords,
    alternates: {
      canonical: pageUrl,
      languages: getAlternateLanguages(siteUrl),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: pageUrl,
      siteName: siteConfig.name,
      title: resolved.title,
      description: resolved.description,
      images: [
        {
          url: media.ogImage,
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolved.title,
      description: resolved.description,
      images: [media.ogImage],
    },
  };
}

export function createServiceMetadata(
  locale: Locale,
  slug: string,
  meta: { title: string; description: string },
): Metadata {
  return createPathMetadata(locale, getServiceDetailPath(locale, slug), meta);
}

export function createCaseMetadata(
  locale: Locale,
  slug: string,
  meta: { title: string; description: string },
  image?: string,
): Metadata {
  return createPathMetadata(locale, getCaseDetailPath(locale, slug), meta, image);
}

export function createPathMetadata(
  locale: Locale,
  pathname: string,
  meta: { title: string; description: string },
  image?: string,
): Metadata {
  const siteUrl = siteOrigin();
  const pageUrl = getLocalizedUrl(siteUrl, locale, pathname);
  const { ogLocale } = localeMeta[locale];
  const ogImage = image || media.ogImage;
  const resolved = applySeoOverride(pathname, meta);

  return {
    title: resolved.title,
    description: resolved.description,
    alternates: {
      canonical: pageUrl,
      languages: getAlternateLanguages(siteUrl, pathname),
    },
    openGraph: {
      type: "article",
      locale: ogLocale,
      url: pageUrl,
      siteName: siteConfig.name,
      title: resolved.title,
      description: resolved.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: resolved.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolved.title,
      description: resolved.description,
      images: [ogImage],
    },
  };
}
