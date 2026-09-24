import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { positioningPage } from "@/i18n/positioning";
import { getPositioningSeo } from "@/i18n/positioning-seo";

type PositioningPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function PositioningPage({
  locale,
  dictionary,
  projects,
}: PositioningPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={positioningPage[locale]}
      seo={getPositioningSeo(locale)}
      heroImage="/services/positioning/positioning-01.png"
    />
  );
}
