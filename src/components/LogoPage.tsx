import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { getServicePageContent, getServiceSeoContent } from "@/cms/service-access";
import { logoPage } from "@/i18n/logo";
import { logoSeo } from "@/i18n/logo-seo";

type LogoPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function LogoPage({ locale, dictionary, projects }: LogoPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={getServicePageContent("logo", logoPage, locale)}
      serviceSlug="logo"
      seo={getServiceSeoContent("logo", logoSeo, locale)}
      heroImage="/assets/photography/logo-0.webp"
    />
  );
}
