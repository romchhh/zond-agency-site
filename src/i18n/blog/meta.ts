import type { Locale } from "@/i18n/config";

export const blogIndexMeta: Record<Locale, { title: string; description: string }> = {
  uk: {
    title: "Блог — ZOND",
    description:
      "Статті про брендинг, логотипи, брендбуки, дизайн упаковки та маркетинг від агенції ZOND.",
  },
  en: {
    title: "Blog — ZOND",
    description:
      "Articles on branding, logos, brand books, packaging design, and marketing from ZOND agency.",
  },
  ru: {
    title: "Блог — ZOND",
    description:
      "Статьи о брендинге, логотипах, брендбуках, дизайне упаковки и маркетинге от агентства ZOND.",
  },
};
