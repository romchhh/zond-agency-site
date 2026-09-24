import CasePostPage from "@/components/CasePostPage";
import { getCase, getCaseSlugs, getRelatedCases, isCaseSlug } from "@/i18n/cases";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createCaseMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

/** Pre-rendered case pages; refresh at most once per day on the host. */
export const revalidate = 86400;

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
  if (!isLocale(locale) || !isCaseSlug(locale, slug)) return {};

  const caseItem = getCase(locale, slug);
  if (!caseItem) return {};

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
  if (!isLocale(locale) || !isCaseSlug(locale, slug)) notFound();

  const caseItem = getCase(locale, slug);
  if (!caseItem) notFound();

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
