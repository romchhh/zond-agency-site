import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TeamAndCta from "@/components/TeamAndCta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero-stage">
          <Hero />
          <HeroVideo />
        </div>
        <History />
        <Projects />
        <Services />
        <TeamAndCta />
      </main>
      <Footer />
    </>
  );
}
