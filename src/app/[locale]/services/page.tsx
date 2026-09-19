import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ServicesAbout from "@/components/ServicesAbout";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { servicesIndexMeta } from "@/i18n/services";
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

  return createPathMetadata(locale, "/services", servicesIndexMeta[locale]);
}

export default async function ServicesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp">
        <Services locale={locale} dictionary={dictionary} />
        <ServicesAbout locale={locale} />
        <section className="sp-cta">
          <div className="wrap">
            <CtaPanel dictionary={dictionary} />
          </div>
        </section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
