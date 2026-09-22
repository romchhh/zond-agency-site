import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { packagingPage } from "@/i18n/packaging";
import { getPackagingSeo } from "@/i18n/packaging-seo";

type PackagingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function PackagingPage({
  locale,
  dictionary,
  projects,
}: PackagingPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={packagingPage[locale]}
      seo={getPackagingSeo(locale)}
      heroImage="/branding/product-skincare.png"
    />
  );
}
