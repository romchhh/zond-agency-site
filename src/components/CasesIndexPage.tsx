import CasesFilterGrid from "@/components/CasesFilterGrid";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageJsonLd from "@/components/PageJsonLd";
import type { CaseItem } from "@/i18n/cases";
import { casesIndexMeta } from "@/i18n/cases/meta";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getCaseIndexPath } from "@/i18n/routing";
import { resolvePageCopy } from "@/lib/json-ld";

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
  const casesPath = getCaseIndexPath(locale);
  const seo = resolvePageCopy(casesPath, casesIndexMeta[locale]);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={casesPath}
        name={seo.title}
        description={seo.description}
        breadcrumbs={[{ name: copy.title, path: casesPath }]}
      />
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp cases-index-page">
        <section className="cases-hero">
          <div className="wrap">
            <PageBreadcrumbs items={[{ label: copy.title }]} />
            <h1 className="sp-h1">
              {copy.title}
              <span className="sp-h1-accent">.</span>
            </h1>
            <p className="sp-lead cases-lead">{copy.lead}</p>
          </div>
        </section>

        <section className="cases-grid-section">
          <div className="wrap wrap--flush">
            <CasesFilterGrid locale={locale} dictionary={dictionary} cases={cases} />
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
