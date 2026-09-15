import type { Metadata } from "next";
import { localeMeta, type Locale } from "@/i18n/config";
import { getAlternateLanguages, getLocalizedUrl } from "@/i18n/routing";
import type { Dictionary } from "@/i18n/dictionary";
import { media } from "@/lib/media";
import { getSiteUrl, siteConfig } from "@/lib/site";

export function createPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
): Metadata {
  const siteUrl = getSiteUrl();
  const pageUrl = getLocalizedUrl(siteUrl, locale);
  const { meta } = dictionary;
  const { ogLocale } = localeMeta[locale];

  return {
    title: meta.title,
    description: meta.description,
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
      title: meta.title,
      description: meta.description,
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
      title: meta.title,
      description: meta.description,
      images: [media.ogImage],
    },
  };
}
