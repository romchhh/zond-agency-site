import type { Locale } from "@/i18n/config";

export type CreatePageType = "blog" | "case" | "page" | "service";

export type CreatePageInput = {
  type: CreatePageType;
  slug: string;
  titles: Partial<Record<Locale, string>>;
};

export type CreatePageResult = {
  docId: string;
  previewPath: string;
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function normalizeSlug(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function assertValidSlug(slug: string): void {
  if (!slug || !SLUG_RE.test(slug)) {
    throw new Error("invalid_slug");
  }
}
