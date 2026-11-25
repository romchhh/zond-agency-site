import { locales, type Locale } from "@/i18n/config";
import { readCmsDocSync } from "@/cms/store";
import type { BlogPost } from "./types";
import postsEn from "./posts.en";
import postsRu from "./posts.ru";
import postsUk from "./posts.uk";

const postsByLocaleFallback: Record<Locale, BlogPost[]> = {
  uk: postsUk,
  ru: postsRu,
  en: postsEn,
};

export type { BlogPost } from "./types";

export function getBlogPosts(locale: Locale): BlogPost[] {
  return (
    readCmsDocSync<BlogPost[]>(`blog/posts/${locale}`) ??
    postsByLocaleFallback[locale]
  );
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getBlogSlugs(locale: Locale): string[] {
  return getBlogPosts(locale).map((post) => post.slug);
}

export function isBlogSlug(locale: Locale, slug: string): boolean {
  return getBlogSlugs(locale).includes(slug);
}

/** Drop hreflang entries for languages where the post does not exist yet. */
export function withBlogLanguages(
  languages: Record<string, string>,
  slug: string,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(languages).filter(([key]) => {
      if (key === "x-default") return isBlogSlug("uk", slug);
      return !(locales as readonly string[]).includes(key) || isBlogSlug(key as Locale, slug);
    }),
  );
}

function getPostTopic(slug: string): string {
  if (slug.startsWith("brandbook")) return "brandbook";
  if (slug.includes("logo") || slug.includes("emblem")) return "logo";
  if (slug.startsWith("branding") || slug.includes("brand-identity")) return "branding";
  if (slug.startsWith("packaging")) return "packaging";
  if (slug.startsWith("naming")) return "naming";
  if (slug.startsWith("marketing")) return "marketing";
  if (slug.includes("design")) return "design";
  return "general";
}

export function getRelatedBlogPosts(
  locale: Locale,
  slug: string,
  limit = 3,
): BlogPost[] {
  const posts = getBlogPosts(locale);
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  if (currentIndex === -1) return [];

  const topic = getPostTopic(slug);
  const related: BlogPost[] = [];
  const used = new Set<string>([slug]);

  for (const post of posts) {
    if (post.slug === slug || getPostTopic(post.slug) !== topic) continue;
    related.push(post);
    used.add(post.slug);
    if (related.length >= limit) return related;
  }

  for (let offset = 1; related.length < limit && offset < posts.length; offset++) {
    const post = posts[(currentIndex + offset) % posts.length];
    if (used.has(post.slug)) continue;
    related.push(post);
    used.add(post.slug);
  }

  return related;
}
