import NotFoundView from "@/components/NotFoundView";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import { resolveNotFoundLocale } from "@/lib/not-found-locale";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const locale = await resolveNotFoundLocale(params);
  const dictionary = await getDictionary(locale);
  return createNotFoundMetadata(locale, dictionary);
}

export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const locale = await resolveNotFoundLocale(params);
  const dictionary = await getDictionary(locale);

  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
