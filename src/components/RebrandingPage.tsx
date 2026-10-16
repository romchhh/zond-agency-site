import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { rebrandingPage } from "@/i18n/rebranding";
import { getRebrandingSeo } from "@/i18n/rebranding-seo";

type RebrandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function RebrandingPage({
  locale,
  dictionary,
  projects,
}: RebrandingPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={rebrandingPage[locale]}
      serviceSlug="rebranding"
      seo={getRebrandingSeo(locale)}
      heroImage="/assets/photography/branding-1.webp"
    />
  );
}
