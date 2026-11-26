import { caseMetaEntries } from "./case-meta-data";

export const CASE_CATEGORY_ORDER = [
  "branding",
  "packaging",
  "smm",
  "strategy",
  "web",
  "graphic",
] as const;

export type CaseCategory = (typeof CASE_CATEGORY_ORDER)[number];

export const CASE_CATEGORY_SLUGS: Record<string, CaseCategory[]> = {
  aximod: ["branding", "graphic"],
  "home-hub": ["branding", "smm", "web", "graphic"],
  carbit: ["branding", "web"],
  "nove-misto": ["branding"],
  "kyiv-tourism-department": ["branding", "graphic"],
  "digital-residence": ["branding"],
  kavlora: ["branding"],
  "ahmad-tea": ["strategy", "smm"],
  "bit-school": ["branding", "strategy"],
  "terminal-borivaje": ["branding"],
  altep: ["branding", "web"],
  packaging: ["packaging"],
  "techno-group": ["branding", "smm"],
  tbiliso: ["branding", "packaging", "smm"],
  "nadiya-odesa": ["branding", "web"],
  olegivskiy: ["branding"],
  wiex: ["branding"],
  flups: ["branding", "packaging"],
  "pridniprovsky-zavod": ["branding", "web"],
  insb: ["branding", "strategy"],
  "akula-mama": ["branding", "packaging", "web"],
  "alesta-corp": ["branding", "smm"],
  teamiq: ["branding"],
  goshchanochka: ["branding", "packaging"],
  "sk-energy": ["branding", "strategy"],
  cha: ["branding", "web"],
  "novo-development": ["branding", "web"],
  "valtex-guma": ["branding", "strategy"],
  bohrach: ["branding"],
  pixies: ["branding"],
  skybar: ["branding", "strategy", "web", "smm"],
  "edina-shkola": ["graphic"],
  "chillary-fest": ["smm", "graphic"],
  medeus: ["branding", "strategy"],
  dron: ["graphic"],
  "karantin-identity": ["branding", "graphic"],
  stefania: ["branding", "strategy", "smm"],
  yakomoga: ["strategy", "branding"],
  synta: ["branding", "strategy"],
};

export function getCaseCategories(slug: string): CaseCategory[] {
  // Use static meta only — keeps this module client-safe (no cms/store / fs).
  const fromMeta = caseMetaEntries[slug]?.categories;
  if (fromMeta?.length) return fromMeta;
  return CASE_CATEGORY_SLUGS[slug] ?? ["branding"];
}
