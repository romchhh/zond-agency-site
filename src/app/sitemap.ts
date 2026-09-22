import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getBlogSlugs } from "@/i18n/blog";
import { getCaseSlugs } from "@/i18n/cases";
import { serviceSlugs } from "@/i18n/services";
import {
  getAlternateLanguages,
  getBlogDetailPath,
  getBlogIndexPath,
  getCaseDetailPath,
  getCaseIndexPath,
  getLocalizedUrl,
  getPolicyPath,
  getServiceDetailPath,
  getServiceIndexPath,
} from "@/i18n/routing";
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

  const serviceIndexEntries = locales.map((locale) => {
    const pathname = getServiceIndexPath(locale);

    return {
      url: getLocalizedUrl(siteUrl, locale, pathname),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.95,
      alternates: {
        languages: getAlternateLanguages(siteUrl, pathname),
      },
    };
  });

  const serviceEntries = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => {
      const pathname = getServiceDetailPath(locale, slug);

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

  const blogIndexEntries = locales.map((locale) => {
    const pathname = getBlogIndexPath(locale);

    return {
      url: getLocalizedUrl(siteUrl, locale, pathname),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
      alternates: {
        languages: getAlternateLanguages(siteUrl, pathname),
      },
    };
  });

  const blogEntries = locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => {
      const pathname = getBlogDetailPath(locale, slug);

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

  const casesIndexEntries = locales.map((locale) => {
    const pathname = getCaseIndexPath(locale);

    return {
      url: getLocalizedUrl(siteUrl, locale, pathname),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: getAlternateLanguages(siteUrl, pathname),
      },
    };
  });

  const caseEntries = locales.flatMap((locale) =>
    getCaseSlugs(locale).map((slug) => {
      const pathname = getCaseDetailPath(locale, slug);

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

  const policyEntries = (["uk", "ru"] as const).map((locale) => {
    const pathname = getPolicyPath(locale);

    return {
      url: getLocalizedUrl(siteUrl, locale, pathname),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
      alternates: {
        languages: getAlternateLanguages(siteUrl, pathname),
      },
    };
  });

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
    ...policyEntries,
    ...hashEntries,
  ];
}
