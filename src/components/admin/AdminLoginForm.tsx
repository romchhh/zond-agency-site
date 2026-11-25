"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSending(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(
          data.error === "admin_not_configured"
            ? "Адмінку ще не налаштовано (env)."
            : "Невірний логін або пароль.",
        );
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Помилка мережі. Спробуйте ще раз.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {error ? <p className="admin-error">{error}</p> : null}
      <div className="admin-field">
        <label htmlFor="admin-username">Логін</label>
        <input
          id="admin-username"
          className="admin-input"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="admin-field">
        <label htmlFor="admin-password">Пароль</label>
        <input
          id="admin-password"
          className="admin-input"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="admin-btn" disabled={sending}>
        {sending ? "Вхід…" : "Увійти"}
      </button>
    </form>
  );
}
