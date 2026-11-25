import { writeCmsDoc } from "@/cms/store";
import { PUBLISHED_CASE_SLUGS_FOR_CMS } from "@/cms/case-slugs";
import { locales, type Locale } from "@/i18n/config";

import dictionaryUk from "@/i18n/dictionaries/uk";
import dictionaryEn from "@/i18n/dictionaries/en";
import dictionaryRu from "@/i18n/dictionaries/ru";

import casesUk from "@/i18n/cases/cases.uk";
import casesRu from "@/i18n/cases/cases.ru";
import casesEn from "@/i18n/cases/cases.en";
import { mergeCaseCatalog } from "@/i18n/cases/merge-catalog";
import { casesIndexMeta } from "@/i18n/cases/meta";
import { caseCardDescriptions } from "@/i18n/cases/card-descriptions";
import { caseHeroCaptions } from "@/i18n/cases/case-hero-captions";
import { caseMetaEntries } from "@/i18n/cases/case-meta";

import postsUk from "@/i18n/blog/posts.uk";
import postsEn from "@/i18n/blog/posts.en";
import postsRu from "@/i18n/blog/posts.ru";
import { blogIndexMeta } from "@/i18n/blog/meta";

import { policyContent } from "@/i18n/policy";
import { contactPageMeta } from "@/i18n/contact/meta";
import { seoOverrides } from "@/i18n/seo-overrides";
import { thanksCopy } from "@/i18n/thanks";
import { serviceTitles, serviceMeta } from "@/i18n/services";
import { servicesIndex } from "@/i18n/services-index";
import { servicesAbout } from "@/i18n/services-about";
import { homeSeoContent } from "@/i18n/home-seo";
import { clients } from "@/i18n/clients";

import { brandingPage } from "@/i18n/branding";
import { brandingSeo } from "@/i18n/branding-seo";
import { logoPage } from "@/i18n/logo";
import { logoSeo } from "@/i18n/logo-seo";
import { brandbookPage } from "@/i18n/brandbook";
import { brandbookSeo } from "@/i18n/brandbook-seo";
import { identityPage } from "@/i18n/identity";
import { identitySeo } from "@/i18n/identity-seo";
import { namingPage } from "@/i18n/naming";
import { getNamingSeo } from "@/i18n/naming-seo";
import { positioningPage } from "@/i18n/positioning";
import { getPositioningSeo } from "@/i18n/positioning-seo";
import { communicationPage } from "@/i18n/communication";
import { getCommunicationSeo } from "@/i18n/communication-seo";
import { brandCharacterPage } from "@/i18n/brand-character";
import { getBrandCharacterSeo } from "@/i18n/brand-character-seo";
import { packagingPage } from "@/i18n/packaging";
import { packagingSeo } from "@/i18n/packaging-seo";
import { graphicsPage } from "@/i18n/graphics";
import { graphicsSeo } from "@/i18n/graphics-seo";
import { smmPage } from "@/i18n/smm";
import { smmSeo } from "@/i18n/smm-seo";
import { illustrationPage } from "@/i18n/illustration";
import { illustrationSeo } from "@/i18n/illustration-seo";
import { influenceMarketingPage } from "@/i18n/influence-marketing";
import { influenceMarketingSeo } from "@/i18n/influence-marketing-seo";
import { rebrandingPage } from "@/i18n/rebranding";
import { rebrandingSeo } from "@/i18n/rebranding-seo";
import { webDevelopmentPage } from "@/i18n/web-development";
import { getWebDevelopmentSeo } from "@/i18n/web-development-seo";
import type { BrandingSeoContent } from "@/i18n/branding-seo";

import { textServices } from "@/i18n/text-services";
import type { CaseItem } from "@/i18n/cases/types";

const dictionaries: Record<Locale, unknown> = {
  uk: dictionaryUk,
  en: dictionaryEn,
  ru: dictionaryRu,
};

const caseCatalogs: Record<Locale, CaseItem[]> = {
  uk: casesUk,
  ru: casesRu,
  en: mergeCaseCatalog("en", casesUk, casesEn),
};

const blogPosts = {
  uk: postsUk,
  en: postsEn,
  ru: postsRu,
} as const;

