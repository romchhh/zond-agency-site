/** Must match `images.deviceSizes` in next.config.js (1440/1600 are rejected by the optimizer). */
const CASE_IMAGE_WIDTHS = [640, 828, 1080, 1200, 1920] as const;

const CASE_IMAGE_DEFAULT_WIDTH = 1200;

export function isCaseGif(src: string): boolean {
  return /\.gif($|\?)/i.test(src);
}

/** Next.js image optimizer URL for static assets under /public. */
export function optimizedCaseImageUrl(
  src: string,
  width: number,
  quality = 75,
): string {
  if (isCaseGif(src)) return src;
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality),
  });
  return `/_next/image?${params.toString()}`;
}

export function caseImageSrcSet(src: string, quality = 75): string | undefined {
  if (isCaseGif(src)) return undefined;
  return CASE_IMAGE_WIDTHS
    .map((w) => `${optimizedCaseImageUrl(src, w, quality)} ${w}w`)
    .join(", ");
}

export function caseImageDefaultSrc(src: string, quality = 75): string {
  if (isCaseGif(src)) return src;
  return optimizedCaseImageUrl(src, CASE_IMAGE_DEFAULT_WIDTH, quality);
}

export function caseImageSizes(wide: boolean): string {
  if (wide) {
    return "(max-width: 768px) 100vw, min(1200px, 92vw)";
  }
  return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, min(600px, 46vw)";
}
