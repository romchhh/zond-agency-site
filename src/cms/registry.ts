import { locales, type Locale } from "@/i18n/config";
import { PUBLISHED_CASE_SLUGS_FOR_CMS } from "@/cms/case-slugs";
import { listCmsDocIdsSync, readCmsDocSync } from "@/cms/store";
import { serviceSlugs } from "@/i18n/services";

export type CmsFieldType = "string" | "text" | "markdown" | "image" | "video" | "json";

export type CmsDocMeta = {
  id: string;
  title: string;
  group: string;
  description?: string;
  /** When true, editor shows UK/EN/RU tabs over Record<Locale, …> root. */
  localeMap?: boolean;
  previewPath?: string;
};

const HEAVY_SERVICE_SLUGS = [
  "branding",
  "logo",
  "brandbook",
  "identity",
  "naming",
  "positioning",
  "communication",
  "brand-character",
  "packaging",
  "graphics",
  "smm",
  "illustration",
  "influence-marketing",
  "rebranding",
  "web-development",
] as const;

const TEXT_SERVICE_SLUGS = [
  "marketing-research",
  "motion-design",
  "brand-audit",
  "brand-voice",
  "font-design",
  "presentations",
  "labels",
  "catalogs",
  "infographics",
] as const;

function localePreview(pathUk: string, locale: Locale): string {
  if (locale === "uk") return pathUk;
  return `/${locale}${pathUk === "/" ? "" : pathUk}`;
}

export function getCmsRegistry(): CmsDocMeta[] {
  const docs: CmsDocMeta[] = [];

  for (const locale of locales) {
    docs.push({
      id: `dictionary/${locale}`,
      title: `Словник UI (${locale})`,
      group: "Словники",
      description: "Навігація, форми, футер, home copy",
      previewPath: localePreview("/", locale),
    });
  }

  docs.push({
    id: "policy",
    title: "Політика конфіденційності",
    group: "Сторінки",
    localeMap: true,
    previewPath: "/policy",
  });

  docs.push({
    id: "contact/meta",
    title: "Контакти — meta",
    group: "Сторінки",
    localeMap: true,
    previewPath: "/contact",
  });

  docs.push({
    id: "seo-overrides",
    title: "SEO overrides",
    group: "SEO",
    description: "Готові title/description з таблиці мета-тегів",
  });

  docs.push({
    id: "thanks",
    title: "Thanks pages",
    group: "Сторінки",
    localeMap: true,
  });

  docs.push({
    id: "services/titles",
    title: "Назви послуг",
    group: "Послуги",
    localeMap: true,
  });

  docs.push({
    id: "services/meta",
    title: "Meta послуг",
    group: "Послуги",
    localeMap: true,
  });

  docs.push({
    id: "services/index",
    title: "Індекс послуг (меню)",
    group: "Послуги",
  });

  docs.push({
    id: "services/about",
    title: "Блок about на послугах",
    group: "Послуги",
  });

  for (const slug of HEAVY_SERVICE_SLUGS) {
    docs.push({
      id: `services/${slug}/page`,
      title: `${slug} — page`,
      group: "Послуги",
      localeMap: true,
      previewPath: `/services/${slug}`,
    });
    docs.push({
      id: `services/${slug}/seo`,
      title: `${slug} — SEO`,
      group: "Послуги",
      localeMap: true,
      previewPath: `/services/${slug}`,
    });
  }

  for (const slug of TEXT_SERVICE_SLUGS) {
    docs.push({
      id: `text-services/${slug}`,
      title: `${slug} (text-service)`,
      group: "Послуги",
      previewPath: `/services/${slug}`,
    });
  }

  for (const locale of locales) {
    docs.push({
      id: `cases/catalog/${locale}`,
      title: `Каталог кейсів (${locale})`,
      group: "Кейси",
      previewPath: localePreview("/projects", locale),
    });
  }

  docs.push({
    id: "cases/meta",
    title: "Cases index meta",
    group: "Кейси",
    localeMap: true,
  });

  docs.push({
    id: "cases/card-descriptions",
    title: "Описи карток кейсів",
    group: "Кейси",
  });

  docs.push({
    id: "cases/hero-captions",
    title: "Hero captions кейсів",
    group: "Кейси",
  });

  docs.push({
    id: "cases/case-meta",
    title: "Case meta (client URL тощо)",
    group: "Кейси",
  });

  const diskIds = listCmsDocIdsSync();
  const caseSlugs = new Set<string>([
    ...PUBLISHED_CASE_SLUGS_FOR_CMS,
    ...(readCmsDocSync<string[]>("cases/published") ?? []),
  ]);
  for (const id of diskIds) {
    if (id.startsWith("cases/body/")) caseSlugs.add(id.slice("cases/body/".length));
  }
  for (const slug of Array.from(caseSlugs).sort()) {
    docs.push({
      id: `cases/body/${slug}`,
      title: `Кейс: ${slug}`,
      group: "Кейси",
      localeMap: true,
      previewPath: `/projects/${slug}`,
    });
  }

  docs.push({
    id: "cases/published",
    title: "Опубліковані кейси (порядок)",
    group: "Кейси",
    description: "Масив slug у порядку показу на сайті",
  });

  for (const locale of locales) {
    docs.push({
      id: `blog/posts/${locale}`,
      title: `Блог каталог (${locale})`,
      group: "Блог",
      previewPath: localePreview("/blog", locale),
    });
  }

  const blogSlugs = new Set<string>();
  for (const id of diskIds) {
    if (id.startsWith("blog/body/")) blogSlugs.add(id.slice("blog/body/".length));
  }
  for (const slug of Array.from(blogSlugs).sort()) {
    docs.push({
      id: `blog/body/${slug}`,
      title: `Стаття: ${slug}`,
      group: "Блог",
      localeMap: true,
      previewPath: `/blog/${slug}`,
    });
  }

  docs.push({
    id: "blog/meta",
    title: "Blog index meta",
    group: "Блог",
    localeMap: true,
  });

  docs.push({
    id: "home-seo",
    title: "Home SEO blocks",
    group: "SEO",
  });

  docs.push({
    id: "clients",
    title: "Clients",
    group: "Сторінки",
  });

  docs.push({
    id: "pages/index",
    title: "Кастомні сторінки (індекс)",
    group: "Кастомні",
  });

  const pageSlugs = new Set<string>(readCmsDocSync<string[]>("pages/index") ?? []);
  for (const id of diskIds) {
    if (id.startsWith("pages/") && id !== "pages/index") {
      pageSlugs.add(id.slice("pages/".length));
    }
  }
  for (const slug of Array.from(pageSlugs).sort()) {
    docs.push({
      id: `pages/${slug}`,
      title: `Сторінка: ${slug}`,
      group: "Кастомні",
      localeMap: true,
      previewPath: `/pages/${slug}`,
    });
  }

  // Keep service slug list referenced so registry stays aligned with services module.
  void serviceSlugs;

  return docs;
}

export function getCmsDocMeta(docId: string): CmsDocMeta | undefined {
  return getCmsRegistry().find((doc) => doc.id === docId);
}

export function groupCmsRegistry(): Record<string, CmsDocMeta[]> {
  const groups: Record<string, CmsDocMeta[]> = {};
  for (const doc of getCmsRegistry()) {
    (groups[doc.group] ??= []).push(doc);
  }
  return groups;
}
