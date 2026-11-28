/** Drop a previous cache-bust token so a new one can be attached. */
export function stripMediaVersion(src: string): string {
  const hashIndex = src.indexOf("#");
  const hash = hashIndex >= 0 ? src.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? src.slice(0, hashIndex) : src;
  const queryIndex = withoutHash.indexOf("?");
  if (queryIndex < 0) return src;
  const path = withoutHash.slice(0, queryIndex);
  const rest = withoutHash
    .slice(queryIndex + 1)
    .split("&")
    .filter((part) => part && !part.startsWith("v="));
  return `${path}${rest.length ? `?${rest.join("&")}` : ""}${hash}`;
}

/** New token for this exact file so the browser does not reuse the old response. */
export function cacheBustMediaUrl(src: string): string {
  if (!src || src.startsWith("data:")) return src;
  const base = stripMediaVersion(src);
  return `${base}${base.includes("?") ? "&" : "?"}v=${Date.now()}`;
}

/**
 * Append ?v=… so browsers fetch replaced media.
 * A token already stored on the URL (set when that file was replaced) wins.
 */
export function withMediaVersion(src: string, version = "0"): string {
  if (!src || src.startsWith("data:") || /[?&]v=/.test(src)) return src;
  if (src.startsWith("http") || !version || version === "0") {
    return src;
  }
  const editable =
    src.includes("/assets/photography/") ||
    src.includes("/assets/cases/") ||
    src.includes("/assets/services/") ||
    src.includes("/services/") ||
    src.includes("/uploads/");
  if (!editable) return src;
  if (/[?&]v=/.test(src)) return src;
  return `${src}${src.includes("?") ? "&" : "?"}v=${version}`;
}
