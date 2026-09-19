import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TeamAndCta from "@/components/TeamAndCta";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getProjects } from "@/i18n/projects";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const projects = getProjects(locale);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <div className="hero-stage">
          <Hero locale={locale} dictionary={dictionary} />
          <History dictionary={dictionary} />
        </div>
        <Projects dictionary={dictionary} projects={projects} />
        <Services dictionary={dictionary} />
        <TeamAndCta dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
