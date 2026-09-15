import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  uk: () => import("@/i18n/dictionaries/uk").then((module) => module.default),
  en: () => import("@/i18n/dictionaries/en").then((module) => module.default),
  ru: () => import("@/i18n/dictionaries/ru").then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
