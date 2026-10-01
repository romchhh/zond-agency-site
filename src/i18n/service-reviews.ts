import type { Locale } from "@/i18n/config";
import { CASE_TESTIMONIALS } from "@/i18n/cases/case-meta.locale";
import type { CaseTestimonial } from "@/i18n/cases/case-meta";
import { isCaseSlug } from "@/i18n/cases";
import { getCaseDetailPath } from "@/i18n/routing";

export type ServiceReview = {
  label: string;
  quote: string;
  name: string;
  role: string;
  /** Internal case page path when the project is published. */
  href?: string;
};

const COMPANY_NAMES: Record<string, Record<Locale, string>> = {
  "digital-residence": {
    uk: "Digital Residence",
    ru: "Digital Residence",
    en: "Digital Residence",
  },
  altep: { uk: "ALTEP", ru: "ALTEP", en: "ALTEP" },
  kavlora: { uk: "KAVLORA", ru: "KAVLORA", en: "KAVLORA" },
  "kyiv-tourism-department": {
    uk: "КМДА",
    ru: "КГА",
    en: "Kyiv City Administration",
  },
  "ahmad-tea": { uk: "AHMAD TEA", ru: "AHMAD TEA", en: "AHMAD TEA" },
  medeus: {
    uk: "Medeus",
    ru: "Medeus",
    en: "Medeus",
  },
  "akula-mama": {
    uk: "Акула Мама",
    ru: "Акула Мама",
    en: "Akula Mama",
  },
  "pridniprovsky-zavod": {
    uk: "Придніпровський завод",
    ru: "Приднепровский завод",
    en: "Prydniprovsk Plant",
  },
  "bit-school": { uk: "BIT School", ru: "BIT School", en: "BIT School" },
  "novo-development": {
    uk: "NOVO development",
    ru: "NOVO development",
    en: "NOVO development",
  },
  goshchanochka: {
    uk: "Гощаночка",
    ru: "Гощаночка",
    en: "Hoshchanochka",
  },
  yakomoga: { uk: "Якомога", ru: "Якомога", en: "Yakomoga" },
};

/** Default curated set shown on most service pages. */
const DEFAULT_REVIEW_SLUGS = [
  "kavlora",
  "bit-school",
  "ahmad-tea",
  "goshchanochka",
  "digital-residence",
  "yakomoga",
] as const;

/** Prefer reviews that match the service focus. */
const REVIEW_SLUGS_BY_SERVICE: Record<string, readonly string[]> = {
  branding: [
    "kavlora",
    "digital-residence",
    "bit-school",
    "novo-development",
  ],
  logo: ["bit-school", "novo-development", "pridniprovsky-zavod", "kavlora"],
  identity: [
    "digital-residence",
    "bit-school",
    "novo-development",
    "kavlora",
  ],
  brandbook: [
    "digital-residence",
    "altep",
    "pridniprovsky-zavod",
    "novo-development",
  ],
  packaging: ["goshchanochka", "akula-mama", "kavlora", "bit-school"],
  naming: ["kavlora", "yakomoga", "bit-school", "digital-residence"],
  positioning: ["ahmad-tea", "yakomoga", "digital-residence", "kavlora"],
  communication: ["ahmad-tea", "yakomoga", "medeus", "digital-residence"],
  "brand-character": ["bit-school", "yakomoga", "digital-residence", "kavlora"],
  smm: ["medeus", "yakomoga", "ahmad-tea", "bit-school"],
  graphics: [
    "kyiv-tourism-department",
    "digital-residence",
    "medeus",
    "altep",
  ],
  illustration: ["bit-school", "yakomoga", "akula-mama", "digital-residence"],
  "web-development": ["kavlora", "pridniprovsky-zavod", "altep", "digital-residence"],
  "influence-marketing": ["ahmad-tea", "medeus", "yakomoga", "goshchanochka"],
  rebranding: ["altep", "kavlora", "digital-residence", "bit-school"],
  "marketing-360": ["ahmad-tea", "medeus", "yakomoga", "digital-residence"],
};

const REVIEWS_NOTE: Record<Locale, string> = {
  uk: "Реальні відгуки клієнтів із реалізованих проєктів ZOND.",
  ru: "Реальные отзывы клиентов из реализованных проектов ZOND.",
  en: "Real client testimonials from completed ZOND projects.",
};

function toServiceReview(
  slug: string,
  locale: Locale,
  testimonial: CaseTestimonial,
): ServiceReview {
  const company = COMPANY_NAMES[slug]?.[locale] ?? slug;
  const quote = testimonial.paragraphs.join(" ").trim();
  const roleParts = [testimonial.role, company].filter(Boolean);

  return {
    label: company,
    quote,
    name: testimonial.author,
    role: roleParts.join(" · "),
    href: isCaseSlug(locale, slug) ? getCaseDetailPath(locale, slug) : undefined,
  };
}

export function getServiceReviews(
  locale: Locale,
  serviceSlug?: string,
  limit = 4,
): ServiceReview[] {
  const preferred = serviceSlug
    ? REVIEW_SLUGS_BY_SERVICE[serviceSlug]
    : undefined;
  const slugs = [...(preferred ?? DEFAULT_REVIEW_SLUGS)];

  const reviews: ServiceReview[] = [];
  const seen = new Set<string>();

  for (const slug of slugs) {
    if (seen.has(slug)) continue;
    const testimonial = CASE_TESTIMONIALS[slug]?.[locale];
    if (!testimonial) continue;
    seen.add(slug);
    reviews.push(toServiceReview(slug, locale, testimonial));
    if (reviews.length >= limit) return reviews;
  }

  for (const slug of Object.keys(CASE_TESTIMONIALS)) {
    if (seen.has(slug)) continue;
    const testimonial = CASE_TESTIMONIALS[slug]?.[locale];
    if (!testimonial) continue;
    reviews.push(toServiceReview(slug, locale, testimonial));
    if (reviews.length >= limit) break;
  }

  return reviews;
}

export function getServiceReviewsNote(locale: Locale): string {
  return REVIEWS_NOTE[locale];
}

export function withCaseServiceReviews<
  T extends { reviews: ServiceReview[]; reviewsNote: string },
>(copy: T, locale: Locale, serviceSlug?: string, limit = 4): T {
  return {
    ...copy,
    reviews: getServiceReviews(locale, serviceSlug, limit),
    reviewsNote: getServiceReviewsNote(locale),
  };
}
