import ContactPage from "@/components/ContactPage";
import PageJsonLd from "@/components/PageJsonLd";
import { contactPageMeta } from "@/i18n/contact/meta";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalePath } from "@/i18n/routing";
import { createPathMetadata } from "@/lib/metadata";
import { resolvePageCopy } from "@/lib/json-ld";
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

  return createPathMetadata(locale, "/contact", contactPageMeta[locale]);
}

export default async function ContactRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const contactPath = getLocalePath(locale, "/contact");
  const seo = resolvePageCopy(contactPath, contactPageMeta[locale]);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={contactPath}
        name={seo.title}
        description={seo.description}
        breadcrumbs={[{ name: dictionary.nav.contact, path: contactPath }]}
      />
      <ContactPage locale={locale} dictionary={dictionary} />
    </>
  );
}
