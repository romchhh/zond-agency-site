import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { influenceMarketingPage } from "@/i18n/influence-marketing";
import { getInfluenceMarketingSeo } from "@/i18n/influence-marketing-seo";

type InfluenceMarketingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function InfluenceMarketingPage({
  locale,
  dictionary,
  projects,
}: InfluenceMarketingPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={influenceMarketingPage[locale]}
      seo={getInfluenceMarketingSeo(locale)}
      heroImage="/services/web.jpg"
    />
  );
}
