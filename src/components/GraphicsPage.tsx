import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { graphicsPage } from "@/i18n/graphics";
import { graphicsSeo } from "@/i18n/graphics-seo";

type GraphicsPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function GraphicsPage({
  locale,
  dictionary,
  projects,
}: GraphicsPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("graphics", graphicsPage, locale)}
      serviceSlug="graphics"
      seo={getServiceSeoContent("graphics", graphicsSeo, locale)}
      heroImage="/assets/photography/graphics-0.webp"
    />
  );
}
