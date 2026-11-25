import { readCmsDocSync } from "@/cms/store";
import type { Locale } from "@/i18n/config";

type HeroCaptions = Record<string, Partial<Record<Locale, string>>>;

export const caseHeroCaptions: HeroCaptions = {
  flups: {
    uk: "FLUPS — для маленьких босів",
    ru: "FLUPS — для маленьких боссов",
    en: "FLUPS — for little bosses",
  },
  goshchanochka: {
    uk: "Гощаночка — молочні продукти",
    ru: "Гощаночка — молочные продукты",
    en: "Goshchanochka — dairy products",
  },
  aximod: {
    uk: "AXIMOD — гальмівна система",
    ru: "AXIMOD — тормозная система",
    en: "AXIMOD — braking system",
  },
  "home-hub": {
    uk: "Home Hub — шоурум і айдентика",
    ru: "Home Hub — шоурум и айдентика",
    en: "Home Hub — showroom and identity",
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
    uk: "Упаковка — обкладинка добірки",
    ru: "Упаковка — обложка подборки",
    en: "Packaging — collection cover",
  },
  "novo-development": {
    uk: "NOVO Spa — деталізований басейн, пальми та айдентика у просторі",
    ru: "NOVO Spa — детализированный бассейн, пальмы и айдентика в пространстве",
    en: "NOVO Spa — detailed pool, palms, and identity in the space",
  },
};

export function getCaseHeroCaption(
  slug: string,
  locale: Locale,
  fallbackTitle: string,
): string {
  const fromCms = readCmsDocSync<HeroCaptions>("cases/hero-captions");
  return (fromCms ?? caseHeroCaptions)[slug]?.[locale] ?? fallbackTitle;
}
