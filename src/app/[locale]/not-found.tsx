import NotFoundView from "@/components/NotFoundView";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveRequestLocale } from "@/i18n/resolve-locale";

export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const locale = await resolveRequestLocale(params);
  const dictionary = await getDictionary(locale);

  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
