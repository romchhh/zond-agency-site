import { locales, type Locale } from "@/i18n/config";
import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import type { BlogPost } from "@/i18n/blog/types";

type BlogBodyDoc = Partial<Record<Locale, BlogPost>>;

export async function syncBlogBodyIntoCatalogs(slug: string, body: BlogBodyDoc): Promise<void> {
  for (const locale of locales) {
    const post = body[locale];
    if (!post) continue;
    const catalog = (await readCmsDoc<BlogPost[]>(`blog/posts/${locale}`)) ?? [];
    const nextPost: BlogPost = { ...post, slug };
    const index = catalog.findIndex((item) => item.slug === slug);
    if (index >= 0) catalog[index] = nextPost;
    else catalog.unshift(nextPost);
    await writeCmsDoc(`blog/posts/${locale}`, catalog);
  }
}
