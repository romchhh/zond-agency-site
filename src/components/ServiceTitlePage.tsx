import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type ServiceTitlePageProps = {
  locale: Locale;
  dictionary: Dictionary;
  eyebrow: string;
  title: string;
};

export default function ServiceTitlePage({
  locale,
  dictionary,
  eyebrow,
  title,
}: ServiceTitlePageProps) {
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp">
        <section className="sp-hero sp-hero-simple">
          <div className="wrap">
            <p className="sp-eyebrow">{eyebrow}</p>
            <h1 className="sp-h1">
              {title}
              <span className="sp-h1-accent">.</span>
            </h1>
          </div>
        </section>

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
