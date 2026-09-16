import NotFoundView from "@/components/NotFoundView";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveRequestLocale } from "@/i18n/resolve-locale";

export default async function NotFound() {
  const locale = await resolveRequestLocale();
  const dictionary = await getDictionary(locale);

  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
