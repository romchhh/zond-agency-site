import NotFoundView from "@/components/NotFoundView";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/** Localized 404 UI when `not-found.tsx` cannot read locale under `force-static`. */
export async function renderLocalizedNotFound(locale: Locale) {
  const dictionary = await getDictionary(locale);
  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
