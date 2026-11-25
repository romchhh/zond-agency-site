import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { identityPage } from "@/i18n/identity";
import { identitySeo } from "@/i18n/identity-seo";

type IdentityPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function IdentityPage({
  locale,
  dictionary,
  projects,
}: IdentityPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("identity", identityPage, locale)}
      serviceSlug="identity"
      seo={getServiceSeoContent("identity", identitySeo, locale)}
      heroImage="/assets/photography/identity-3.webp"
    />
  );
}
