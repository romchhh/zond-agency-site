import PageJsonLd from "@/components/PageJsonLd";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { serviceMeta, type ServiceSlug } from "@/i18n/services";
import { getServiceMenuTitle } from "@/i18n/services-index";
import { getServiceDetailPath, getServiceIndexPath } from "@/i18n/routing";
import { resolvePageCopy } from "@/lib/json-ld";

type ServicePageSchemaProps = {
  locale: Locale;
  dictionary: Dictionary;
  slug: ServiceSlug;
};

export default function ServicePageSchema({
  locale,
  dictionary,
  slug,
}: ServicePageSchemaProps) {
  const pathname = getServiceDetailPath(locale, slug);
  const servicesPath = getServiceIndexPath(locale);
  const menuTitle = getServiceMenuTitle(locale, slug);
  const meta = resolvePageCopy(pathname, serviceMeta[locale][slug]);

  return (
    <PageJsonLd
      locale={locale}
      pathname={pathname}
      name={meta.title}
      description={meta.description}
      breadcrumbs={[
        { name: dictionary.nav.services, path: servicesPath },
        { name: menuTitle, path: pathname },
      ]}
    />
  );
}
