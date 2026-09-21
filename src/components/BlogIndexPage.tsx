import BlogCard from "@/components/BlogCard";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { BlogPost } from "@/i18n/blog";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

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

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp cases-index-page blog-index-page">
        <section className="cases-hero">
          <div className="wrap">
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
                <BlogCard key={post.slug} locale={locale} post={post} />
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
