import type { ProjectItem } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

const projectImages = [
  "/assets/digital-residence.gif",
  "/assets/ahmad-tea.gif",
  "/assets/6a8b0344d04c77b87616bfde_67635052448c4986e836a3cf_1-80.jpg",
  "/assets/altep.gif",
  "/assets/6a8b039f1afc26dfabc60f6a_66ab5efafe185b233eaddfe2_IMG_6170.png",
  "/assets/hero-art.jpg",
];

const projectHrefs = [
  "/projects/digital-residence",
  "/projects/ahmad-tea",
  "/projects/terminal-borivaje",
  "/projects/altep",
  "/projects/packaging",
  undefined,
];

const projectCopy: Record<
  Locale,
  Array<Pick<ProjectItem, "title" | "description">>
> = {
  uk: [
    { title: "Digital Residence", description: "Технологічна резиденція нового покоління" },
    { title: "AHMAD TEA", description: "Британський преміальний чай" },
    { title: "Terminal Borivaje", description: "Зерноперевантажувальний термінал" },
    { title: "ALTEP", description: "Виробник твердопаливних котлів" },
    { title: "Пакування", description: "Добірка дизайну пакувань" },
    { title: "ZOND Works", description: "Брендинг і візуальна ідентичність агенції" },
  ],
  en: [
    { title: "Digital Residence", description: "A next-generation technology residence" },
    { title: "AHMAD TEA", description: "Premium British tea" },
    { title: "Terminal Borivaje", description: "Grain transshipment terminal" },
    { title: "ALTEP", description: "Solid fuel boiler manufacturer" },
    { title: "Packaging", description: "A curated collection of packaging design" },
    { title: "ZOND Works", description: "Branding and visual identity for the agency" },
  ],
  ru: [
    { title: "Digital Residence", description: "Технологичная резиденция нового поколения" },
    { title: "AHMAD TEA", description: "Премиальный британский чай" },
    { title: "Terminal Borivaje", description: "Зерновой перевалочный терминал" },
    { title: "ALTEP", description: "Производитель твердотопливных котлов" },
    { title: "Упаковка", description: "Подборка дизайна упаковки" },
    { title: "ZOND Works", description: "Брендинг и визуальная идентичность агентства" },
  ],
};

export function getProjects(locale: Locale): ProjectItem[] {
  return projectCopy[locale].map((project, index) => ({
    ...project,
    image: projectImages[index],
    href: projectHrefs[index],
  }));
}
