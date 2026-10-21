import { media } from "@/lib/media";
import type { ReactNode } from "react";

type LeadPageShellProps = {
  children: ReactNode;
};

export default function LeadPageShell({ children }: LeadPageShellProps) {
  return (
    <main className="lead-page">
      <div className="wrap lead-page-inner">
        <div className="lead-page-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media.logo} alt="ZOND" />
        </div>
        {children}
      </div>
    </main>
  );
}
