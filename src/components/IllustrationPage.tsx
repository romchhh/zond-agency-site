import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { illustrationPage } from "@/i18n/illustration";
import { getIllustrationSeo } from "@/i18n/illustration-seo";

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
      copy={illustrationPage[locale]}
      seo={getIllustrationSeo(locale)}
      heroImage="/branding/include-identity.jpg"
      casesCount={3}
    />
  );
}
