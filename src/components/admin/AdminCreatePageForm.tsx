"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { normalizeSlug, type CreatePageType } from "@/cms/page-types";

const TYPES: Array<{ id: CreatePageType; label: string; hint: string }> = [
  { id: "page", label: "Кастомна сторінка", hint: "Публічний URL /pages/slug" },
  { id: "blog", label: "Стаття блогу", hint: "Публічний URL /blog/slug" },
  { id: "case", label: "Кейс", hint: "Публічний URL /projects/slug" },
];

export function AdminCreatePageForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<CreatePageType>("page");
  const [titleUk, setTitleUk] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const previewSlug = useMemo(() => {
    if (slugTouched) return normalizeSlug(slug);
    return normalizeSlug(titleUk || titleEn || titleRu || slug);
  }, [slug, slugTouched, titleUk, titleEn, titleRu]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create",
          type,
          slug: previewSlug,
          titles: { uk: titleUk, en: titleEn, ru: titleRu },
        }),
      });
      const json = (await response.json()) as {
        ok?: boolean;
        error?: string;
        docId?: string;
      };
      if (!response.ok || !json.ok || !json.docId) {
        setError(
          json.error === "already_exists"
            ? "Такий slug уже існує"
            : json.error === "invalid_slug"
              ? "Некоректний slug (лише a-z, 0-9, дефіс)"
              : "Не вдалося створити",
        );
        return;
      }
      setOpen(false);
      router.push(`/admin/content/${json.docId}`);
      router.refresh();
    } catch {
      setError("Помилка мережі");
    } finally {
      setSaving(false);
    }
  }

  if (!open) {
    return (
      <button type="button" className="admin-btn" onClick={() => setOpen(true)}>
        + Нова сторінка
      </button>
    );
  }

  return (
    <div className="admin-create-panel">
      <div className="admin-create-head">
        <h2>Нова сторінка</h2>
        <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setOpen(false)}>
          Закрити
        </button>
      </div>

      <form className="admin-create-form" onSubmit={submit}>
        <div className="admin-create-types">
          {TYPES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`admin-tab${type === item.id ? " is-active" : ""}`}
              onClick={() => setType(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="admin-muted">{TYPES.find((item) => item.id === type)?.hint}</p>

        <label className="admin-field">
          <span>Назва UK *</span>
          <input
            className="admin-input"
            value={titleUk}
            required
            onChange={(e) => setTitleUk(e.target.value)}
          />
        </label>
        <div className="admin-create-grid">
          <label className="admin-field">
            <span>Назва EN</span>
            <input
              className="admin-input"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
            />
          </label>
          <label className="admin-field">
            <span>Назва RU</span>
            <input
              className="admin-input"
              value={titleRu}
              onChange={(e) => setTitleRu(e.target.value)}
            />
          </label>
        </div>
        <label className="admin-field">
          <span>Slug</span>
          <input
            className="admin-input"
            value={slugTouched ? slug : previewSlug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            placeholder="my-new-page"
          />
        </label>

        {error ? <p className="admin-error">{error}</p> : null}

        <div className="admin-actions" style={{ marginTop: 0 }}>
          <button type="submit" className="admin-btn" disabled={saving || !titleUk.trim()}>
            {saving ? "Створення…" : "Створити і редагувати"}
          </button>
        </div>
      </form>
    </div>
  );
}
