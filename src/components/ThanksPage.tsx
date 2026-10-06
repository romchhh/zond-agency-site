import ConsultationProvider from "@/components/ConsultationProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { thanksCopy } from "@/i18n/thanks";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export function createThanksMetadata(locale: Locale): Metadata {
  const copy = thanksCopy[locale];
  return {
    title: copy.metaTitle,
    description: copy.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function ThanksPage({ locale }: { locale: Locale }) {
  const dictionary = await getDictionary(locale);
  const copy = thanksCopy[locale];

  return (
    <ConsultationProvider locale={locale} dictionary={dictionary}>
      <Header locale={locale} dictionary={dictionary} hideLanguageSwitcher />
      <main className="thanks-page">
        <div className="wrap thanks-wrap">
          <div className="thanks-card">
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
            <div className="thanks-actions">
              <a
                className="not-found-btn not-found-btn--primary"
                href={siteConfig.telegramBot}
                target="_blank"
                rel="noreferrer"
              >
                <span>{copy.button}</span>
                <span className="not-found-btn-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
              <Link className="not-found-btn not-found-btn--ghost" href={getLocalePath(locale)}>
                {copy.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </ConsultationProvider>
  );
}
