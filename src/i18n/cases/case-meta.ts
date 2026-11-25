import { readCmsDocSync } from "@/cms/store";
import type { Locale } from "@/i18n/config";
import { CASE_SERVICE_TAGS, CASE_TESTIMONIALS } from "./case-meta.locale";

export type CaseTestimonial = {
  heading?: string;
  paragraphs: string[];
  author: string;
  role: string;
};

type CaseMetaEntry = {
  clientUrl?: string;
  categories: Array<"branding" | "packaging" | "smm" | "strategy" | "web" | "graphic">;
};

export const caseMetaEntries: Record<string, CaseMetaEntry> = {
  aximod: {
    clientUrl: "https://zond.agency/aximod",
    categories: ["branding", "graphic"],
  },
  "home-hub": {
    clientUrl: "https://home-hub.se/sv",
    categories: ["branding", "smm", "web", "graphic"],
  },
  carbit: {
    clientUrl: "https://carbit.info/",
    categories: ["branding", "web"],
  },
  "digital-residence": {
    clientUrl: "https://digitalresidence.az/",
    categories: ["strategy", "branding", "graphic"],
  },
  altep: {
    clientUrl: "https://altep.ua/",
    categories: ["branding", "graphic", "web"],
  },
  kavlora: {
    clientUrl: "https://www.kavlora.com/",
    categories: ["strategy", "branding", "graphic", "web"],
  },
  "kyiv-tourism-department": {
    clientUrl: "https://kyivcity.gov.ua/",
    categories: ["graphic"],
  },
  "ahmad-tea": {
    clientUrl: "https://ahmadtea.ua/",
    categories: ["strategy"],
  },
  medeus: {
    clientUrl: "https://medeus.com.ua/",
    categories: ["smm", "graphic"],
  },
  "akula-mama": {
    clientUrl: "https://akulamama.com.ua/",
    categories: ["packaging", "branding"],
  },
  "pridniprovsky-zavod": {
    clientUrl: "https://zgp.ua/",
    categories: ["branding", "web"],
  },
  "bit-school": {
    clientUrl: "https://bitschool.com.ua/",
    categories: ["branding"],
  },
  "novo-development": {
    clientUrl: "https://novoubud.com/",
    categories: ["branding", "web"],
  },
  flups: {
    categories: ["branding", "packaging"],
  },
  goshchanochka: {
    clientUrl: "https://goschanochka.pp.ua/",
    categories: ["branding", "packaging"],
  },
  yakomoga: {
    clientUrl: "https://www.instagram.com/yakomoga.sushi/",
    categories: ["strategy", "branding", "smm"],
  },
  "techno-group": {
    clientUrl: "https://www.techno-group.com.ua/",
    categories: ["branding", "graphic"],
  },
};

function resolvedCaseMeta() {
  return (
    readCmsDocSync<Record<string, CaseMetaEntry>>("cases/case-meta") ?? caseMetaEntries
  );
}

export function getCaseClientUrl(slug: string): string | undefined {
  return resolvedCaseMeta()[slug]?.clientUrl;
}

export function getCaseServiceTag(slug: string, locale: Locale): string | undefined {
  return CASE_SERVICE_TAGS[slug]?.[locale];
}

export function getCaseMetaCategories(slug: string) {
  return resolvedCaseMeta()[slug]?.categories;
}

export function getCaseTestimonial(
  slug: string,
  locale: Locale,
): CaseTestimonial | undefined {
  return CASE_TESTIMONIALS[slug]?.[locale];
}
