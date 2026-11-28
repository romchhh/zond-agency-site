import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaVersionProvider } from "@/components/MediaVersionProvider";
import { readMediaVersion } from "@/cms/store";
import { isAdminAuthenticated } from "@/lib/admin/http";
import "../globals.css";
import "./admin.css";

export const metadata: Metadata = {
  title: "ZOND Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAdminAuthenticated();
  return (
    <html lang="uk">
      <head>
        <link
          rel="preload"
          href="/fonts/NAMU-Pro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <MediaVersionProvider version={readMediaVersion()}>
          <AdminShell authed={authed}>{children}</AdminShell>
        </MediaVersionProvider>
      </body>
    </html>
  );
}
