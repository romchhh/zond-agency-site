import ConsultationProvider from "@/components/ConsultationProvider";
import DocumentShell from "@/components/DocumentShell";
import NotFoundView from "@/components/NotFoundView";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import { resolveNotFoundLocale } from "@/lib/not-found-locale";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveNotFoundLocale();
  const dictionary = await getDictionary(locale);
  return createNotFoundMetadata(locale, dictionary);
}

/** Root fallback when no `[locale]` layout is active. */
export default async function NotFound() {
  const locale = await resolveNotFoundLocale();
  const dictionary = await getDictionary(locale);

  return (
    <DocumentShell locale={locale}>
      <ConsultationProvider locale={locale} dictionary={dictionary}>
        <NotFoundView locale={locale} dictionary={dictionary} />
      </ConsultationProvider>
    </DocumentShell>
  );
}
