import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { identityPage } from "@/i18n/identity";
import { getIdentitySeo } from "@/i18n/identity-seo";

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
      copy={identityPage[locale]}
      seo={getIdentitySeo(locale)}
      heroImage="/services/identity/identity-01.png"
    />
  );
}
