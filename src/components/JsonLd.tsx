import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import {
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld";

type JsonLdProps = {
  locale: Locale;
  dictionary?: Dictionary;
};

export default function JsonLd({ locale }: JsonLdProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd(locale)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd(locale)),
        }}
      />
    </>
  );
}
