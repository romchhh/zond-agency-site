import BlogIndexPage from "@/components/BlogIndexPage";
import { getBlogPosts } from "@/i18n/blog";
import { blogIndexMeta } from "@/i18n/blog/meta";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPathMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return createPathMetadata(locale, "/blog", blogIndexMeta[locale]);
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const posts = getBlogPosts(locale);

  return (
    <BlogIndexPage locale={locale} dictionary={dictionary} posts={posts} />
  );
}
