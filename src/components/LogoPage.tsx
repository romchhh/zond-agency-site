import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { logoPage } from "@/i18n/logo";
import { getLogoSeo } from "@/i18n/logo-seo";

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
      copy={logoPage[locale]}
      seo={getLogoSeo(locale)}
      heroImage="/branding/include-naming.png"
    />
  );
}
