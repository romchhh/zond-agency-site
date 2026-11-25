"use client";

import { useMemo, useState } from "react";
import type { AdminLeadRow } from "@/lib/admin/leads";

type Props = {
  initialLeads: AdminLeadRow[];
};

function formatWhen(iso: string): string {
  try {
    return new Intl.DateTimeFormat("uk-UA", {
      timeZone: "Europe/Kyiv",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function AdminLeadsTable({ initialLeads }: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [source, setSource] = useState("all");
  const [query, setQuery] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (source !== "all" && lead.source !== source) return false;
      if (!q) return true;
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.contact.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.utm_source.toLowerCase().includes(q) ||
        lead.page_url.toLowerCase().includes(q)
      );
    });
  }, [leads, source, query]);

  async function markRead(id: string) {
    setBusyId(id);
    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, source: "site", read: true }),
      });
      if (!response.ok) return;
      setLeads((prev) =>
        prev.map((lead) =>
          lead.id === id && lead.source === "site"
            ? { ...lead, read: true, status: "read" }
            : lead,
        ),
      );
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <div className="admin-filters">
        <select
          className="admin-select"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="all">Усі джерела</option>
          <option value="site">Сайт</option>
          <option value="meta">Meta</option>
        </select>
        <input
          className="admin-input"
          placeholder="Пошук…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="admin-panel">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Джерело</th>
                <th>Імʼя</th>
                <th>Контакт</th>
                <th>Email</th>
                <th>UTM</th>
                <th>Сторінка</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={`${lead.source}-${lead.id}`}>
                  <td>{formatWhen(lead.createdAt)}</td>
                  <td>
                    <span
                      className={`admin-badge${lead.source === "meta" ? " admin-badge-meta" : ""}`}
                    >
                      {lead.source}
                    </span>
                  </td>
                  <td>{lead.name}</td>
                  <td>{lead.contact}</td>
                  <td>{lead.email}</td>
                  <td>{lead.utm_source}</td>
                  <td style={{ maxWidth: 220, wordBreak: "break-all" }}>{lead.page_url}</td>
                  <td>
                    {lead.source === "site" && !lead.read ? (
                      <button
                        type="button"
                        className="admin-btn admin-btn-secondary"
                        disabled={busyId === lead.id}
                        onClick={() => markRead(lead.id)}
                      >
                        Прочитано
                      </button>
                    ) : (
                      <span className="admin-muted">{lead.status}</span>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8}>Заявок не знайдено</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
