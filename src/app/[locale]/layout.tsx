import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsultationProvider from "@/components/ConsultationProvider";
import DocumentShell from "@/components/DocumentShell";
import JsonLd from "@/components/JsonLd";
import { MediaVersionProvider } from "@/components/MediaVersionProvider";
import { readMediaVersion } from "@/cms/store";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { media } from "@/lib/media";
import { getCanonicalSiteUrl, siteConfig } from "@/lib/site";

// CMS edits (texts, photos) must show on the next request, not after a 1h static cache.
export const dynamic = "force-dynamic";

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
      icon: [{ url: media.favicon, type: "image/svg+xml" }],
      shortcut: media.favicon,
      apple: media.favicon,
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
    <MediaVersionProvider version={readMediaVersion()}>
      <DocumentShell locale={locale}>
        <ConsultationProvider locale={locale} dictionary={dictionary}>
          {children}
          <JsonLd locale={locale} />
        </ConsultationProvider>
      </DocumentShell>
    </MediaVersionProvider>
  );
}
