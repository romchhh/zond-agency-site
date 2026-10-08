import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import { renderLocalizedNotFound } from "@/lib/render-localized-not-found";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [];
}

/** Unknown URLs resolve here so we can render a localized 404 from route params. */
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = await getDictionary(raw);
  return createNotFoundMetadata(raw, dictionary);
}

/**
 * Render 404 UI from `params.locale`.
 * `notFound()` cannot be localized under `force-static`: not-found has no params
 * and a single default-locale shell is prerendered for every language.
 */
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return renderLocalizedNotFound(raw);
}
