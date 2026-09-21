export type BlogHeroMedia = {
  kind: "img" | "vid";
  src: string;
};

const MEDIA_TAG_RE = /\[(IMG|VID):\s*(.+?)\]/g;

export function blogMediaSrc(path: string): string {
  if (path.startsWith("/") || path.startsWith("http")) return path;
  return `/assets/blog/${path.replace(/^media\//, "")}`;
}

function normalizeAssetPath(path: string): string {
  return path.replace(/^\/assets\/blog\//, "").replace(/^media\//, "");
}

function cleanBlogBody(body: string): string {
  return body.replace(/\n{3,}/g, "\n\n").trim();
}

function removeCoverFromBody(body: string, cover: string): string {
  if (!cover) return cleanBlogBody(body);

  const coverFile = normalizeAssetPath(cover);
  const tag = new RegExp(
    `\\[(?:IMG|VID):\\s*(?:media/)?${coverFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\s*`,
    "gi",
  );

  return cleanBlogBody(body.replace(tag, ""));
}

export function extractBlogHeroMedia(cover: string, body: string): {
  hero: BlogHeroMedia | null;
  body: string;
} {
  if (!cover) {
    const match = [...body.matchAll(MEDIA_TAG_RE)][0];
    if (!match) return { hero: null, body: cleanBlogBody(body) };

    const kind = match[1] === "VID" ? "vid" : "img";
    const path = match[2];
    const tag = new RegExp(
      `\\[(?:IMG|VID):\\s*${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\s*`,
      "i",
    );

    return {
      hero: { kind, src: blogMediaSrc(path) },
      body: cleanBlogBody(body.replace(tag, "")),
    };
  }

  return {
    hero: { kind: "img", src: cover },
    body: removeCoverFromBody(body, cover),
  };
}

export function isAnimatedBlogMedia(src: string): boolean {
  return src.endsWith(".gif");
}
