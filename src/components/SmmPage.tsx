import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { smmPage } from "@/i18n/smm";
import { getSmmSeo } from "@/i18n/smm-seo";

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
      copy={smmPage[locale]}
      seo={getSmmSeo(locale)}
      heroImage="/services/smm.jpg"
    />
  );
}
