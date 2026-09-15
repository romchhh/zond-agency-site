import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getLocalizedUrl } from "@/i18n/routing";
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
      languages: {
        uk: siteUrl,
        en: `${siteUrl}/en`,
        ru: `${siteUrl}/ru`,
        "x-default": siteUrl,
      },
    },
  }));

  const sections = ["services", "projects", "team", "contact"] as const;

  const hashEntries = locales.flatMap((locale) => {
    const baseUrl = getLocalizedUrl(siteUrl, locale);

    return sections.map((section) => ({
      url: `${baseUrl}#${section}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: section === "contact" ? 0.8 : 0.9,
    }));
  });

  return [...localeEntries, ...hashEntries];
}
