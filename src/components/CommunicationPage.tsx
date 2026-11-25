import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { communicationPage } from "@/i18n/communication";
import { getCommunicationSeo } from "@/i18n/communication-seo";

type CommunicationPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function CommunicationPage({
  locale,
  dictionary,
  projects,
}: CommunicationPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("communication", communicationPage, locale)}
      serviceSlug="communication"
      seo={getServiceSeoContent("communication", getCommunicationSeo, locale)}
      heroImage="/assets/photography/application-campaign.webp"
    />
  );
}
