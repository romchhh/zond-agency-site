import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { graphicsPage } from "@/i18n/graphics";
import { getGraphicsSeo } from "@/i18n/graphics-seo";

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
      copy={graphicsPage[locale]}
      seo={getGraphicsSeo(locale)}
      heroImage="/services/graphic.jpg"
    />
  );
}
