import BlogCard from "@/components/BlogCard";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { BlogPost } from "@/i18n/blog";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageJsonLd from "@/components/PageJsonLd";
import { getBlogIndexPath } from "@/i18n/routing";
import { blogIndexMeta } from "@/i18n/blog/meta";
import { resolvePageCopy } from "@/lib/json-ld";

type BlogIndexPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  posts: BlogPost[];
};

export default function BlogIndexPage({
  locale,
  dictionary,
  posts,
}: BlogIndexPageProps) {
  const copy = dictionary.blog;
  const blogPath = getBlogIndexPath(locale);
  const seo = resolvePageCopy(blogPath, blogIndexMeta[locale]);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={blogPath}
        name={seo.title}
        description={seo.description}
        breadcrumbs={[{ name: copy.title, path: blogPath }]}
      />
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp cases-index-page blog-index-page">
        <section className="cases-hero">
          <div className="wrap">
            <PageBreadcrumbs items={[{ label: copy.title }]} />
            <h1 className="sp-h1">
              {copy.title}
              <span className="sp-h1-accent">.</span>
            </h1>
            <p className="sp-lead cases-lead">{copy.lead}</p>
          </div>
        </section>

        <section className="cases-grid-section">
          <div className="wrap wrap--flush">
            <div className="projects-grid" id="blog">
              {posts.map((post) => (
                <BlogCard key={post.slug} locale={locale} post={post} titleAs="h2" />
              ))}
            </div>
          </div>
        </section>

        <section className="sp-cta">
          <div className="wrap">
            <CtaPanel dictionary={dictionary} />
          </div>
        </section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
