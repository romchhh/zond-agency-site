import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsultationProvider from "@/components/ConsultationProvider";
import DocumentShell from "@/components/DocumentShell";
import JsonLd from "@/components/JsonLd";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { media } from "@/lib/media";
import { getCanonicalSiteUrl, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const siteUrl = getCanonicalSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Branding",
    icons: {
      icon: media.logo,
      shortcut: media.logo,
      apple: media.logo,
    },
    other: {
      "llms-txt": `${siteUrl}/llms.txt`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <DocumentShell locale={locale}>
      <ConsultationProvider locale={locale} dictionary={dictionary}>
        {children}
        <JsonLd locale={locale} />
      </ConsultationProvider>
    </DocumentShell>
  );
}
