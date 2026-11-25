import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { smmPage } from "@/i18n/smm";
import { smmSeo } from "@/i18n/smm-seo";

type SmmPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function SmmPage({ locale, dictionary, projects }: SmmPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("smm", smmPage, locale)}
      serviceSlug="smm"
      seo={getServiceSeoContent("smm", smmSeo, locale)}
      heroImage="/assets/photography/smm-0.webp"
    />
  );
}
