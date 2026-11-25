import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { illustrationPage } from "@/i18n/illustration";
import { illustrationSeo } from "@/i18n/illustration-seo";

type IllustrationPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function IllustrationPage({
  locale,
  dictionary,
  projects,
}: IllustrationPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("illustration", illustrationPage, locale)}
      serviceSlug="illustration"
      seo={getServiceSeoContent("illustration", illustrationSeo, locale)}
      heroImage="/branding/include-identity.jpg"
    />
  );
}
