const preloaded = new Set<string>();
const inflight = new Map<string, Promise<void>>();

/** Warm the browser HTTP cache for an image URL (deduped). */
export function preloadImage(src: string): Promise<void> {
  if (!src || typeof window === "undefined") return Promise.resolve();
  if (preloaded.has(src)) return Promise.resolve();

  const existing = inflight.get(src);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new window.Image();
    img.decoding = "async";
    const done = () => {
      preloaded.add(src);
      inflight.delete(src);
      resolve();
    };
    img.onload = done;
    img.onerror = done;
    img.src = src;
  });

  inflight.set(src, promise);
  return promise;
}

export function isImagePreloaded(src: string): boolean {
  return preloaded.has(src);
}

/** Prefetch current ± radius neighbors. */
export function preloadImageWindow(
  urls: string[],
  index: number,
  radius = 2,
): void {
  for (let i = index - radius; i <= index + radius; i += 1) {
    const url = urls[i];
    if (url) void preloadImage(url);
  }
}
