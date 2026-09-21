export type CaseHeroMedia = {
  kind: "img" | "vid";
  path: string;
  src: string;
};

const MEDIA_TAG_RE = /\[(IMG|VID):\s*(.+?)\]/g;
const COVER_RE = /01_cover/i;

export function caseMediaSrc(path: string): string {
  if (path.startsWith("/") || path.startsWith("http")) return path;
  return `/assets/cases/${path.replace(/^media\//, "")}`;
}

function isCoverMedia(path: string): boolean {
  return COVER_RE.test(path);
}

function isDetailHeroMedia(path: string): boolean {
  if (isCoverMedia(path)) return false;
  const filename = path.split("/").pop() ?? "";
  return /^02[_\-.]/i.test(filename);
}

function cleanCaseBody(body: string): string {
  return body
    .replace(/^(?:Uaru\s*\n)+/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function removeMediaTag(body: string, path: string): string {
  const tag = new RegExp(`\\[(?:IMG|VID):\\s*${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]\\s*`, "i");
  return cleanCaseBody(body.replace(tag, ""));
}

export function extractCaseHeroMedia(body: string): {
  hero: CaseHeroMedia | null;
  body: string;
} {
  const matches = [...body.matchAll(MEDIA_TAG_RE)];
  const heroMatch =
    matches.find((match) => isDetailHeroMedia(match[2])) ??
    matches.find((match) => !isCoverMedia(match[2]));

  if (!heroMatch) {
    return { hero: null, body: cleanCaseBody(body) };
  }

  const path = heroMatch[2];
  const hero: CaseHeroMedia = {
    kind: heroMatch[1] === "VID" ? "vid" : "img",
    path,
    src: caseMediaSrc(path),
  };

  return {
    hero,
    body: removeMediaTag(body, path),
  };
}

export function isAnimatedCaseMedia(src: string): boolean {
  return src.endsWith(".gif");
}

export function ensureCaseBodyMedia(body: string, media: string[]): string {
  if (!media.length) return body;

  const inBody = new Set(
    [...body.matchAll(MEDIA_TAG_RE)].map((match) => match[2]),
  );

  const missing = media.filter((path) => {
    if (isCoverMedia(path)) return false;
    return !inBody.has(path);
  });

  if (!missing.length) return body;

  const tags = missing.map((path) => `[IMG: ${path}]`).join("\n\n");
  return `${body}\n\n${tags}`.trim();
}
