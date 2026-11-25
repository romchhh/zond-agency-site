"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const NAV: Array<{ href: string; label: string; exact?: boolean }> = [
  { href: "/admin", label: "Статистика", exact: true },
  { href: "/admin/leads", label: "Заявки" },
  { href: "/admin/content", label: "Контент" },
  { href: "/admin/covers", label: "Обкладинки" },
  { href: "/admin/media", label: "Медіа" },
];

type AdminShellProps = {
  authed: boolean;
  children: ReactNode;
};

export function AdminShell({ authed, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  if (!authed || isLogin) {
    return <div className="admin-shell">{children}</div>;
  }

  return (
    <div className="admin-shell">
      <header className="admin-top">
        <div className="admin-top-inner">
          <div className="admin-brand">
            ZOND <span>Admin</span>
          </div>
          <nav className="admin-nav" aria-label="Admin">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "is-active" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button type="button" className="admin-logout" onClick={logout} aria-label="Вийти">
            Вийти
          </button>
        </div>
      </header>
      <main className="admin-main">{children}</main>
    </div>
  );
}
