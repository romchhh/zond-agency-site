"use client";

import { useArticleGallery } from "@/components/ArticleGallery";
import type { CaseVisualBlock, CaseVisualDeliverable, CaseVisualGalleryLayout } from "@/i18n/cases/types";
import {
  caseImageDefaultSrc,
  caseImageSizes,
  caseImageSrcSet,
  isCaseGif,
} from "@/lib/case-image";

type CaseVisualBodyProps = {
  blocks: CaseVisualBlock[];
  imageOffset: number;
  caseTitle: string;
  caseSlug: string;
  openCaseLabel: string;
  openCaseHref: string;
};

function splitTitle(title: string): string[] {
  return title.split("\n").filter(Boolean);
}

const COUNTRY_FLAG_CODES: Record<string, string> = {
  україна: "UA",
  украина: "UA",
  ukraine: "UA",
  швеція: "SE",
  швеция: "SE",
  sweden: "SE",
  азербайджан: "AZ",
  azerbaijan: "AZ",
  індонезія: "ID",
  индонезия: "ID",
  indonesia: "ID",
  "велика британія": "GB",
  великобритания: "GB",
  "united kingdom": "GB",
  грузія: "GE",
  грузия: "GE",
  georgia: "GE",
};

function resolveCountryCode(value: string, countryCode?: string): string {
  if (countryCode) return countryCode;
  return COUNTRY_FLAG_CODES[value.toLowerCase()] ?? "UA";
}

function CountryFlag({ code }: { code: string }) {
  switch (code) {
    case "SE":
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор Швеції">
          <path fill="#006AA7" d="M0 0h40v25H0z" />
          <path fill="#FECC02" d="M12 0h5v25h-5zM0 10h40v5H0z" />
        </svg>
      );
    case "AZ":
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор Азербайджану">
          <path fill="#3F9C35" d="M0 0h40v8.33H0z" />
          <path fill="#ED2939" d="M0 8.33h40v8.34H0z" />
          <path fill="#00B9E4" d="M0 16.67h40v8.33H0z" />
          <circle cx="17" cy="12.5" r="4.5" fill="#fff" />
          <circle cx="18.2" cy="12.5" r="3.6" fill="#ED2939" />
          <path fill="#fff" d="M24.5 12.5l1.4.4-1.1.9.4-1.4-.9-1.1 1.4.4-.4-1.4.9 1.1-.4 1.4 1.1-.9z" />
        </svg>
      );
    case "GB":
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор Великої Британії">
          <path fill="#012169" d="M0 0h40v25H0z" />
          <path fill="#fff" d="M0 0l40 25M40 0L0 25" stroke="#fff" strokeWidth="5" />
          <path fill="none" d="M0 0l40 25M40 0L0 25" stroke="#C8102E" strokeWidth="3" />
          <path fill="#fff" d="M16 0h8v25h-8zM0 9h40v7H0z" />
          <path fill="#C8102E" d="M18 0h4v25h-4zM0 10.5h40v4H0z" />
        </svg>
      );
    case "GE":
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор Грузії">
          <path fill="#fff" d="M0 0h40v25H0z" />
          <path fill="#FF0000" d="M0 0h40v5.5H0zM0 19.5h40v5.5H0z" />
          <rect x="16" width="8" height="25" fill="#FF0000" />
          <rect y="9" width="40" height="7" fill="#FF0000" />
        </svg>
      );
    case "ID":
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор Індонезії">
          <path fill="#CE1126" d="M0 0h40v12.5H0z" />
          <path fill="#fff" d="M0 12.5h40v12.5H0z" />
        </svg>
      );
    case "UA":
    default:
      return (
        <svg className="country-flag" viewBox="0 0 40 25" role="img" aria-label="Прапор України">
          <path fill="#005BBB" d="M0 0h40v12.5H0z" />
          <path fill="#FFD500" d="M0 12.5h40v12.5H0z" />
        </svg>
      );
  }
}

