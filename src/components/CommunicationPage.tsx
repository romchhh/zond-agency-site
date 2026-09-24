import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
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
      copy={communicationPage[locale]}
      seo={getCommunicationSeo(locale)}
      heroImage="/services/communication/communication-01.png"
    />
  );
}
