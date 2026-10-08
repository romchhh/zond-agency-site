"use client";

import { useAppLocale } from "@/components/AppLocaleProvider";
import NotFoundView from "@/components/NotFoundView";

/**
 * `not-found` does not receive route params. Under `force-static` locale layout,
 * `headers()` is also unreliable — read locale/dictionary from the layout provider.
 */
export default function LocaleNotFound() {
  const { locale, dictionary } = useAppLocale();
  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
