export const locales = ["uk", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export const localeMeta: Record<
  Locale,
  {
    code: string;
    label: string;
    htmlLang: string;
    ogLocale: string;
    hreflang: string;
  }
> = {
  uk: {
    code: "UA",
    label: "Українська",
    htmlLang: "uk",
    ogLocale: "uk_UA",
    hreflang: "uk",
  },
  en: {
    code: "ENG",
    label: "English",
    htmlLang: "en",
    ogLocale: "en_US",
    hreflang: "en",
  },
  ru: {
    code: "RU",
    label: "Русский",
    htmlLang: "ru",
    ogLocale: "ru_RU",
    hreflang: "ru",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
