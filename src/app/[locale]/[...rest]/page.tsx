import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [];
}

/** Allow unknown paths so we can call notFound() inside the locale segment. */
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

export default function CatchAllPage() {
  notFound();
}
