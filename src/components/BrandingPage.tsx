import ConsultationCta from "@/components/ConsultationCta";
import CtaPanel from "@/components/CtaPanel";
import ServiceCompareSection from "@/components/ServiceCompareSection";
import ServiceEditorialSection from "@/components/ServiceEditorialSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IncludeGridCtaFill from "@/components/IncludeGridCtaFill";
import MediaImage from "@/components/MediaImage";
import ProjectCard from "@/components/ProjectCard";
import StatsRow from "@/components/StatsRow";
import { brandingPage } from "@/i18n/branding";
import { getBrandingSeo } from "@/i18n/branding-seo";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { imageSizes } from "@/lib/media";

type BrandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
};

export default function BrandingPage({
  locale,
  dictionary,
  projects,
}: BrandingPageProps) {
  const copy = brandingPage[locale];
  const seo = getBrandingSeo(locale);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp">
        <div className="sp-stage">
        <section className="sp-hero">
          <div className="wrap wrap--flush">
            <div className="sp-hero-grid">
              <div className="sp-hero-copy">
                <p className="sp-eyebrow">{copy.eyebrow}</p>
                <h1 className="sp-h1">
                  {copy.title.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <span className="sp-h1-accent">{copy.titleAccent}</span>
                </h1>
                <div className="sp-hero-text">
                  <p className="sp-lead">{copy.lead}</p>
                  <p className="sp-sub">{copy.sub}</p>
                </div>
                <ConsultationCta className="sp-btn">
                  <span>{copy.cta}</span>
                  <span className="sp-btn-icon" aria-hidden="true">↗</span>
                </ConsultationCta>
              </div>
              <figure className="sp-hero-photo">
                <MediaImage
                  src="/branding/hero.png"
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
        <section className="sp-metrics" aria-labelledby="sp-metrics-title">
          <div className="wrap">
            <h2 id="sp-metrics-title" className="sp-metrics-title">
              {copy.metricsTitle}
            </h2>
            <StatsRow stats={dictionary.mission.stats} />
          </div>
        </section>

        <section className="sp-section" id="branding-includes">
          <div className="wrap">
            <div className="sp-section-head">
              <h2 className="sp-h2">{copy.includesTitle}</h2>
            </div>
            <div className="services-grid services-grid--cols-4">
              {copy.items.map((item) => (
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
              <IncludeGridCtaFill count={copy.items.length} label={copy.cta} />
            </div>
            <div className="sp-section-head sp-needs-head">
              <h2 className="sp-h2">{copy.needTitle}</h2>
            </div>
            <div className="sp-needs">
              {copy.needs.map((item) => (
                <article className="sp-need" key={item.index}>
                  <div className="sp-need-no">{item.index}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section" id="cases">
          <div className="wrap">
            <div className="sp-section-head">
              <h2 className="sp-h2">{copy.casesTitle}</h2>
            </div>
          </div>
          <div className="wrap wrap--flush">
            <div className="projects-grid">
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section" id="reviews">
          <div className="wrap">
            <div className="sp-section-head sp-reviews-head">
              <div>
                <h2 className="sp-h2">{copy.reviewsTitle}</h2>
              </div>
              <p className="sp-note">{copy.reviewsNote}</p>
            </div>
            <div className="sp-reviews">
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
          </div>
        </section>

        <section className="sp-section">
          <div className="wrap">
            <div className="sp-section-head sp-reviews-head">
              <div>
                <h2 className="sp-h2">{copy.productTitle}</h2>
              </div>
              <p className="sp-note">{copy.productNote}</p>
            </div>
            <div className="sp-products">
              {copy.products.map((item) => (
                <figure key={item.src}>
                  <div className="sp-product-img">
                    <MediaImage src={item.src} alt={item.alt} sizes="(max-width: 700px) 100vw, 33vw" />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section" id="process">
          <div className="wrap">
            <div className="sp-section-head">
              <h2 className="sp-h2">{copy.processTitle}</h2>
            </div>
            <div className="sp-process">
              {copy.process.map((step) => (
                <article className="sp-step" key={step.index}>
                  <div className="sp-step-num">{step.index}</div>
                  <h3>{step.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceCompareSection locale={locale} />

        <section className="sp-section sp-section--editorial">
          <div className="wrap">
            <ServiceEditorialSection seo={seo} />
          </div>
        </section>

        <section className="sp-section">
          <div className="wrap">
            <div className="sp-split sp-split--sticky">
              <div className="sp-split-aside">
                <h2 className="sp-h2">{copy.receiveTitle}</h2>
              </div>
              <div className="sp-receive">
                {copy.receive.map((item, index) => (
                  <div className="sp-receive-row" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
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
