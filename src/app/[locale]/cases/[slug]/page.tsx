import CasePostPage from "@/components/CasePostPage";
import { getCase, getCaseSlugs, getRelatedCases, isCaseSlug } from "@/i18n/cases";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createCaseMetadata, createNotFoundMetadata } from "@/lib/metadata";
import { renderLocalizedNotFound } from "@/lib/render-localized-not-found";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  if (!isCaseSlug(locale, slug)) {
    const dictionary = await getDictionary(locale);
    return createNotFoundMetadata(locale, dictionary);
  }

  const caseItem = getCase(locale, slug);
  if (!caseItem) {
    const dictionary = await getDictionary(locale);
    return createNotFoundMetadata(locale, dictionary);
  }

  return createCaseMetadata(
    locale,
    slug,
    {
      title: `${caseItem.title} — ZOND`,
      description: caseItem.description,
    },
    caseItem.cover || undefined,
  );
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!isCaseSlug(locale, slug)) return renderLocalizedNotFound(locale);

  const caseItem = getCase(locale, slug);
  if (!caseItem) return renderLocalizedNotFound(locale);

  const dictionary = await getDictionary(locale);
  const relatedCases = getRelatedCases(locale, slug);

  return (
    <CasePostPage
      locale={locale}
      dictionary={dictionary}
      caseItem={caseItem}
      relatedCases={relatedCases}
    />
  );
}
