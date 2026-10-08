/** Must match `images.deviceSizes` in next.config.js (unknown widths are rejected). */
const CASE_IMAGE_WIDTHS = [640, 828, 1080, 1200, 1920] as const;

const CASE_IMAGE_DEFAULT_WIDTH = 1080;
const LIGHTBOX_IMAGE_WIDTH = 1920;
const CASE_IMAGE_QUALITY = 75;

export function isCaseGif(src: string): boolean {
  return /\.gif($|\?)/i.test(src);
}

/** GIF/SVG skip the optimizer (SVG is already vector; GIF must stay animated). */
export function isCasePassthroughMedia(src: string): boolean {
  return /\.(gif|svg)($|\?)/i.test(src);
}

/** Next.js image optimizer URL for static assets under /public. */
export function optimizedCaseImageUrl(
  src: string,
  width: number,
  quality = CASE_IMAGE_QUALITY,
): string {
  if (isCasePassthroughMedia(src)) return src;
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality),
  });
  return `/_next/image?${params.toString()}`;
}

export function caseImageSrcSet(src: string, quality = CASE_IMAGE_QUALITY): string | undefined {
  if (isCasePassthroughMedia(src)) return undefined;
  return CASE_IMAGE_WIDTHS
    .map((w) => `${optimizedCaseImageUrl(src, w, quality)} ${w}w`)
    .join(", ");
}

export function caseImageDefaultSrc(src: string, quality = CASE_IMAGE_QUALITY): string {
  if (isCasePassthroughMedia(src)) return src;
  return optimizedCaseImageUrl(src, CASE_IMAGE_DEFAULT_WIDTH, quality);
}

/** Full-bleed lightbox URL — same quality as page cache so warm hits reuse. */
export function lightboxCaseImageUrl(src: string): string {
  if (isCasePassthroughMedia(src)) return src;
  return optimizedCaseImageUrl(src, LIGHTBOX_IMAGE_WIDTH, CASE_IMAGE_QUALITY);
}

export function caseImageSizes(wide: boolean): string {
  if (wide) {
    return "(max-width: 768px) 100vw, min(1200px, 92vw)";
  }
  return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, min(600px, 46vw)";
}
