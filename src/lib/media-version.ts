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
 * Append the current CMS media version so a replaced file is fetched again.
 * An older ?v= already stored on the URL is replaced, not kept.
 */
export function withMediaVersion(src: string, version = "0"): string {
  if (!src || src.startsWith("data:")) return src;
  const base = stripMediaVersion(src);
  if (!version || version === "0") return base;
  if (base.startsWith("http://") || base.startsWith("https://")) return base;
  const editable =
    base.includes("/assets/photography/") ||
    base.includes("/assets/cases/") ||
    base.includes("/assets/services/") ||
    base.includes("/services/") ||
    base.includes("/uploads/") ||
    base.startsWith("media/") ||
    base.startsWith("/media/");
  if (!editable) return base;
  return `${base}${base.includes("?") ? "&" : "?"}v=${encodeURIComponent(version)}`;
}
