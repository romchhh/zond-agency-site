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

const CASE_META: Record<string, CaseMetaEntry> = {
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
    clientUrl: "https://novodevelopment.id/",
    categories: ["branding"],
  },
  goshchanochka: {
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

export function getCaseClientUrl(slug: string): string | undefined {
  return CASE_META[slug]?.clientUrl;
}

export function getCaseServiceTag(slug: string, locale: Locale): string | undefined {
  return CASE_SERVICE_TAGS[slug]?.[locale];
}

export function getCaseMetaCategories(slug: string) {
  return CASE_META[slug]?.categories;
}

export function getCaseTestimonial(
  slug: string,
  locale: Locale,
): CaseTestimonial | undefined {
  return CASE_TESTIMONIALS[slug]?.[locale];
}
