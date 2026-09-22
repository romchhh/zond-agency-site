import BlogPostPage from "@/components/BlogPostPage";
import { getBlogPost, getBlogSlugs, getRelatedBlogPosts, isBlogSlug } from "@/i18n/blog";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getBlogDetailPath } from "@/i18n/routing";
import { createPathMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isBlogSlug(locale, slug)) return {};

  const post = getBlogPost(locale, slug);
  if (!post) return {};

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
  if (!isLocale(locale) || !isBlogSlug(locale, slug)) notFound();

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

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
