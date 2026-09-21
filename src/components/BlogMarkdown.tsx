import { ArticleGalleryGrid } from "@/components/ArticleGallery";
import {
  type ArticleBodyPart,
  type ArticleSection,
  isDeliverablesBlock,
  normalizeArticleContent,
  parseArticleSections,
  renderDeliverables,
} from "@/lib/article-blocks";
import { blogMediaSrc } from "@/lib/blog-content";
import type { ReactNode } from "react";

type BlogMarkdownProps = {
  content: string;
};

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`${match.index}-b`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*")) {
      nodes.push(<em key={`${match.index}-i`}>{token.slice(1, -1)}</em>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <a key={`${match.index}-a`} href={linkMatch[2]} target="_blank" rel="noreferrer">
            {linkMatch[1]}
          </a>,
        );
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderVideo(path: string, index: number) {
  const src = blogMediaSrc(path);
  return (
    <figure key={index} className="case-media case-media-video">
      <video src={src} controls playsInline preload="metadata" />
    </figure>
  );
}

function renderBlock(block: string, index: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const text = headingMatch[2];
    if (level <= 2) {
      return <h2 key={index} className="sp-h2 case-inline-heading">{renderInline(text)}</h2>;
    }
    return <h3 key={index} className="case-subheading">{renderInline(text)}</h3>;
  }

  const vidMatch = trimmed.match(/^\[VID:\s*(.+?)\]$/);
  if (vidMatch) return renderVideo(vidMatch[1], index);

  const embedMatch = trimmed.match(/^\[EMBED:\s*(.+?)\]$/);
  if (embedMatch) {
    const src = blogMediaSrc(embedMatch[1]);
    return (
      <figure key={index} className="case-media case-media-embed">
        <a href={src} target="_blank" rel="noreferrer">{src}</a>
      </figure>
    );
  }

  if (/^(- |\d+\. )/m.test(trimmed)) {
    const items = trimmed.split("\n").filter(Boolean);
    const ordered = /^\d+\./.test(items[0] ?? "");
    const ListTag = ordered ? "ol" : "ul";
    return (
      <ListTag key={index}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderInline(item.replace(/^(- |\d+\.\s*)/, ""))}</li>
        ))}
      </ListTag>
    );
  }

  if (trimmed.includes("\n") && !trimmed.includes("\n\n")) {
    if (isDeliverablesBlock(trimmed)) {
      return renderDeliverables(trimmed, index, renderInline);
    }

    return (
      <div key={index} className="case-paragraphs">
        {trimmed.split("\n").map((line, lineIndex) => (
          <p key={lineIndex}>{renderInline(line)}</p>
        ))}
      </div>
    );
  }

  return <p key={index}>{renderInline(trimmed)}</p>;
}

function parseBodyParts(body: string): ArticleBodyPart[] {
  const blocks = normalizeArticleContent(body).split(/\n{2,}/);
  const parts: ArticleBodyPart[] = [];
  let gallery: string[] = [];
  let textNodes: ReactNode[] = [];

  const flushGallery = () => {
    if (!gallery.length) return;
    parts.push({ type: "gallery", images: gallery });
    gallery = [];
  };

  const flushText = () => {
    if (!textNodes.length) return;
    parts.push({ type: "text", nodes: textNodes });
    textNodes = [];
  };

  for (const block of blocks) {
    const trimmed = block.trim();
    const imgMatch = trimmed.match(/^\[IMG:\s*(.+?)\]$/);
    if (imgMatch) {
      flushText();
      gallery.push(blogMediaSrc(imgMatch[1]));
      continue;
    }

    if (/^\[VID:/.test(trimmed)) {
      flushGallery();
      const node = renderBlock(block, textNodes.length);
      if (node) textNodes.push(node);
      continue;
    }

    flushGallery();
    const node = renderBlock(block, textNodes.length);
    if (node) textNodes.push(node);
  }

  flushGallery();
  flushText();
  return parts;
}

function renderGalleryBand(images: string[], sectionKey: string, startIndex: number) {
  if (!images.length) return null;

  return (
    <div key={`${sectionKey}-gallery`} className="case-media-band">
      <div className="wrap">
        <ArticleGalleryGrid images={images} startIndex={startIndex} />
      </div>
    </div>
  );
}

function renderSection(section: ArticleSection, index: number, imageOffset: number) {
  const parts = parseBodyParts(section.body);
  const sectionKey = `section-${index}`;
  const textParts = parts.filter((part): part is Extract<ArticleBodyPart, { type: "text" }> => part.type === "text");
  const galleryImages = parts
    .filter((part): part is Extract<ArticleBodyPart, { type: "gallery" }> => part.type === "gallery")
    .flatMap((part) => part.images);

  if (!section.title) {
    return (
      <div key={sectionKey} className="case-article-section">
        {textParts.map((part, partIndex) => (
          <div key={`${sectionKey}-text-${partIndex}`} className="case-text-band">
            <div className="wrap">
              <div className="sp-body">{part.nodes}</div>
            </div>
          </div>
        ))}
        {renderGalleryBand(galleryImages, sectionKey, imageOffset)}
      </div>
    );
  }

  return (
    <div key={sectionKey} className="case-article-section">
      <div className="wrap">
        <div className="sp-split case-section-split">
          <div className="case-section-aside">
            <h2 className="sp-h2">{renderInline(section.title)}</h2>
          </div>
          <div className="case-section-body sp-body">
            {textParts.flatMap((part) => part.nodes)}
          </div>
        </div>
      </div>
      {renderGalleryBand(galleryImages, sectionKey, imageOffset)}
    </div>
  );
}

function countGalleryImages(section: ArticleSection): number {
  return parseBodyParts(section.body)
    .filter((part): part is Extract<ArticleBodyPart, { type: "gallery" }> => part.type === "gallery")
    .reduce((total, part) => total + part.images.length, 0);
}

export default function BlogMarkdown({ content }: BlogMarkdownProps) {
  const sections = parseArticleSections(content);
  let imageOffset = 0;

  return (
    <div className="case-article">
      {sections.map((section, index) => {
        const node = renderSection(section, index, imageOffset);
        imageOffset += countGalleryImages(section);
        return node;
      })}
    </div>
  );
}
