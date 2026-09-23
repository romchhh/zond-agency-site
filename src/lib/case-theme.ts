import type { CSSProperties } from "react";
import type { CaseItem, CaseVisualTheme } from "@/i18n/cases/types";

const DEFAULT_THEME: Required<CaseVisualTheme> = {
  accent: "#ff7100",
  accentInk: "#3e2414",
  manifestoBg: "#242622",
  manifestoFg: "#ffffff",
  manifestoEm: "#ff7100",
};

const CASE_THEMES: Record<string, CaseVisualTheme> = {
  "home-hub": {
    accent: "#f47a38",
    accentInk: "#3e2414",
    manifestoBg: "#f47a38",
    manifestoFg: "#171717",
    manifestoEm: "#f4f1ea",
  },
  carbit: {
    accent: "#5cc49a",
    accentInk: "#173d2c",
    manifestoBg: "#111b17",
    manifestoFg: "#ffffff",
    manifestoEm: "#5cc49a",
  },
  "nove-misto": {
    accent: "#e97830",
    accentInk: "#342518",
    manifestoBg: "#292521",
    manifestoFg: "#ffffff",
    manifestoEm: "#ff8a3b",
  },
  "kyiv-tourism-department": {
    accent: "#ff7100",
    accentInk: "#342518",
    manifestoBg: "#192c42",
    manifestoFg: "#ffffff",
    manifestoEm: "#ff8a3b",
  },
  "digital-residence": {
    accent: "#3ec3d6",
    accentInk: "#12363c",
    manifestoBg: "#12202a",
  },
  kavlora: {
    accent: "#b85c6e",
    accentInk: "#3d1c24",
    manifestoBg: "#24181c",
  },
  "ahmad-tea": {
    accent: "#c33a3a",
    accentInk: "#3d1414",
    manifestoBg: "#231616",
  },
  "bit-school": {
    accent: "#4c8fd9",
    accentInk: "#16324f",
    manifestoBg: "#1a2430",
  },
  "terminal-borivaje": {
    accent: "#d9782e",
    accentInk: "#3d2610",
    manifestoBg: "#221c16",
  },
  altep: {
    accent: "#e24b3b",
    accentInk: "#4a1612",
    manifestoBg: "#261816",
  },
  packaging: {
    accent: "#c48a4a",
    accentInk: "#3d2a14",
    manifestoBg: "#241c16",
  },
  "techno-group": {
    accent: "#4f7ea8",
    accentInk: "#1a3044",
    manifestoBg: "#161e28",
  },
  tbiliso: {
    accent: "#a33a4c",
    accentInk: "#3d141c",
    manifestoBg: "#241618",
  },
  "nadiya-odesa": {
    accent: "#3a7ec4",
    accentInk: "#142c48",
    manifestoBg: "#14202c",
  },
  olegivskiy: {
    accent: "#c9a24a",
    accentInk: "#3d3210",
    manifestoBg: "#242018",
  },
  wiex: {
    accent: "#d4b03a",
    accentInk: "#3d3210",
    manifestoBg: "#222018",
  },
  flups: {
    accent: "#e06a9a",
    accentInk: "#4a2438",
    manifestoBg: "#241820",
  },
  "pridniprovsky-zavod": {
    accent: "#c45a3a",
    accentInk: "#3d1c14",
    manifestoBg: "#221816",
  },
  insb: {
    accent: "#3d6aa8",
    accentInk: "#142438",
    manifestoBg: "#141c28",
  },
  "akula-mama": {
    accent: "#ef6b5b",
    accentInk: "#4a1c18",
    manifestoBg: "#261816",
  },
  "alesta-corp": {
    accent: "#3aa8a0",
    accentInk: "#143836",
    manifestoBg: "#142422",
  },
  teamiq: {
    accent: "#7b6fd4",
    accentInk: "#2a2450",
    manifestoBg: "#1c1b28",
  },
  goshchanochka: {
    accent: "#7cb86a",
    accentInk: "#1e3318",
    manifestoBg: "#1a2218",
  },
  "sk-energy": {
    accent: "#ff8a2c",
    accentInk: "#4a2a10",
    manifestoBg: "#261c14",
  },
  cha: {
    accent: "#6aa35a",
    accentInk: "#1e3318",
    manifestoBg: "#182018",
  },
  "novo-development": {
    accent: "#c9a06a",
    accentInk: "#3d2e18",
    manifestoBg: "#221c16",
  },
  "valtex-guma": {
    accent: "#d14a4a",
    accentInk: "#3d1414",
    manifestoBg: "#1c1616",
  },
  bohrach: {
    accent: "#d45d3a",
    accentInk: "#4a1e14",
    manifestoBg: "#241816",
  },
  pixies: {
    accent: "#d17a9a",
    accentInk: "#4a2434",
    manifestoBg: "#241820",
  },
  skybar: {
    accent: "#9b5cff",
    accentInk: "#2a1848",
    manifestoBg: "#16101f",
  },
  "edina-shkola": {
    accent: "#3d7ed4",
    accentInk: "#142848",
    manifestoBg: "#141c28",
  },
  "chillary-fest": {
    accent: "#f0c14a",
    accentInk: "#3d2f0c",
    manifestoBg: "#241e12",
  },
  medeus: {
    accent: "#3aa8b8",
    accentInk: "#14363c",
    manifestoBg: "#142226",
  },
  dron: {
    accent: "#6a8fa8",
    accentInk: "#1a2c38",
    manifestoBg: "#161c22",
  },
  "karantin-identity": {
    accent: "#8a9aa8",
    accentInk: "#243038",
    manifestoBg: "#1a1e22",
  },
  stefania: {
    accent: "#d48aa0",
    accentInk: "#4a2434",
    manifestoBg: "#24181c",
  },
  yakomoga: {
    accent: "#2f6f9a",
    accentInk: "#102838",
    manifestoBg: "#121c26",
  },
  synta: {
    accent: "#4aa0c8",
    accentInk: "#143848",
    manifestoBg: "#142028",
  },
};

