import ServiceLandingPage from "@/components/ServiceLandingPage";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { brandbookPage } from "@/i18n/brandbook";
import { brandbookSeo } from "@/i18n/brandbook-seo";
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
      copy={getServicePageContent("brandbook", brandbookPage, locale)}
      serviceSlug="brandbook"
      seo={getServiceSeoContent("brandbook", brandbookSeo, locale)}
      heroImage="/assets/photography/brandbook-0.webp"
    />
  );
}