function CaseVisualMedia({
  src,
  caption,
  wide = false,
  imageIndex,
}: {
  src: string;
  caption?: string;
  wide?: boolean;
  imageIndex: number;
}) {
  const gallery = useArticleGallery();

  return (
    <figure className={`media${wide ? " wide" : ""}`}>
      <button
        type="button"
        className="image-button"
        aria-label={caption ? `Збільшити: ${caption}` : "Збільшити зображення"}
        onClick={() => gallery.openAt(imageIndex)}
      >
        {/* Native img keeps case layout; srcset routes through Next image optimizer. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={isCaseGif(src) ? src : caseImageDefaultSrc(src)}
          srcSet={caseImageSrcSet(src)}
          sizes={caseImageSizes(wide)}
          alt={caption ?? ""}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
        />
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function caseMonogram(title: string): string {
  const words = title.replace(/[«»"“”]/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

function ActionTiles({ items }: { items: CaseVisualDeliverable[] }) {
  return (
    <div className="action-tiles">
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`}>
          <span className="tile-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>
            {splitTitle(item.title).map((line, lineIndex, lines) => (
              <span key={lineIndex}>
                {line}
                {lineIndex < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h3>
          {item.description ? <p className="tile-copy">{item.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

function CaseVisualGallery({
  layout,
  images,
  imageOffset,
}: {
  layout: CaseVisualGalleryLayout;
  images: Array<{ src: string; caption?: string }>;
  imageOffset: number;
}) {
  if (layout === "wide" && images.length === 1) {
    return (
      <CaseVisualMedia
        src={images[0].src}
        caption={images[0].caption}
        wide
        imageIndex={imageOffset}
      />
    );
  }

  const layoutClass = layout === "triple" ? "triple" : layout === "pair" ? "pair" : "";

  return (
    <div className={`gallery${layoutClass ? ` ${layoutClass}` : ""}`}>
      {images.map((image, index) => (
        <CaseVisualMedia
          key={`${image.src}-${index}`}
          src={image.src}
          caption={image.caption}
          wide={layout === "wide"}
          imageIndex={imageOffset + index}
        />
      ))}
    </div>
  );
}

function NicheIcon({ value }: { value: string }) {
  const normalized = value.toLowerCase();
  if (normalized.includes("autotech") || normalized.includes("авто")) {
    return (
      <svg className="niche-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="14" cy="14" r="9" />
        <path d="m21 21 8 8" strokeLinecap="round" />
      </svg>
    );
  }

  if (
    normalized.includes("туризм") ||
    normalized.includes("tourism") ||
    normalized.includes("місто") ||
    normalized.includes("город") ||
    normalized.includes("city")
  ) {
    return (
      <svg className="niche-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 28V10l11-6v24M16 13l11 4v11M2 28h28M9 12v3m0 4v3m12-2v3" />
      </svg>
    );
  }

  if (normalized.includes("нерухом") || normalized.includes("real estate") || normalized.includes("недвиж")) {
    return (
      <svg className="niche-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 28V10l11-6v24M16 13l11 4v11M2 28h28M9 12v3m0 4v3m12-2v3" />
      </svg>
    );
  }

  return (
    <svg className="niche-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 9l11-6 11 6v14l-11 6-11-6V9zM5 9l11 6 11-6M16 15v14" />
    </svg>
  );
}

function OpenCaseButton({ label, href }: { label: string; href: string }) {
  return (
    <a className="open-case" href={href} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 5c3-3 7-3 7-3s0 4-3 7l-7 7-5-5 8-6Z" />
        <circle cx="16" cy="7" r="1.5" />
        <path d="m7 10-4 1-1 5 5-1m7-2-1 7-5 2 1-5M6 18l-3 3m2-5-3 2" />
      </svg>
      <span>{label}</span>
      <span className="out-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

function renderBlock(
  block: CaseVisualBlock,
  imageOffset: number,
  context: { caseTitle: string; caseSlug: string; openCaseLabel: string; openCaseHref: string },
) {
  switch (block.type) {
    case "section":
      return (
        <section
          key={`${block.index}-${block.kicker}`}
          className={`visual-section${block.variant === "book" ? " book-section" : ""}`}
        >
          {block.variant === "book" ? (
            <div className="book-heading">
              <div>
                <span className="kicker">{block.kicker}</span>
                <h2>
                  {splitTitle(block.title).map((line, index, lines) => (
                    <span key={index}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          ) : (
            <div className="big-heading">
              <span className="section-index">{block.index}</span>
              <div>
                <span className="kicker">{block.kicker}</span>
                <h2>
                  {splitTitle(block.title).map((line, index, lines) => (
                    <span key={index}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
          )}

          {block.paragraphs.length ? (
            <div className="case-copy">
              {block.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {block.deliverables?.length ? <ActionTiles items={block.deliverables} /> : null}

          {block.ideaStrip ? (
            <div className="idea-strip">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 28V4h18v24" /></svg>
              <p>
                {splitTitle(block.ideaStrip).map((line, index, lines) => (
                  <span key={index}>
                    {line}
                    {index < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
              <span className="idea-arrow" aria-hidden="true">↗</span>
            </div>
          ) : null}

          {block.rules?.length ? (
            <>
              <div className="rule-grid">
                {block.rules.map((rule) => (
                  <div key={rule}>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
              {block.conceptNote ? <p className="concept-note">{block.conceptNote}</p> : null}
            </>
          ) : null}
        </section>
      );

    case "facts":
      return (
        <div key={`facts-${block.items.map((item) => item.label).join("-")}`} className="facts-row">
          <dl className="project-facts">
            {block.items.map((item) => (
              <div key={item.label} className={item.accent ? "country-fact" : undefined}>
                <dt>{item.label}</dt>
                <dd>
                  {item.accent ? (
                    <CountryFlag code={resolveCountryCode(item.value, item.countryCode)} />
                  ) : item.label.toLowerCase().includes("ніш") || item.label.toLowerCase().includes("ниш") || item.label.toLowerCase() === "niche" ? (
                    <NicheIcon value={item.value} />
                  ) : null}
                  <span>{item.value}</span>
                </dd>
              </div>
            ))}
          </dl>
          <OpenCaseButton label={context.openCaseLabel} href={context.openCaseHref} />
        </div>
      );

    case "gallery":
      return (
        <CaseVisualGallery
          key={`gallery-${imageOffset}-${block.images[0]?.src ?? "empty"}`}
          layout={block.layout}
          images={block.images}
          imageOffset={imageOffset}
        />
      );

    case "deliverables":
      return <ActionTiles key={`deliverables-${imageOffset}`} items={block.items} />;

    case "manifesto":
      return (
        <div key={`manifesto-${block.label}`} className="manifesto">
          <span>{block.label}</span>
          <p>
            {splitTitle(block.text).map((line, index, lines) => (
              <span key={index}>
                {index === lines.length - 1 && lines.length > 1 ? <em>{line}</em> : line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
          {block.footer ? <span className="manifesto-bottom">{block.footer}</span> : null}
          {context.caseSlug === "home-hub" ? <div className="portal" aria-hidden="true" /> : null}
        </div>
      );

    case "palette":
      return (
        <div key="palette" className="palette" aria-label="Кольори бренду">
          {block.colors.map((color) => (
            <div key={color.hex} style={{ background: color.bg, color: color.fg }}>
              <span>{color.name}</span>
              <span>{color.hex}</span>
            </div>
          ))}
        </div>
      );

    case "banner":
      return (
        <section key={`banner-${block.kicker}`} className="visual-section">
          <div className="touchpoint-banner">
            <span className="kicker">{block.kicker}</span>
            <h2>
              {splitTitle(block.title).map((line, index, lines) => (
                <span key={index}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
            {block.tags?.length ? (
              <div className="touchpoint-tags">
                {block.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      );

    case "quote":
      return (
        <section key="quote" className="visual-section review-visual">
          <div className="big-heading">
            <span className="section-index">{block.index ?? "05"}</span>
            <div>
              <span className="kicker">{block.kicker ?? "ВІДГУК"}</span>
              <h2>{block.heading ?? "Відгук клієнта."}</h2>
            </div>
          </div>
          <figure className="quote-card">
            <div className="quote-intro">
              <span className="quote-mark" aria-hidden="true">“</span>
              {block.badge ? <span className="quote-badge">{block.badge}</span> : null}
            </div>
            <blockquote>
              {block.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </blockquote>
            <figcaption>
              <span className="review-monogram" aria-hidden="true">{caseMonogram(context.caseTitle)}</span>
              <div>
                <strong>{block.author}</strong>
                <span>{block.role}</span>
              </div>
            </figcaption>
            {block.note ? <p className="review-note">{block.note}</p> : null}
          </figure>
        </section>
      );

    default:
      return null;
  }
}

export default function CaseVisualBody({
  blocks,
  imageOffset,
  caseTitle,
  caseSlug,
  openCaseLabel,
  openCaseHref,
}: CaseVisualBodyProps) {
  let galleryOffset = imageOffset;

  return (
    <>
      {blocks.map((block) => {
        const node = renderBlock(block, galleryOffset, {
          caseTitle,
          caseSlug,
          openCaseLabel,
          openCaseHref,
        });
        if (block.type === "gallery") {
          galleryOffset += block.images.length;
        }
        return node;
      })}
    </>
  );
}
