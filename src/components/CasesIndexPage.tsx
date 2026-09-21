import CaseCard from "@/components/CaseCard";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { CaseItem } from "@/i18n/cases";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

type CasesIndexPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  cases: CaseItem[];
};

export default function CasesIndexPage({
  locale,
  dictionary,
  cases,
}: CasesIndexPageProps) {
  const copy = dictionary.cases;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp cases-index-page">
        <section className="cases-hero">
          <div className="wrap">
            <h1 className="sp-h1">
              {copy.title}
              <span className="sp-h1-accent">.</span>
            </h1>
            <p className="sp-lead cases-lead">{copy.lead}</p>
          </div>
        </section>

        <section className="cases-grid-section">
          <div className="wrap wrap--flush">
            <div className="projects-grid" id="cases">
              {cases.map((caseItem) => (
                <CaseCard key={caseItem.slug} locale={locale} caseItem={caseItem} />
              ))}
            </div>
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
