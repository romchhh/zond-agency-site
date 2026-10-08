import BlogPostPage from "@/components/BlogPostPage";
import { getBlogPost, getBlogSlugs, getRelatedBlogPosts, isBlogSlug } from "@/i18n/blog";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getBlogDetailPath } from "@/i18n/routing";
import { createNotFoundMetadata, createPathMetadata } from "@/lib/metadata";
import { renderLocalizedNotFound } from "@/lib/render-localized-not-found";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  if (!isBlogSlug(locale, slug)) {
    const dictionary = await getDictionary(locale);
    return createNotFoundMetadata(locale, dictionary);
  }

  const post = getBlogPost(locale, slug);
  if (!post) {
    const dictionary = await getDictionary(locale);
    return createNotFoundMetadata(locale, dictionary);
  }

  return createPathMetadata(
    locale,
    getBlogDetailPath(locale, slug),
    {
      title: `${post.title} — ZOND`,
      description: post.description,
    },
    post.cover || undefined,
  );
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!isBlogSlug(locale, slug)) return renderLocalizedNotFound(locale);

  const post = getBlogPost(locale, slug);
  if (!post) return renderLocalizedNotFound(locale);

  const dictionary = await getDictionary(locale);

  const relatedPosts = getRelatedBlogPosts(locale, slug);

  return (
    <BlogPostPage
      locale={locale}
      dictionary={dictionary}
      post={post}
      relatedPosts={relatedPosts}
    />
  );
}
