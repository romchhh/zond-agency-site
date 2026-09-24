import ServiceLandingPage from "@/components/ServiceLandingPage";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import { brandCharacterPage } from "@/i18n/brand-character";
import { getBrandCharacterSeo } from "@/i18n/brand-character-seo";

type BrandCharacterPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function BrandCharacterPage({
  locale,
  dictionary,
  projects,
}: BrandCharacterPageProps) {
  return (
    <ServiceLandingPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      copy={brandCharacterPage[locale]}
      seo={getBrandCharacterSeo(locale)}
      heroImage="/services/brand-character/mascot-01.png"
    />
  );
}