const THEME_PRESETS: CaseVisualTheme[] = [
  { accent: "#5cc49a", accentInk: "#173d2c", manifestoBg: "#111b17" },
  { accent: "#e97830", accentInk: "#342518", manifestoBg: "#292521" },
  { accent: "#4c8fd9", accentInk: "#16324f", manifestoBg: "#1a2430" },
  { accent: "#d45d6a", accentInk: "#4a1d24", manifestoBg: "#23181a" },
  { accent: "#c9a227", accentInk: "#3d3210", manifestoBg: "#242018" },
  { accent: "#7b6fd4", accentInk: "#2a2450", manifestoBg: "#1c1b28" },
  { accent: "#3aa8a0", accentInk: "#143836", manifestoBg: "#142422" },
  { accent: "#e06a3a", accentInk: "#4a2414", manifestoBg: "#261c16" },
];

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function withThemeDefaults(theme: CaseVisualTheme): Required<CaseVisualTheme> {
  const accent = theme.accent;
  return {
    accent,
    accentInk: theme.accentInk ?? DEFAULT_THEME.accentInk,
    manifestoBg: theme.manifestoBg ?? DEFAULT_THEME.manifestoBg,
    manifestoFg: theme.manifestoFg ?? DEFAULT_THEME.manifestoFg,
    manifestoEm: theme.manifestoEm ?? accent,
  };
}

export function resolveCaseTheme(caseItem: Pick<CaseItem, "slug" | "theme">): Required<CaseVisualTheme> {
  if (caseItem.theme) return withThemeDefaults(caseItem.theme);

  const named = CASE_THEMES[caseItem.slug];
  if (named) return withThemeDefaults(named);

  const preset = THEME_PRESETS[hashSlug(caseItem.slug) % THEME_PRESETS.length];
  return withThemeDefaults(preset);
}

export function caseThemeStyle(theme: Required<CaseVisualTheme>): CSSProperties {
  return {
    "--case-accent": theme.accent,
    "--case-accent-ink": theme.accentInk,
    "--case-manifesto": theme.manifestoBg,
    "--case-manifesto-fg": theme.manifestoFg,
    "--case-manifesto-em": theme.manifestoEm,
  } as CSSProperties;
}
