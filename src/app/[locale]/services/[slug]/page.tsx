import BrandbookPage from "@/components/BrandbookPage";
import BrandingPage from "@/components/BrandingPage";
import BrandCharacterPage from "@/components/BrandCharacterPage";
import CommunicationPage from "@/components/CommunicationPage";
import WebDevelopmentPage from "@/components/WebDevelopmentPage";
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
import { getServiceProjects } from "@/i18n/projects";
import { getWebDevelopmentProjects } from "@/i18n/web-development";
import {
  isServiceSlug,
  serviceMeta,
  serviceSlugs,
} from "@/i18n/services";
import { createServiceMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = false;

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
  const projects = getServiceProjects(locale, slug);

  if (slug === "branding") {
    return (
      <BrandingPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "logo") {
    return (
      <LogoPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "brandbook") {
    return (
      <BrandbookPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "packaging") {
    return (
      <PackagingPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "illustration") {
    return (
      <IllustrationPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "smm") {
    return (
      <SmmPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "graphics") {
    return (
      <GraphicsPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "identity") {
    return (
      <IdentityPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "naming") {
    return (
      <NamingPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "positioning") {
    return (
      <PositioningPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "communication") {
    return (
      <CommunicationPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "brand-character") {
    return (
      <BrandCharacterPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  if (slug === "web-development") {
    return (
      <WebDevelopmentPage
        locale={locale}
        dictionary={dictionary}
        projects={getWebDevelopmentProjects(locale)}
      />
    );
  }

  if (slug === "influence-marketing") {
    return (
      <InfluenceMarketingPage
        locale={locale}
        dictionary={dictionary}
        projects={projects}
      />
    );
  }

  return (
    <ServiceTitlePage
      locale={locale}
      dictionary={dictionary}
      slug={slug}
    />
  );
}
