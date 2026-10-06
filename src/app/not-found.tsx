import ConsultationProvider from "@/components/ConsultationProvider";
import DocumentShell from "@/components/DocumentShell";
import NotFoundView from "@/components/NotFoundView";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createNotFoundMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale);
  return createNotFoundMetadata(defaultLocale, dictionary);
}

export default async function NotFound() {
  const dictionary = await getDictionary(defaultLocale);

  return (
    <DocumentShell locale={defaultLocale}>
      <ConsultationProvider locale={defaultLocale} dictionary={dictionary}>
        <NotFoundView locale={defaultLocale} dictionary={dictionary} />
      </ConsultationProvider>
    </DocumentShell>
  );
}
