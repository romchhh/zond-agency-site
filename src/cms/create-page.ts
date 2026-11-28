import type { Locale } from "@/i18n/config";
import { PUBLISHED_CASE_SLUGS_FOR_CMS } from "@/cms/case-slugs";
import {
  assertValidSlug,
  normalizeSlug,
  type CreatePageInput,
  type CreatePageResult,
} from "@/cms/page-types";
import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import { syncCaseBodyIntoCatalogs } from "@/cms/sync-case-catalogs";
import { syncBlogBodyIntoCatalogs } from "@/cms/sync-blog-catalogs";
import type { BlogPost } from "@/i18n/blog/types";
import type { CaseItem } from "@/i18n/cases/types";

export type { CreatePageInput, CreatePageResult, CreatePageType } from "@/cms/page-types";
export { normalizeSlug } from "@/cms/page-types";

function titleFor(titles: CreatePageInput["titles"], locale: Locale, fallback: string) {
  return titles[locale]?.trim() || titles.uk?.trim() || titles.en?.trim() || fallback;
}

async function ensureUnique(docId: string) {
  const existing = await readCmsDoc(docId);
  if (existing) throw new Error("already_exists");
}

export async function createCmsPage(input: CreatePageInput): Promise<CreatePageResult> {
  const slug = normalizeSlug(input.slug);
  assertValidSlug(slug);
  const fallbackTitle = titleFor(input.titles, "uk", slug);

  if (input.type === "service") {
    const docId = `services/${slug}/page`;
    await ensureUnique(docId);

    const localePage = (title: string) => ({
      eyebrow: `Послуги / ${title}`,
      title,
      titleAccent: "",
      lead: "",
      sub: "",
      cta: "Обговорити проєкт",
      heroCaption: "",
      heroAlt: "",
      metricsTitle: "",
      includesEyebrow: "Що входить",
      includesTitle: "Що ви отримаєте",
      items: [
        {
          index: "01",
          title: "",
          description: "",
          alt: "",
          image: "",
        },
      ],
      casesTitle: "Кейси",
      reviewsEyebrow: "",
      reviewsTitle: "",
      reviewsNote: "",
      reviews: [],
      productEyebrow: "",
      productTitle: "",
      productNote: "",
      products: [],
      processEyebrow: "",
      processTitle: "",
      process: [],
      needEyebrow: "",
      needTitle: "",
      needs: [],
      receiveEyebrow: "",
      receiveTitle: "",
      receive: [],
      whyTitle: "",
      whyItems: [],
      compare: {},
      faqEyebrow: "FAQ",
      faqTitle: "Питання",
      faq: [],
      finalEyebrow: "",
      finalTitle: "",
      finalCopy: "",
    });

    const page = {
      uk: localePage(titleFor(input.titles, "uk", fallbackTitle)),
      en: localePage(titleFor(input.titles, "en", fallbackTitle)),
      ru: localePage(titleFor(input.titles, "ru", fallbackTitle)),
    };
    await writeCmsDoc(docId, page);

    const seoId = `services/${slug}/seo`;
    const seoLocale = (title: string) => ({
      title: `${title} | ZOND`,
      description: "",
    });
    await writeCmsDoc(seoId, {
      uk: seoLocale(titleFor(input.titles, "uk", fallbackTitle)),
      en: seoLocale(titleFor(input.titles, "en", fallbackTitle)),
      ru: seoLocale(titleFor(input.titles, "ru", fallbackTitle)),
    });

    // Keep titles map in sync when present.
    const titles = (await readCmsDoc<Record<Locale, Record<string, string>>>("services/titles")) ?? {
      uk: {},
      en: {},
      ru: {},
    };
    await writeCmsDoc("services/titles", {
      uk: { ...titles.uk, [slug]: titleFor(input.titles, "uk", fallbackTitle) },
      en: { ...titles.en, [slug]: titleFor(input.titles, "en", fallbackTitle) },
      ru: { ...titles.ru, [slug]: titleFor(input.titles, "ru", fallbackTitle) },
    });

    return { docId, previewPath: `/services/${slug}` };
  }

  if (input.type === "blog") {
    const docId = `blog/body/${slug}`;
    await ensureUnique(docId);

    const body = {
      uk: {
        slug,
        title: titleFor(input.titles, "uk", fallbackTitle),
        description: "",
        cover: "",
        published: new Date().toISOString().slice(0, 10),
        body: "",
      },
      en: {
        slug,
        title: titleFor(input.titles, "en", fallbackTitle),
        description: "",
        cover: "",
        published: new Date().toISOString().slice(0, 10),
        body: "",
      },
      ru: {
        slug,
        title: titleFor(input.titles, "ru", fallbackTitle),
        description: "",
        cover: "",
        published: new Date().toISOString().slice(0, 10),
        body: "",
      },
    } satisfies Record<Locale, BlogPost>;

    await writeCmsDoc(docId, body);
    await syncBlogBodyIntoCatalogs(slug, body);
    return { docId, previewPath: `/blog/${slug}` };
  }

  if (input.type === "case") {
    const docId = `cases/body/${slug}`;
    await ensureUnique(docId);

    const shared: Pick<CaseItem, "slug" | "cover" | "listCover" | "media" | "theme"> = {
      slug,
      cover: "",
      listCover: "",
      media: [],
      theme: { accent: "#ff7100" },
    };

    const localeFields = {
      title: fallbackTitle,
      description: "",
      tagline: "",
      serviceTag: "",
      body: "",
      blocks: [
        {
          type: "section" as const,
          index: "01",
          kicker: "",
          title: fallbackTitle,
          paragraphs: [""],
        },
      ],
      cardDescription: "",
    };

    const body = {
      shared,
      uk: { ...localeFields, title: titleFor(input.titles, "uk", fallbackTitle) },
      en: { ...localeFields, title: titleFor(input.titles, "en", fallbackTitle) },
      ru: { ...localeFields, title: titleFor(input.titles, "ru", fallbackTitle) },
    };

    await writeCmsDoc(docId, body);
    await syncCaseBodyIntoCatalogs(slug, body);

    const published =
      (await readCmsDoc<string[]>("cases/published")) ??
      [...PUBLISHED_CASE_SLUGS_FOR_CMS];
    if (!published.includes(slug)) {
      await writeCmsDoc("cases/published", [...published, slug]);
    }

    return { docId, previewPath: `/projects/${slug}` };
  }

  const docId = `pages/${slug}`;
  await ensureUnique(docId);
  const page = {
    uk: {
      title: titleFor(input.titles, "uk", fallbackTitle),
      description: "",
      body: "",
    },
    en: {
      title: titleFor(input.titles, "en", fallbackTitle),
      description: "",
      body: "",
    },
    ru: {
      title: titleFor(input.titles, "ru", fallbackTitle),
      description: "",
      body: "",
    },
  };
  await writeCmsDoc(docId, page);

  const index = (await readCmsDoc<string[]>("pages/index")) ?? [];
  if (!index.includes(slug)) {
    await writeCmsDoc("pages/index", [...index, slug]);
  }

  return { docId, previewPath: `/pages/${slug}` };
}
