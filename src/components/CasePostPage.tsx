import { ArticleGalleryProvider } from "@/components/ArticleGallery";
import CaseVisualBody from "@/components/CaseVisualBody";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseVisualHero from "@/components/CaseVisualHero";
import MediaImage from "@/components/MediaImage";
import type { CaseItem } from "@/i18n/cases";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getCaseDetailPath, getCaseIndexPath } from "@/i18n/routing";
import {
  buildCaseVisualBlocks,
  collectCaseVisualImages,
  getCaseVisualDefaults,
  getLiveCaseUrl,
} from "@/lib/case-visual";
import { caseThemeStyle, resolveCaseTheme } from "@/lib/case-theme";
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

function splitLines(value: string): string[] {
  return value.split("\n").filter(Boolean);
}

export default function CasePostPage({
  locale,
  dictionary,
  caseItem,
  relatedCases,
}: CasePostPageProps) {
  const copy = dictionary.cases;
  const casesPath = getCaseIndexPath(locale);
  const preparedBody = ensureCaseBodyMedia(caseItem.body, caseItem.media ?? [], {
    skipMissingAppend: Boolean(caseItem.blocks?.length),
  });
  const { hero, body } = extractCaseHeroMedia(preparedBody);
  const blocks = buildCaseVisualBlocks(caseItem, body, locale, hero?.src ?? null);
  const defaults = getCaseVisualDefaults(
    locale,
    caseItem.description,
    caseItem.tagline,
    caseItem.serviceTag,
  );
  const heroCaptions: Record<string, string> = {
    "home-hub": "Home Hub — концепція фасаду шоуруму",
    carbit: "Carbit — анімована айдентика",
    "nove-misto": "Нове місто — айдентика в русі",
    "kyiv-tourism-department": "Київ — місто кожного / міська кампанія",
    "ahmad-tea": "AHMAD TEA — комунікаційна стратегія",
    "digital-residence": "Digital Residence — технологічна резиденція",
    kavlora: "KAVLORA — айдентика виробника",
    "bit-school": "BIT School — брендинг школи",
  };
  const heroCaption = heroCaptions[caseItem.slug] ?? caseItem.title;
  const galleryImages = collectCaseVisualImages(hero?.src ?? null, blocks);
  const theme = resolveCaseTheme(caseItem);
  const taglineLines = splitLines(defaults.tagline);
  const leadLines = taglineLines.length > 1 ? taglineLines.slice(0, -1) : [];
  const lastTaglineLine = taglineLines[taglineLines.length - 1] ?? defaults.tagline;

  return (
    <>
      {galleryImages.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      <Header locale={locale} dictionary={dictionary} />
      <main
        className="sp case-visual-page visual balanced"
        data-case={caseItem.slug}
        style={caseThemeStyle(theme)}
      >
        <ArticleGalleryProvider images={galleryImages}>
          <div className="wrap container">
            <section className="hero">
              <nav className="breadcrumbs sp-eyebrow" aria-label="Breadcrumb">
                <Link href={casesPath}>{copy.title}</Link>
                <span aria-hidden="true"> / </span>
                <span>{caseItem.title}</span>
              </nav>

              <div className="hero-heading">
                <h1>
                  {caseItem.title}
                  <span className="orange" aria-hidden="true">↗</span>
                </h1>
                <div className="hero-intro">
                  {leadLines.map((line, index) => (
                    <span key={index} className="hero-intro-line">
                      {line}
                    </span>
                  ))}
                  <div className="hero-intro-foot">
                    <span className="hero-intro-line">{lastTaglineLine}</span>
                    <span className="hero-tag">{defaults.serviceTag}</span>
                  </div>
                </div>
              </div>

              {hero ? (
                <CaseVisualHero hero={hero} title={caseItem.title} caption={heroCaption} />
              ) : null}
            </section>

            <CaseVisualBody
              blocks={blocks}
              imageOffset={hero ? 1 : 0}
              caseTitle={caseItem.title}
              caseSlug={caseItem.slug}
              openCaseLabel={defaults.openCase}
              openCaseHref={getLiveCaseUrl(caseItem.slug, locale)}
            />

            <div className="case-visual-back">
              <Link href={casesPath} className="sp-btn">
                <span>{copy.backToCases}</span>
                <span className="sp-btn-icon" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {relatedCases.length > 0 ? (
            <section className="more-cases">
              <div className="wrap container">
                <div className="more-heading">
                  <span className="kicker">{copy.moreCasesKicker}</span>
                  <h2>{copy.moreCasesTitle}</h2>
                </div>
                <div className="case-navigation">
                  {relatedCases.slice(0, 2).map((related, index) => (
                    <Link
                      key={related.slug}
                      href={getCaseDetailPath(locale, related.slug)}
                      className="project-card"
                    >
                      <div className="project-direction">
                        <span>
                          {index === 0 ? copy.prevCase : copy.nextCase}
                        </span>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      {related.cover ? (
                        <div className="project-image">
                          <MediaImage
                            src={related.cover}
                            alt={related.title}
                            sizes="(max-width: 700px) 100vw, 50vw"
                            unoptimized={isAnimatedCaseMedia(related.cover)}
                          />
                        </div>
                      ) : null}
                      <div className="project-title">
                        <h3>{related.title}</h3>
                        <span aria-hidden="true">↗</span>
                      </div>
                      {related.cardDescription || related.description ? (
                        <p>{related.cardDescription ?? related.description}</p>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="sp-cta">
            <div className="wrap">
              <CtaPanel dictionary={dictionary} />
            </div>
          </section>
        </ArticleGalleryProvider>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
