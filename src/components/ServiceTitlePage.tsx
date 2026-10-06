import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import ServiceCompareSection from "@/components/ServiceCompareSection";
import ServicePageSchema from "@/components/ServicePageSchema";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import type { ServiceSlug } from "@/i18n/services";
import { serviceTitles } from "@/i18n/services";
import { getServiceIndexPath } from "@/i18n/routing";
import { getServiceMenuTitle } from "@/i18n/services-index";

type ServiceTitlePageProps = {
  locale: Locale;
  dictionary: Dictionary;
  slug: ServiceSlug;
};

export default function ServiceTitlePage({
  locale,
  dictionary,
  slug,
}: ServiceTitlePageProps) {
  const servicesPath = getServiceIndexPath(locale);
  const menuTitle = getServiceMenuTitle(locale, slug);
  const title = serviceTitles[locale][slug];

  return (
    <>
      <ServicePageSchema locale={locale} dictionary={dictionary} slug={slug} />
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp">
        <section className="sp-hero sp-hero-simple">
          <div className="wrap">
            <PageBreadcrumbs
              items={[
                { label: dictionary.nav.services, href: servicesPath },
                { label: menuTitle },
              ]}
            />
            <h1 className="sp-h1">
              {title}
              <span className="sp-h1-accent">.</span>
            </h1>
          </div>
        </section>

        <ServiceCompareSection locale={locale} />

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
