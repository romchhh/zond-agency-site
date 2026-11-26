export type CaseMetaEntry = {
  clientUrl?: string;
  categories: Array<"branding" | "packaging" | "smm" | "strategy" | "web" | "graphic">;
};

/** Static fallback — safe for client bundles (no filesystem). */
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
