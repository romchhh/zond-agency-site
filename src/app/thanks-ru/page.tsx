import ThanksPage, { createThanksMetadata } from "@/components/ThanksPage";

export const metadata = createThanksMetadata("ru");

export default function ThanksRuPage() {
  return <ThanksPage locale="ru" />;
}
