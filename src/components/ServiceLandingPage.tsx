import ConsultationCta from "@/components/ConsultationCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InlineConsultationForm from "@/components/InlineConsultationForm";
import MediaImage from "@/components/MediaImage";
import ProjectCard from "@/components/ProjectCard";
import StatsRow from "@/components/StatsRow";
import type { BrandingSeoBlock, BrandingSeoContent } from "@/i18n/branding-seo";
import type { Locale } from "@/i18n/config";
import type { Dictionary, ProjectItem } from "@/i18n/dictionary";
import type { ServicePageContent } from "@/i18n/logo";
import { getServiceDetailPath } from "@/i18n/routing";
import { imageSizes } from "@/lib/media";
import Link from "next/link";

function renderSeoBlock(block: BrandingSeoBlock, index: number) {
  switch (block.kind) {
    case "p":
      return <p key={`p-${index}`}>{block.text}</p>;
    case "term":
      return (
        <p key={`term-${index}`} className="sp-seo-term">
          <strong>{block.label}</strong> {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={`ul-${index}`} className="sp-seo-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}

type ServiceLandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  projects: ProjectItem[];
  copy: ServicePageContent;
  seo: BrandingSeoContent;
  heroImage: string;
  casesCount?: number;
};

export default function ServiceLandingPage({
  locale,
  dictionary,
  projects,
  copy,
  seo,
  heroImage,
  casesCount = 4,
}: ServiceLandingPageProps) {
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
            <section className="sp-metrics sp-metrics--logo" aria-labelledby="service-metrics-title">
              <div className="wrap">
                <h2 id="service-metrics-title" className="sp-metrics-title">
                  {copy.metricsTitle}
                </h2>
                <StatsRow stats={copy.stats} />
              </div>
            </section>

            <section className="sp-section">
              <div className="wrap">
                <div className="sp-section-head">
                  <h2 className="sp-h2">{copy.audienceTitle}</h2>
                </div>
                <div className="sp-needs">
                  {copy.audienceItems.map((item) => (
                    <article className="sp-need" key={item.index}>
                      <div className="sp-need-no">{item.index}</div>
                      <h3>{item.title}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="sp-section" id="service-includes">
              <div className="wrap">
                {copy.includeCards?.length ? (
                  <>
                    <div className="sp-section-head">
                      <h2 className="sp-h2">{copy.includesTitle}</h2>
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

            <section className="sp-section" id="cases">
              <div className="wrap">
                <div className="sp-section-head">
                  <h2 className="sp-h2">{copy.casesTitle}</h2>
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

            <section className="sp-section" id="process">
              <div className="wrap">
                <div className="sp-section-head">
                  <h2 className="sp-h2">{copy.processTitle}</h2>
                </div>
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
              </div>
            </section>

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
                <div className="sp-section-head logo-compare-head">
                  <h3 className="logo-compare-title">{copy.compareTitle}</h3>
                </div>
                <div className="logo-compare-wrap">
                  <table className="logo-compare-table">
                    <thead>
                      <tr>
                        {copy.compareColumns.map((column) => (
                          <th key={column} scope="col">{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {copy.compareRows.map((row) => (
                        <tr key={row.criterion}>
                          <th scope="row">{row.criterion}</th>
                          <td>{row.zond}</td>
                          <td>{row.freelance}</td>
                          <td>{row.generator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
              </div>
            </section>

            <section className="sp-section sp-form-section" id="contact">
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
                <details className="sp-seo-spoiler">
                  <summary>{seo.spoilerLabel}</summary>
                  <div className="sp-seo-content sp-body">
                    {seo.sections.map((section) => (
                      <section key={section.title} className="sp-seo-section">
                        <h3>{section.title}</h3>
                        {section.blocks.map((block, index) => renderSeoBlock(block, index))}
                      </section>
                    ))}
                  </div>
                </details>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
