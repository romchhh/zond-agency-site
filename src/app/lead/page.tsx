import LeadFunnel from "@/components/LeadFunnel";
import LeadPageShell from "@/components/LeadPageShell";
import { createPathMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...createPathMetadata("uk", "/lead", {
    title: "Заявка",
    description:
      "Залиште заявку ZOND: розробка бренду, ребрендинг, дизайн пакування, графіка або консультація з маркетингу.",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadPage() {
  return (
    <LeadPageShell>
      <LeadFunnel />
    </LeadPageShell>
  );
}
