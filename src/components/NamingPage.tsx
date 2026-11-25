import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { namingPage } from "@/i18n/naming";
import { getNamingSeo } from "@/i18n/naming-seo";

type NamingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function NamingPage({
  locale,
  dictionary,
  projects,
}: NamingPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("naming", namingPage, locale)}
      serviceSlug="naming"
      seo={getServiceSeoContent("naming", getNamingSeo, locale)}
      heroImage="/assets/photography/naming-0.webp"
    />
  );
}
