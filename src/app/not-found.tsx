import { headers } from "next/headers";
import NotFoundView from "@/components/NotFoundView";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const locale =
    localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  const dictionary = await getDictionary(locale);

  return <NotFoundView locale={locale} dictionary={dictionary} />;
}
