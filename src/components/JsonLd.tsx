import type { Dictionary } from "@/i18n/dictionary";
import { localeMeta, type Locale } from "@/i18n/config";
import { getLocalizedUrl } from "@/i18n/routing";
import { getSiteUrl, siteConfig } from "@/lib/site";

type JsonLdProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function JsonLd({ locale, dictionary }: JsonLdProps) {
  const siteUrl = getSiteUrl();
  const pageUrl = getLocalizedUrl(siteUrl, locale);
  const { htmlLang } = localeMeta[locale];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.instagram],
    description: dictionary.meta.description,
    logo: `${siteUrl}/assets/651683d433d9510e36720e72_logo-black.svg`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dictionary.meta.title,
    url: pageUrl,
    inLanguage: htmlLang,
    description: dictionary.meta.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: pageUrl,
    image: `${siteUrl}/assets/hero-art.jpg`,
    description: dictionary.meta.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: dictionary.meta.title,
    url: pageUrl,
    inLanguage: htmlLang,
    description: dictionary.meta.description,
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
