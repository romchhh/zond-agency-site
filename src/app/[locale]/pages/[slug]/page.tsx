import CustomCmsPage from "@/components/CustomCmsPage";
import PageJsonLd from "@/components/PageJsonLd";
import {
  getCustomPage,
  getCustomPageSlugs,
  isCustomPageSlug,
} from "@/cms/custom-pages";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalePath } from "@/i18n/routing";
import { createPathMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export function generateStaticParams() {
  const slugs = getCustomPageSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isCustomPageSlug(slug)) return {};
  const content = getCustomPage(locale, slug);
  if (!content) return {};
  return createPathMetadata(locale, getLocalePath(locale, `/pages/${slug}`), {
    title: content.title,
    description: content.description || content.title,
  });
}

export default async function CmsCustomPageRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isCustomPageSlug(slug)) notFound();

  const content = getCustomPage(locale, slug);
  if (!content) notFound();

  const dictionary = await getDictionary(locale);
  const pathname = getLocalePath(locale, `/pages/${slug}`);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={pathname}
        name={content.title}
        description={content.description || content.title}
      />
      <CustomCmsPage
        locale={locale}
        dictionary={dictionary}
        slug={slug}
        content={content}
      />
    </>
  );
}
