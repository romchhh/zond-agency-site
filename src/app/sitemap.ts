import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getAlternateLanguages, getLocalizedUrl } from "@/i18n/routing";
import { getBlogSlugs } from "@/i18n/blog";
import { getCaseSlugs } from "@/i18n/cases";
import { serviceSlugs } from "@/i18n/services";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const localeEntries = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: getAlternateLanguages(siteUrl),
    },
  }));

  const homeAliases = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale, "/home", { keepHomeAlias: true }),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: getAlternateLanguages(siteUrl, "/home", { keepHomeAlias: true }),
    },
  }));

  const serviceIndexEntries = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale, "/services"),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.95,
    alternates: {
      languages: getAlternateLanguages(siteUrl, "/services"),
    },
  }));

  const serviceEntries = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => {
      const pathname = `/services/${slug}`;

      return {
        url: getLocalizedUrl(siteUrl, locale, pathname),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: slug === "branding" ? 0.9 : 0.7,
        alternates: {
          languages: getAlternateLanguages(siteUrl, pathname),
        },
      };
    }),
  );

  const blogIndexEntries = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale, "/blog"),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    alternates: {
      languages: getAlternateLanguages(siteUrl, "/blog"),
    },
  }));

  const blogEntries = locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => {
      const pathname = `/blog/${slug}`;

      return {
        url: getLocalizedUrl(siteUrl, locale, pathname),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.75,
        alternates: {
          languages: getAlternateLanguages(siteUrl, pathname),
        },
      };
    }),
  );

  const contactEntries = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale, "/contact"),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: {
      languages: getAlternateLanguages(siteUrl, "/contact"),
    },
  }));

  const casesIndexEntries = locales.map((locale) => ({
    url: getLocalizedUrl(siteUrl, locale, "/cases"),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: {
      languages: getAlternateLanguages(siteUrl, "/cases"),
    },
  }));

  const caseEntries = locales.flatMap((locale) =>
    getCaseSlugs(locale).map((slug) => {
      const pathname = `/cases/${slug}`;

      return {
        url: getLocalizedUrl(siteUrl, locale, pathname),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.85,
        alternates: {
          languages: getAlternateLanguages(siteUrl, pathname),
        },
      };
    }),
  );

  const sections = ["projects", "team", "contact"] as const;

  const hashEntries = locales.flatMap((locale) => {
    const baseUrl = getLocalizedUrl(siteUrl, locale);

    return sections.map((section) => ({
      url: `${baseUrl}#${section}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: section === "contact" ? 0.8 : 0.9,
    }));
  });

  return [
    ...localeEntries,
    ...homeAliases,
    ...serviceIndexEntries,
    ...serviceEntries,
    ...blogIndexEntries,
    ...blogEntries,
    ...contactEntries,
    ...casesIndexEntries,
    ...caseEntries,
    ...hashEntries,
  ];
}
