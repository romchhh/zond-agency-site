import ServiceLandingPage from "@/components/ServiceLandingPage";
import { brandbookPage } from "@/i18n/brandbook";
import { getBrandbookSeo } from "@/i18n/brandbook-seo";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";

type BrandbookPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function BrandbookPage({
  locale,
  dictionary,
  projects,
}: BrandbookPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={brandbookPage[locale]}
      seo={getBrandbookSeo(locale)}
      heroImage="/branding/brand-guidelines.png"
    />
  );
}
