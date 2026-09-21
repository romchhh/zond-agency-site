import { ArticleGalleryProvider } from "@/components/ArticleGallery";
import CaseCard from "@/components/CaseCard";
import CaseMarkdown from "@/components/CaseMarkdown";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostDetailLayout from "@/components/PostDetailLayout";
import type { CaseItem } from "@/i18n/cases";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";
import { extractArticleImagePaths } from "@/lib/article-blocks";
import {
  caseMediaSrc,
  ensureCaseBodyMedia,
  extractCaseHeroMedia,
  isAnimatedCaseMedia,
} from "@/lib/case-content";
import Link from "next/link";

type CasePostPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  caseItem: CaseItem;
  relatedCases: CaseItem[];
};

export default function CasePostPage({
  locale,
  dictionary,
  caseItem,
  relatedCases,
}: CasePostPageProps) {
  const copy = dictionary.cases;
  const casesPath = getLocalePath(locale, "/cases");
  const { hero, body } = extractCaseHeroMedia(
    ensureCaseBodyMedia(caseItem.body, caseItem.media ?? []),
  );
  const galleryImages = extractArticleImagePaths(body).map((path) => caseMediaSrc(path));

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp case-post-page">
        <PostDetailLayout
          breadcrumbs={[
            { label: copy.title, href: casesPath },
            { label: caseItem.title },
          ]}
          title={caseItem.title}
          description={caseItem.description}
          hero={hero}
          heroAlt={caseItem.title}
          heroUnoptimized={hero ? isAnimatedCaseMedia(hero.src) : false}
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
              <CaseMarkdown content={body} />
            </ArticleGalleryProvider>
            <div className="wrap">
              <div className="case-post-back">
                <Link href={casesPath} className="sp-btn">
                  <span>{copy.backToCases}</span>
                  <span className="sp-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </section>

          {relatedCases.length > 0 ? (
            <section className="case-related">
              <div className="wrap">
                <h2 className="sp-h2 case-related-title">{copy.relatedCases}</h2>
                <div className="projects-grid case-related-grid">
                  {relatedCases.map((related) => (
                    <CaseCard key={related.slug} locale={locale} caseItem={related} />
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
