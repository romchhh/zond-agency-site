import BrandbookPage from "@/components/BrandbookPage";
import BrandingPage from "@/components/BrandingPage";
import CommunicationPage from "@/components/CommunicationPage";
import GraphicsPage from "@/components/GraphicsPage";
import IdentityPage from "@/components/IdentityPage";
import IllustrationPage from "@/components/IllustrationPage";
import InfluenceMarketingPage from "@/components/InfluenceMarketingPage";
import LogoPage from "@/components/LogoPage";
import NamingPage from "@/components/NamingPage";
import PackagingPage from "@/components/PackagingPage";
import PositioningPage from "@/components/PositioningPage";
import SmmPage from "@/components/SmmPage";
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

  if (slug === "logo") {
    return (
      <LogoPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "brandbook") {
    return (
      <BrandbookPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "packaging") {
    return (
      <PackagingPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "illustration") {
    return (
      <IllustrationPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "smm") {
    return (
      <SmmPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "graphics") {
    return (
      <GraphicsPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "identity") {
    return (
      <IdentityPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "naming") {
    return (
      <NamingPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "positioning") {
    return (
      <PositioningPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "communication") {
    return (
      <CommunicationPage
        locale={locale}
        dictionary={dictionary}
        projects={getProjects(locale)}
      />
    );
  }

  if (slug === "influence-marketing") {
    return (
      <InfluenceMarketingPage
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
