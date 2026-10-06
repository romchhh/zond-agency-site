import type { Locale } from "@/i18n/config";
import {
  articleJsonLd,
  breadcrumbListJsonLd,
  type JsonLdArticle,
  type JsonLdBreadcrumb,
  webPageJsonLd,
} from "@/lib/json-ld";

type PageJsonLdProps = {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
  breadcrumbs?: JsonLdBreadcrumb[];
  article?: JsonLdArticle;
};

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PageJsonLd({
  locale,
  pathname,
  name,
  description,
  breadcrumbs,
  article,
}: PageJsonLdProps) {
  return (
    <>
      <JsonLdScript data={webPageJsonLd(locale, pathname, name, description)} />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <JsonLdScript data={breadcrumbListJsonLd(locale, breadcrumbs)} />
      ) : null}
      {article ? <JsonLdScript data={articleJsonLd(locale, article)} /> : null}
    </>
  );
}
