import ConsultationCta from "@/components/ConsultationCta";
import CtaPanel from "@/components/CtaPanel";
import ServiceCompareSection from "@/components/ServiceCompareSection";
import ServiceDeliverablesSection from "@/components/ServiceDeliverablesSection";
import ServiceEditorialSection from "@/components/ServiceEditorialSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IncludeGridCtaFill from "@/components/IncludeGridCtaFill";
import InlineConsultationForm from "@/components/InlineConsultationForm";
import MediaImage from "@/components/MediaImage";
import ProjectCard from "@/components/ProjectCard";
import StatsRow from "@/components/StatsRow";
import type { BrandingSeoContent } from "@/i18n/branding-seo";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import type { ServicePageContent } from "@/i18n/logo";
import { getServiceDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

type ServiceLandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
  copy: ServicePageContent;
  seo: BrandingSeoContent;
  heroImage: string;
  casesCount?: number;
};

type ServiceSectionProps = {
  copy: ServicePageContent;
  isPrototypeLayout: boolean;
};

function ServiceAudienceSection({ copy, isPrototypeLayout }: ServiceSectionProps) {
  return (
    <section
      className={`sp-section${isPrototypeLayout ? " sp-section--prototype" : ""}`}
      id={isPrototypeLayout ? "service-needs" : undefined}
    >
      <div className="wrap">
        <div className="sp-section-head">
          <h2 className="sp-h2">{copy.audienceTitle}</h2>
        </div>
        {isPrototypeLayout ? (
          <div className="need-grid">
            {copy.audienceItems.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="sp-needs">
            {copy.audienceItems.map((item) => (
              <article className="sp-need" key={item.index}>
                <div className="sp-need-no">{item.index}</div>
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceFeatureSection({ copy }: { copy: ServicePageContent }) {
  if (!copy.featureStrip) return null;

  return (
    <section className="sp-feature" aria-labelledby="service-feature-title">
      <div className="wrap sp-feature-grid">
        <div>
          <p className="sp-section-label sp-feature-eyebrow">{copy.featureStrip.eyebrow}</p>
          <h2 id="service-feature-title" className="sp-feature-title">
            {copy.featureStrip.titleLine}
            <br />
            <em>{copy.featureStrip.titleAccent}</em>
          </h2>
        </div>
        <p className="sp-feature-copy">{copy.featureStrip.body}</p>
      </div>
    </section>
  );
}

function ServiceIncludesSection({ copy, isPrototypeLayout }: ServiceSectionProps) {
  return (
    <section
      className={`sp-section${isPrototypeLayout ? " sp-section--prototype" : ""}`}
      id="service-includes"
    >
      <div className="wrap">
        {copy.includeCards?.length ? (
          <>
            <div
              className={
                isPrototypeLayout && copy.includesSubtitle
                  ? "sp-prototype-section-heading"
                  : "sp-section-head"
              }
            >
              <h2 className="sp-h2">{copy.includesTitle}</h2>
              {copy.includesSubtitle ? <p>{copy.includesSubtitle}</p> : null}
            </div>
            <div className="services-grid services-grid--cols-4">
              {copy.includeCards.map((item) => (
                <article className="service-card" key={item.index}>
                  <div className="service-visual">
                    <MediaImage
                      src={item.image}
                      alt={item.alt}
                      sizes={imageSizes.service}
                    />
                  </div>
                  <div className="service-index">{item.index}</div>
                  <div className="service-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
              <IncludeGridCtaFill count={copy.includeCards.length} label={copy.cta} />
            </div>
          </>
        ) : (
          <div className="sp-split sp-split--sticky">
            <div className="sp-split-aside">
              <h2 className="sp-h2">{copy.includesTitle}</h2>
            </div>
            <div className="sp-receive">
              {copy.includes.map((item, index) => (
                <div className="sp-receive-row" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceProductsSection({ copy, isPrototypeLayout }: ServiceSectionProps) {
  const galleryClass = isPrototypeLayout ? "sp-use-gallery" : "sp-products";

  return (
    <section className="sp-section" id="service-products">
      <div className="wrap">
        <div
          className={
            isPrototypeLayout
              ? "sp-prototype-section-heading"
              : "sp-section-head sp-reviews-head"
          }
        >
          <h2 className="sp-h2">{copy.productTitle}</h2>
          <p className={isPrototypeLayout ? undefined : "sp-note"}>{copy.productNote}</p>
        </div>
        <div className={galleryClass}>
          {copy.products.map((item) => (
            <figure key={`${item.src}-${item.caption}`}>
              <div className={isPrototypeLayout ? "sp-use-gallery-img" : "sp-product-img"}>
                <MediaImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceProcessSection({ copy, isPrototypeLayout }: ServiceSectionProps) {
  return (
    <section
      className={`sp-section${isPrototypeLayout ? " sp-section--prototype" : ""}`}
      id="process"
    >
      <div className="wrap">
        <div className="sp-section-head">
          <h2 className="sp-h2">{copy.processTitle}</h2>
        </div>
        {isPrototypeLayout ? (
          <div className="process-grid">
            {copy.process.map((step) => (
              <article key={step.index}>
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        ) : copy.process.every((step) => step.image) ? (
          <div className="services-grid services-grid--cols-4">
            {copy.process.map((step) => (
              <article className="service-card" key={step.index}>
                <div className="service-visual">
                  <MediaImage
                    src={step.image!}
                    alt={step.alt ?? step.title}
                    sizes={imageSizes.service}
                  />
                </div>
                <div className="service-index">{step.index}</div>
                <div className="service-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="sp-step-duration">{step.duration}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="sp-process sp-process--logo">
            {copy.process.map((step) => (
              <article className="sp-step" key={step.index}>
                <div className="sp-step-num">{step.index}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="sp-step-duration">{step.duration}</span>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceReviewsSection({ copy, isPrototypeLayout }: ServiceSectionProps) {
  return (
    <section
      className={`sp-section${isPrototypeLayout ? " sp-reviews-section--prototype" : ""}`}
      id="reviews"
    >
      <div className="wrap">
        {isPrototypeLayout ? (
          <>
            <div className="sp-prototype-section-heading">
              <h2 className="sp-h2">{copy.reviewsTitle}</h2>
              <p>{copy.reviewsNote}</p>
            </div>
            <div className="reviews-grid">
              {copy.reviews.map((review) => (
                <blockquote className="review" key={review.label}>
                  <span>{review.label}</span>
                  <p>{review.quote}</p>
                  <footer>
                    {review.name}
                    <small>{review.role}</small>
                  </footer>
                </blockquote>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="sp-section-head sp-reviews-head">
              <div>
                <h2 className="sp-h2">{copy.reviewsTitle}</h2>
              </div>
              <p className="sp-note">{copy.reviewsNote}</p>
            </div>
            <div className="sp-reviews sp-reviews--logo">
              {copy.reviews.map((review, index) => (
                <figure className="sp-review" key={review.label}>
                  <div>
                    <span className="sp-review-demo">{review.label}</span>
                    <blockquote>{review.quote}</blockquote>
                  </div>
                  <figcaption>
                    <span className="sp-review-avatar" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default function ServiceLandingPage({
  locale,
  dictionary,
  projects,
  copy,
  seo,
  heroImage,
  casesCount = 4,
}: ServiceLandingPageProps) {
  /** Service pages ported from zond-* HTML prototypes (naming, identity, positioning, communication). */
  const isPrototypeLayout = Boolean(copy.featureStrip);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className={isPrototypeLayout ? "sp sp--service-prototype" : "sp"}>
        <div className="sp-stage">
          <section className="sp-hero">
            <div className="wrap wrap--flush">
              <div className="sp-hero-grid">
                <div className="sp-hero-copy">
                  <p className="sp-eyebrow">{copy.eyebrow}</p>
                  <h1 className="sp-h1">
                    {copy.title}
                    <br />
                    <span className="sp-h1-accent">{copy.titleAccent}</span>
                  </h1>
                  <div className="sp-hero-text">
                    <p className="sp-lead">{copy.lead}</p>
                    {copy.sub ? <p className="sp-sub">{copy.sub}</p> : null}
                  </div>
                  <ConsultationCta className="sp-btn">
                    <span>{copy.cta}</span>
                    <span className="sp-btn-icon" aria-hidden="true">↗</span>
                  </ConsultationCta>
                </div>
                <figure className="sp-hero-photo">
                  <MediaImage
                    src={heroImage}
                    alt={copy.heroAlt}
                    sizes="(max-width: 1100px) 100vw, 50vw"
                    priority
                  />
                  <figcaption>{copy.heroCaption}</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <div className="sp-after">
            <section
              className={`sp-metrics sp-metrics--logo${isPrototypeLayout ? " sp-metrics--prototype" : ""}`}
              aria-labelledby="service-metrics-title"
            >
              <div className="wrap">
                <h2 id="service-metrics-title" className="sp-metrics-title">
                  {copy.metricsTitle}
                </h2>
                <StatsRow
                  stats={copy.stats}
                  variant={isPrototypeLayout ? "prototype" : "default"}
                />
              </div>
            </section>

            {isPrototypeLayout ? (
              <>
                <ServiceIncludesSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceAudienceSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceFeatureSection copy={copy} />
              </>
            ) : (
              <>
                <ServiceAudienceSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceFeatureSection copy={copy} />
                <ServiceIncludesSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
              </>
            )}

            <section className="sp-section" id="cases">
              <div className="wrap">
                <div
                  className={
                    isPrototypeLayout && copy.casesSubtitle
                      ? "sp-prototype-section-heading"
                      : "sp-section-head"
                  }
                >
                  <h2 className="sp-h2">{copy.casesTitle}</h2>
                  {copy.casesSubtitle ? <p>{copy.casesSubtitle}</p> : null}
                </div>
              </div>
              <div className="wrap wrap--flush">
                <div className="projects-grid">
                  {projects.slice(0, casesCount).map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            </section>

            {isPrototypeLayout ? (
              <>
                <ServiceReviewsSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceProductsSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceProcessSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
              </>
            ) : (
              <>
                <ServiceProductsSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
                <ServiceProcessSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
              </>
            )}

            {!copy.featureStrip ? (
              <section className="sp-section">
                <div className="wrap">
                  <div className="sp-section-head">
                    <h2 className="sp-h2">{copy.whyTitle}</h2>
                  </div>
                  <div className="sp-why">
                    {copy.whyItems.map((item) => (
                      <article className="sp-why-item" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ) : null}

            <ServiceCompareSection locale={locale} />

            {isPrototypeLayout ? <ServiceDeliverablesSection copy={copy} /> : null}

            {!isPrototypeLayout ? (
              <ServiceReviewsSection copy={copy} isPrototypeLayout={isPrototypeLayout} />
            ) : null}

            <section className="sp-section sp-form-section" id="service-form">
              <div className="wrap">
                <div className="sp-split sp-split--sticky">
                  <div className="sp-split-aside">
                    <h2 className="sp-h2">{copy.formTitle}</h2>
                    <p className="sp-form-lead">{copy.formDescription}</p>
                  </div>
                  <InlineConsultationForm dictionary={dictionary} />
                </div>
              </div>
            </section>

            <section className="sp-section">
              <div className="wrap">
                <div className="sp-split sp-split--sticky">
                  <div className="sp-split-aside">
                    <h2 className="sp-h2">{copy.faqTitle}</h2>
                  </div>
                  <div className="sp-faq">
                    {copy.faq.map((item, index) => (
                      <details key={item.question} open={index === 0}>
                        <summary>{item.question}</summary>
                        <div className="sp-answer">
                          {item.answer.split("\n").map((line) =>
                            line ? <p key={line}>{line}</p> : <br key={`${item.question}-br`} />,
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="sp-section">
              <div className="wrap">
                <div className="sp-section-head">
                  <h2 className="sp-h2">{copy.relatedTitle}</h2>
                </div>
                <div className="sp-related-links">
                  {copy.related.map((item) => (
                    <Link
                      key={item.slug}
                      href={getServiceDetailPath(locale, item.slug)}
                      className="sp-related-link"
                    >
                      <span>{item.title}</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section
              className={`sp-section sp-section--editorial${isPrototypeLayout ? " sp-section--prototype" : ""}`}
            >
              <div className="wrap">
                <ServiceEditorialSection seo={seo} />
              </div>
            </section>

            <section className="sp-cta">
              <div className="wrap">
                <CtaPanel dictionary={dictionary} />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
