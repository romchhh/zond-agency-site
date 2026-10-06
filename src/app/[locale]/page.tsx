import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import HomeSeoBlock from "@/components/HomeSeoBlock";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TeamAndCta from "@/components/TeamAndCta";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/i18n/projects";
import { createPageMetadata, homeSeoPath } from "@/lib/metadata";
import PageJsonLd from "@/components/PageJsonLd";
import { applySeoOverride } from "@/i18n/seo-overrides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = await getDictionary(locale);
  return createPageMetadata(locale, dictionary);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const projects = getProjects(locale);
  const seo = applySeoOverride(homeSeoPath(locale), dictionary.meta);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname="/"
        name={seo.title}
        description={seo.description}
      />
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <div className="hero-stage">
          <Hero locale={locale} dictionary={dictionary} />
          <History dictionary={dictionary} />
        </div>
        <Projects locale={locale} dictionary={dictionary} projects={projects} />
        <Services locale={locale} dictionary={dictionary} />
        <TeamAndCta dictionary={dictionary} />
        <HomeSeoBlock dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
