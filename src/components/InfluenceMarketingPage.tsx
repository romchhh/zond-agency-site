import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { influenceMarketingPage } from "@/i18n/influence-marketing";
import { influenceMarketingSeo } from "@/i18n/influence-marketing-seo";

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
      copy={getServicePageContent("influence-marketing", influenceMarketingPage, locale)}
      serviceSlug="influence-marketing"
      seo={getServiceSeoContent("influence-marketing", influenceMarketingSeo, locale)}
      heroImage="/services/web.jpg"
    />
  );
}
