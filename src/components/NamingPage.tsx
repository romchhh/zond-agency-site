import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
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
      copy={namingPage[locale]}
      seo={getNamingSeo(locale)}
      heroImage="/services/naming/naming-01.png"
    />
  );
}
