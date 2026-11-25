import BlogPostPage from "@/components/BlogPostPage";
import {
  getBlogPost,
  getBlogSlugs,
  getRelatedBlogPosts,
  isBlogSlug,
  withBlogLanguages,
} from "@/i18n/blog";
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

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isBlogSlug(locale, slug)) return {};

  const post = getBlogPost(locale, slug);
  if (!post) return {};

  const metadata = createPathMetadata(
    locale,
    getBlogDetailPath(locale, slug),
    {
      title: post.title,
      description: post.description,
    },
    post.cover || undefined,
  );
  const languages = metadata.alternates?.languages as Record<string, string> | undefined;
  if (languages) {
    metadata.alternates = { ...metadata.alternates, languages: withBlogLanguages(languages, slug) };
  }

  return metadata;
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
