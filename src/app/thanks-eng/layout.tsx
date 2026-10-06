import DocumentShell from "@/components/DocumentShell";
import type { ReactNode } from "react";

export default function ThanksEngLayout({ children }: { children: ReactNode }) {
  return <DocumentShell locale="en">{children}</DocumentShell>;
}
