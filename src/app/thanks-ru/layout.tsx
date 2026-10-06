import DocumentShell from "@/components/DocumentShell";
import type { ReactNode } from "react";

export default function ThanksRuLayout({ children }: { children: ReactNode }) {
  return <DocumentShell locale="ru">{children}</DocumentShell>;
}
