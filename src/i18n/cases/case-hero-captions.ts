import type { Locale } from "@/i18n/config";

type HeroCaptions = Record<string, Partial<Record<Locale, string>>>;

const HERO_CAPTIONS: HeroCaptions = {
  "home-hub": {
    uk: "Home Hub — концепція фасаду шоуруму",
    ru: "Home Hub — концепция фасада шоурума",
    en: "Home Hub — showroom facade concept",
  },
  carbit: {
    uk: "Carbit — анімована айдентика",
    ru: "Carbit — анимированная айдентика",
    en: "Carbit — animated identity",
  },
  "nove-misto": {
    uk: "Нове місто — айдентика в русі",
    ru: "Новое Место — айдентика в движении",
    en: "Nove Misto — identity in motion",
  },
  "kyiv-tourism-department": {
    uk: "Київ — місто кожного / міська кампанія",
    ru: "Киев — город каждого / городская кампания",
    en: "Kyiv — a city for everyone / urban campaign",
  },
  "ahmad-tea": {
    uk: "AHMAD TEA — комунікаційна стратегія",
    ru: "AHMAD TEA — коммуникационная стратегия",
    en: "AHMAD TEA — communication strategy",
  },
  "digital-residence": {
    uk: "Digital Residence — технологічна резиденція",
    ru: "Digital Residence — технологичная резиденция",
    en: "Digital Residence — tech-forward residence",
  },
  kavlora: {
    uk: "KAVLORA — айдентика виробника",
    ru: "KAVLORA — айдентика производителя",
    en: "KAVLORA — manufacturer identity",
  },
  "bit-school": {
    uk: "BIT School — брендинг школи",
    ru: "BIT School — брендинг школы",
    en: "BIT School — school branding",
  },
  "terminal-borivaje": {
    uk: "Terminal Borivaje — айдентика агротерміналу",
    ru: "Terminal Borivaje — айдентика агротерминала",
    en: "Terminal Borivaje — agro terminal identity",
  },
  altep: {
    uk: "ALTEP — оновлена айдентика",
    ru: "ALTEP — обновлённая айдентика",
    en: "ALTEP — refreshed identity",
  },
  packaging: {
    uk: "Пакування — обкладинка добірки",
    ru: "Упаковка — обложка подборки",
    en: "Packaging — collection cover",
  },
};

export function getCaseHeroCaption(
  slug: string,
  locale: Locale,
  fallbackTitle: string,
): string {
  return HERO_CAPTIONS[slug]?.[locale] ?? fallbackTitle;
}
