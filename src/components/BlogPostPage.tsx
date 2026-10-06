import { ArticleGalleryProvider } from "@/components/ArticleGallery";
import BlogCard from "@/components/BlogCard";
import BlogMarkdown from "@/components/BlogMarkdown";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostDetailLayout from "@/components/PostDetailLayout";
import type { BlogPost } from "@/i18n/blog";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getBlogDetailPath, getBlogIndexPath } from "@/i18n/routing";
import { extractArticleImagePaths } from "@/lib/article-blocks";
import {
  blogMediaSrc,
  extractBlogHeroMedia,
  isAnimatedBlogMedia,
} from "@/lib/blog-content";
import PageJsonLd from "@/components/PageJsonLd";
import { getBlogPublishDate } from "@/i18n/blog/publish-dates";
import { resolvePageCopy } from "@/lib/json-ld";
import Link from "next/link";

type BlogPostPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export default function BlogPostPage({
  locale,
  dictionary,
  post,
  relatedPosts,
}: BlogPostPageProps) {
  const copy = dictionary.blog;
  const blogPath = getBlogIndexPath(locale);
  const articlePath = getBlogDetailPath(locale, post.slug);
  const { hero, body } = extractBlogHeroMedia(post.cover, post.body);
  const galleryImages = extractArticleImagePaths(body).map((path) => blogMediaSrc(path));
  const published = getBlogPublishDate(post.slug);
  const seo = resolvePageCopy(articlePath, {
    title: `${post.title} — ZOND`,
    description: post.description,
  });

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={articlePath}
        name={seo.title}
        description={seo.description}
        breadcrumbs={[
          { name: copy.title, path: blogPath },
          { name: post.title, path: articlePath },
        ]}
        article={{
          headline: post.title,
          image: post.cover,
          datePublished: published,
          dateModified: published,
          path: articlePath,
        }}
      />
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp case-post-page blog-post-page">
        <PostDetailLayout
          breadcrumbs={[
            { label: copy.title, href: blogPath },
            { label: post.title },
          ]}
          title={post.title}
          description={post.description}
          hero={hero}
          heroAlt={post.title}
          heroUnoptimized={
            hero ? isAnimatedBlogMedia(hero.src) || hero.src.endsWith(".svg") : false
          }
          footer={
            <section className="sp-cta">
              <div className="wrap">
                <CtaPanel dictionary={dictionary} />
              </div>
            </section>
          }
        >
          <section className="sp-section case-post-body">
            <ArticleGalleryProvider images={galleryImages}>
              <BlogMarkdown content={body} />
            </ArticleGalleryProvider>
            <div className="wrap">
              <div className="case-post-back">
                <Link href={blogPath} className="sp-btn">
                  <span>{copy.backToBlog}</span>
                  <span className="sp-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </section>

          {relatedPosts.length > 0 ? (
            <section className="case-related">
              <div className="wrap">
                <h2 className="sp-h2 case-related-title">{copy.relatedPosts}</h2>
                <div className="projects-grid case-related-grid">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard
                      key={relatedPost.slug}
                      locale={locale}
                      post={relatedPost}
                    />
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </PostDetailLayout>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
