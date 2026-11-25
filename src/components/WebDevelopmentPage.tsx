import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { webDevelopmentPage } from "@/i18n/web-development";
import { getWebDevelopmentSeo } from "@/i18n/web-development-seo";

type WebDevelopmentPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function WebDevelopmentPage({
  locale,
  dictionary,
  projects,
}: WebDevelopmentPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("web-development", webDevelopmentPage, locale)}
      serviceSlug="web-development"
      seo={getServiceSeoContent("web-development", getWebDevelopmentSeo, locale)}
      heroImage="/assets/photography/web-development-0.webp"
    />
  );
}
