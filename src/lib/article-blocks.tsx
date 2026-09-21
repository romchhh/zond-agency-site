import type { ReactNode } from "react";

export type ArticleBodyPart =
  | { type: "text"; nodes: ReactNode[] }
  | { type: "gallery"; images: string[] };

const IMG_TAG_RE = /\[IMG:\s*(.+?)\]/g;

export function extractArticleImagePaths(content: string): string[] {
  return [...content.matchAll(IMG_TAG_RE)].map((match) => match[1]);
}

export type ArticleSection = {
  title: string | null;
  body: string;
};

export function normalizeArticleContent(content: string): string {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/# # # #/g, "####")
    .replace(/# # #/g, "###")
    .replace(/# #/g, "##")
    .replace(/\* \*/g, "**")
    .replace(/\n(#{1,4}\s)/g, "\n\n$1")
    .replace(/\n(\d+\.\s)/g, "\n\n$1")
    .replace(/\n(-\s)/g, "\n\n$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function parseArticleSections(content: string): ArticleSection[] {
  const normalized = normalizeArticleContent(content);
  const parts = normalized.split(/\n(?=#{1,3}\s)/);

  return parts
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return null;

      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+?)(?:\n|$)/);
      if (headingMatch) {
        const title = headingMatch[2].replace(/:+\s*$/, "").trim();
        const body = trimmed.slice(headingMatch[0].length).trim();
        return { title, body };
      }

      return { title: null, body: trimmed };
    })
    .filter((section): section is ArticleSection => section !== null);
}

export function isDeliverablesBlock(block: string): boolean {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return false;

  return lines.every((line) => {
    if (line.startsWith("#") || line.startsWith("[") || /^[-*]/.test(line)) {
      return false;
    }

    return line.length <= 72 && !line.endsWith(".");
  });
}

export function renderDeliverables(
  block: string,
  index: number,
  renderInline: (text: string) => ReactNode[],
) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <ul key={index} className="case-deliverables">
      {lines.map((line, lineIndex) => (
        <li key={lineIndex}>{renderInline(line)}</li>
      ))}
    </ul>
  );
}