function localeSeoMap(
  getter: (locale: Locale) => BrandingSeoContent,
): Record<Locale, BrandingSeoContent> {
  return {
    uk: getter("uk"),
    en: getter("en"),
    ru: getter("ru"),
  };
}

const heavyServices: Array<[string, unknown, Record<Locale, BrandingSeoContent>]> = [
  ["branding", brandingPage, brandingSeo],
  ["logo", logoPage, logoSeo],
  ["brandbook", brandbookPage, brandbookSeo],
  ["identity", identityPage, identitySeo],
  ["naming", namingPage, localeSeoMap(getNamingSeo)],
  ["positioning", positioningPage, localeSeoMap(getPositioningSeo)],
  ["communication", communicationPage, localeSeoMap(getCommunicationSeo)],
  ["brand-character", brandCharacterPage, localeSeoMap(getBrandCharacterSeo)],
  ["packaging", packagingPage, packagingSeo],
  ["graphics", graphicsPage, graphicsSeo],
  ["smm", smmPage, smmSeo],
  ["illustration", illustrationPage, illustrationSeo],
  ["influence-marketing", influenceMarketingPage, influenceMarketingSeo],
  ["rebranding", rebrandingPage, rebrandingSeo],
  ["web-development", webDevelopmentPage, localeSeoMap(getWebDevelopmentSeo)],
];

export type CmsSeedResult = {
  written: string[];
  count: number;
};

function pickCaseLocaleFields(item: CaseItem) {
  return {
    title: item.title,
    description: item.description,
    tagline: item.tagline,
    serviceTag: item.serviceTag,
    body: item.body,
    blocks: item.blocks,
    cardDescription: item.cardDescription,
  };
}

function buildCaseBodyDoc(slug: string) {
  const sharedSource =
    caseCatalogs.uk.find((item) => item.slug === slug) ??
    caseCatalogs.en.find((item) => item.slug === slug);
  if (!sharedSource) return null;

  const byLocale = {} as Record<Locale, ReturnType<typeof pickCaseLocaleFields>>;
  for (const locale of locales) {
    const item = caseCatalogs[locale].find((entry) => entry.slug === slug);
    if (item) byLocale[locale] = pickCaseLocaleFields(item);
  }

  return {
    shared: {
      slug: sharedSource.slug,
      cover: sharedSource.cover,
      listCover: sharedSource.listCover,
      media: sharedSource.media,
      theme: sharedSource.theme,
    },
    ...byLocale,
  };
}

export async function seedCmsFromCode(): Promise<CmsSeedResult> {
  const written: string[] = [];

  async function put(id: string, data: unknown) {
    await writeCmsDoc(id, data);
    written.push(id);
  }

  for (const locale of locales) {
    await put(`dictionary/${locale}`, dictionaries[locale]);
    await put(`blog/posts/${locale}`, blogPosts[locale]);
    await put(`cases/catalog/${locale}`, caseCatalogs[locale]);
  }

  await put("policy", policyContent);
  await put("contact/meta", contactPageMeta);
  await put("seo-overrides", seoOverrides);
  await put("thanks", thanksCopy);
  await put("services/titles", serviceTitles);
  await put("services/meta", serviceMeta);
  await put("services/index", servicesIndex);
  await put("services/about", servicesAbout);
  await put("home-seo", homeSeoContent);
  await put("clients", clients);
  await put("cases/meta", casesIndexMeta);
  await put("blog/meta", blogIndexMeta);
  await put("cases/case-meta", caseMetaEntries);
  await put("cases/hero-captions", caseHeroCaptions);
  await put("cases/card-descriptions", caseCardDescriptions);

  for (const [slug, page, seo] of heavyServices) {
    await put(`services/${slug}/page`, page);
    await put(`services/${slug}/seo`, seo);
  }

  for (const [slug, content] of Object.entries(textServices)) {
    await put(`text-services/${slug}`, content);
  }

  for (const slug of PUBLISHED_CASE_SLUGS_FOR_CMS) {
    const body = buildCaseBodyDoc(slug);
    if (body) await put(`cases/body/${slug}`, body);
  }

  await put("cases/published", [...PUBLISHED_CASE_SLUGS_FOR_CMS]);
  await put("pages/index", []);

  return { written, count: written.length };
}
