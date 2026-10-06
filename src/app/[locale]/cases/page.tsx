import CasesIndexPage from "@/components/CasesIndexPage";
import { getCases } from "@/i18n/cases";
import { casesIndexMeta } from "@/i18n/cases/meta";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPathMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return createPathMetadata(locale, "/cases", casesIndexMeta[locale]);
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const cases = getCases(locale);

  return (
    <CasesIndexPage locale={locale} dictionary={dictionary} cases={cases} />
  );
}
