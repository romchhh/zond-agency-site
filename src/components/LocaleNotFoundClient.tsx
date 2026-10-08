"use client";

import NotFoundView from "@/components/NotFoundView";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import ru from "@/i18n/dictionaries/ru";
import uk from "@/i18n/dictionaries/uk";
import { localeFromPathname } from "@/lib/locale-from-pathname";
import { usePathname } from "next/navigation";

const dictionaries: Record<Locale, Dictionary> = { uk, en, ru };

/**
 * `not-found` has no route params; locale layout is `force-static` so
 * middleware headers are empty. Derive locale from the URL pathname.
 */
export default function LocaleNotFoundClient() {
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);
  return <NotFoundView locale={locale} dictionary={dictionaries[locale]} />;
}
