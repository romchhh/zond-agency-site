import NotFoundView from "@/components/NotFoundView";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { headers } from "next/headers";

async function resolveNotFoundLocale(params?: Promise<{ locale?: string }>) {
  const resolved = params ? await params : undefined;
  if (resolved?.locale && isLocale(resolved.locale)) return resolved.locale;

  const headerLocale = (await headers()).get("x-locale");
  if (headerLocale && isLocale(headerLocale)) return headerLocale;

  return defaultLocale;
}

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
