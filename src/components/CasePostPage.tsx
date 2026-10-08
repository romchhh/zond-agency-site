import { ArticleGalleryProvider } from "@/components/ArticleGallery";
import CaseVisualBody from "@/components/CaseVisualBody";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CaseVisualHero from "@/components/CaseVisualHero";
import LoopedVideo from "@/components/LoopedVideo";
import MediaImage from "@/components/MediaImage";
import type { CaseItem } from "@/i18n/cases";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageJsonLd from "@/components/PageJsonLd";
import { getCaseDetailPath, getCaseIndexPath } from "@/i18n/routing";
import { resolvePageCopy } from "@/lib/json-ld";
import { getCaseClientUrl, getCaseServiceTag } from "@/i18n/cases/case-meta";
import { getCaseHeroCaption } from "@/i18n/cases/case-hero-captions";
import {
  buildCaseVisualBlocks,
  collectCaseVisualImages,
  getCaseVisualDefaults,
} from "@/lib/case-visual";
import { caseThemeStyle, resolveCaseTheme } from "@/lib/case-theme";
import {
  caseMediaSrc,
  ensureCaseBodyMedia,
  extractCaseHeroMedia,
  isAnimatedCaseMedia,
} from "@/lib/case-content";
import { caseImageDefaultSrc, isCaseGif } from "@/lib/case-image";
import Link from "next/link";

function isVideoCover(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm");
}

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
  const casePath = getCaseDetailPath(locale, caseItem.slug);
  const preparedBody = ensureCaseBodyMedia(caseItem.body, caseItem.media ?? [], {
    skipMissingAppend: Boolean(caseItem.blocks?.length),
  });
  const { hero, body } = extractCaseHeroMedia(preparedBody);
  const blocks = buildCaseVisualBlocks(caseItem, body, locale, hero?.src ?? null);
  const serviceTag =
    getCaseServiceTag(caseItem.slug, locale) ?? caseItem.serviceTag;
  const defaults = getCaseVisualDefaults(
    locale,
    caseItem.description,
    caseItem.tagline,
    serviceTag,
  );
  const clientUrl = getCaseClientUrl(caseItem.slug);
  const openCaseHref = clientUrl ?? "";
  const openCaseLabel = clientUrl
    ? clientUrl.includes("instagram.com")
      ? copy.openClientInstagram
      : copy.openClientSite
    : defaults.openCase;
  const heroCaption = getCaseHeroCaption(caseItem.slug, locale, caseItem.title);
  const galleryImages = collectCaseVisualImages(hero?.src ?? null, blocks);
  const theme = resolveCaseTheme(caseItem);
  const taglineLines = splitLines(defaults.tagline);
  const leadLines = taglineLines.length > 1 ? taglineLines.slice(0, -1) : [];
  const lastTaglineLine = taglineLines[taglineLines.length - 1] ?? defaults.tagline;

  const heroPreloadSrc =
    hero?.kind === "img" && !isCaseGif(hero.src)
      ? caseImageDefaultSrc(hero.src)
      : hero?.kind === "img"
        ? hero.src
        : null;

  const seo = resolvePageCopy(casePath, {
    title: `${caseItem.title} — ZOND`,
    description: caseItem.description,
  });

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname={casePath}
        name={seo.title}
        description={seo.description}
        breadcrumbs={[
          { name: copy.title, path: casesPath },
          { name: caseItem.title, path: casePath },
        ]}
      />
      {heroPreloadSrc ? (
        <link rel="preload" as="image" href={heroPreloadSrc} fetchPriority="high" />
      ) : null}
      <Header locale={locale} dictionary={dictionary} />
      <main
        className={`sp case-visual-page visual balanced${caseItem.slug === "packaging" ? " packaging" : ""}`}
        data-case={caseItem.slug}
        style={caseThemeStyle(theme)}
      >
        <ArticleGalleryProvider images={galleryImages}>
          <div className="wrap container">
            <section className="hero">
              <PageBreadcrumbs
                className="breadcrumbs post-breadcrumbs sp-eyebrow"
                items={[
                  { label: copy.title, href: casesPath },
                  { label: caseItem.title },
                ]}
              />

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
              openCaseLabel={openCaseLabel}
              openCaseHref={openCaseHref}
              showOpenCase={Boolean(clientUrl)}
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
                  {relatedCases.slice(0, 2).map((related, index) => {
                    const coverSrc = related.listCover ?? related.cover;
                    return (
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
                      {coverSrc ? (
                        <div className="project-image">
                          {isVideoCover(coverSrc) ? (
                            <LoopedVideo
                              className="project-img-video"
                              src={coverSrc}
                              ariaLabel={related.title}
                              poster={related.cover}
                            />
                          ) : (
                            <MediaImage
                              src={coverSrc}
                              alt={related.title}
                              sizes="(max-width: 700px) 100vw, 50vw"
                              unoptimized={isAnimatedCaseMedia(coverSrc)}
                            />
                          )}
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
                    );
                  })}
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
