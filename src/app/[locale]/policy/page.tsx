import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { policyContent } from "@/i18n/policy";
import { getPolicyPath } from "@/i18n/routing";
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

  const content = policyContent[locale];

  return createPathMetadata(locale, getPolicyPath(locale), {
    title: `${content.title} — ZOND`,
    description: content.description,
  });
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const content = policyContent[locale];

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="policy-page">
        <div className="wrap">
          <h1>{content.title}</h1>
          <div className="policy-page-body">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
