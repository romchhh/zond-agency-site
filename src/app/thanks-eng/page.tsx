import ThanksPage, { createThanksMetadata } from "@/components/ThanksPage";

export const metadata = createThanksMetadata("en");

export default function ThanksEngPage() {
  return <ThanksPage locale="en" />;
}
