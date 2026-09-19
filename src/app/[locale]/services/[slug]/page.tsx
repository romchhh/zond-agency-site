import BrandingPage from "@/components/BrandingPage";
import ServiceTitlePage from "@/components/ServiceTitlePage";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/i18n/projects";
import {
  isServiceSlug,
  serviceMeta,
  serviceSlugs,
  serviceTitles,
} from "@/i18n/services";
import { createServiceMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) return {};

  return createServiceMetadata(locale, slug, serviceMeta[locale][slug]);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound();

  const dictionary = await getDictionary(locale);
  const title = serviceTitles[locale][slug];
  const eyebrow = `${dictionary.nav.services} / ${title}`;

  if (slug === "branding") {
    return (
      <BrandingPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  return (
    <ServiceTitlePage
      locale={locale}
      dictionary={dictionary}
      eyebrow={eyebrow}
      title={title}
    />
  );
}
