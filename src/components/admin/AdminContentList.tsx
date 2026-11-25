"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AdminCreatePageForm } from "@/components/admin/AdminCreatePageForm";
import type { CmsDocMeta } from "@/cms/registry";

type DocRow = CmsDocMeta & { seeded: boolean };

type Props = {
  docs: DocRow[];
};

export function AdminContentList({ docs }: Props) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const groups = useMemo(() => {
    const set = new Set(docs.map((doc) => doc.group));
    return Array.from(set);
  }, [docs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return docs.filter((doc) => {
      if (group !== "all" && doc.group !== group) return false;
      if (!q) return true;
      return (
        doc.id.toLowerCase().includes(q) ||
        doc.title.toLowerCase().includes(q) ||
        doc.group.toLowerCase().includes(q)
      );
    });
  }, [docs, query, group]);

  const grouped = useMemo(() => {
    const map: Record<string, DocRow[]> = {};
    for (const doc of filtered) {
      (map[doc.group] ??= []).push(doc);
    }
    return map;
  }, [filtered]);

  const seededCount = docs.filter((doc) => doc.seeded).length;

  async function seed() {
    setSeeding(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seed" }),
      });
      const json = (await response.json()) as { ok?: boolean; count?: number };
      if (!response.ok || !json.ok) {
        setMessage("Seed не вдався");
        return;
      }
      setMessage(`Засіяно документів: ${json.count ?? 0}`);
      window.location.reload();
    } catch {
      setMessage("Помилка мережі під час seed");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <>
      <div className="admin-filters">
        <input
          className="admin-input"
          placeholder="Пошук сторінок / блоків…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AdminCreatePageForm />
        <button type="button" className="admin-btn admin-btn-secondary" disabled={seeding} onClick={seed}>
          {seeding ? "Seed…" : "Засіяти з коду"}
        </button>
      </div>

      <div className="admin-chips">
        <button
          type="button"
          className={`admin-tab${group === "all" ? " is-active" : ""}`}
          onClick={() => setGroup("all")}
        >
          Усі ({docs.length})
        </button>
        {groups.map((name) => (
          <button
            key={name}
            type="button"
            className={`admin-tab${group === name ? " is-active" : ""}`}
            onClick={() => setGroup(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="admin-muted">
        Seeded: {seededCount}/{docs.length} · знайдено {filtered.length}
      </p>
      {message ? <p className="admin-toast">{message}</p> : null}

      {Object.entries(grouped).map(([groupName, items]) => (
        <div key={groupName} className="admin-panel">
          <h2>
            {groupName} <span className="admin-muted">({items.length})</span>
          </h2>
          <div className="admin-list">
            {items.map((doc) => (
              <Link key={doc.id} href={`/admin/content/${doc.id}`}>
                <span>
                  {doc.title}
                  {!doc.seeded ? (
                    <span className="admin-badge" style={{ marginLeft: 8 }}>
                      no seed
                    </span>
                  ) : (
                    <span className="admin-badge" style={{ marginLeft: 8, background: "rgba(16,185,129,.12)", color: "#047857" }}>
                      ok
                    </span>
                  )}
                </span>
                <span className="admin-muted">{doc.id}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 ? <p className="admin-muted">Нічого не знайдено.</p> : null}
    </>
  );
}
