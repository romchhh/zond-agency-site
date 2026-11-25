import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { packagingPage } from "@/i18n/packaging";
import { packagingSeo } from "@/i18n/packaging-seo";

type PackagingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function PackagingPage({
  locale,
  dictionary,
  projects,
}: PackagingPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("packaging", packagingPage, locale)}
      serviceSlug="packaging"
      seo={getServiceSeoContent("packaging", packagingSeo, locale)}
      heroImage="/assets/photography/packaging-1.webp"
    />
  );
}
