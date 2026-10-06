import DocumentShell from "@/components/DocumentShell";
import type { ReactNode } from "react";

export default function ThanksUaLayout({ children }: { children: ReactNode }) {
  return <DocumentShell locale="uk">{children}</DocumentShell>;
}
