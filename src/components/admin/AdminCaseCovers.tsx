"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CaseCoverRow } from "@/lib/admin/case-covers";
import type { MediaItem } from "@/lib/admin/media";
type Props = {
  initialItems: CaseCoverRow[];
};

function isVideo(src: string) {
  return /\.(mp4|webm)($|\?|#)/i.test(src);
}

function Preview({ src, label }: { src: string; label: string }) {
  return (
    <div className="admin-cover-preview" aria-label={label}>
      {src ? (
        isVideo(src) ? (
          <video src={src} autoPlay muted loop playsInline preload="auto" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="" />
        )
      ) : (
        <span className="admin-muted">Немає файлу</span>
      )}
    </div>
  );
}

export function AdminCaseCovers({ initialItems }: Props) {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const filtered = items.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return item.slug.includes(q) || item.title.toLowerCase().includes(q);
  });

  async function save(slug: string, patch: { cover?: string; listCover?: string }) {
    const nextPatch = {
      ...patch,
      ...(patch.cover !== undefined ? { cover: patch.cover } : {}),
      ...(patch.listCover !== undefined ? { listCover: patch.listCover } : {}),
    };
    setBusyKey(`${slug}:${"listCover" in patch ? "listCover" : "cover"}`);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/covers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...nextPatch }),
      });
      const json = (await response.json()) as { ok?: boolean; item?: CaseCoverRow };
      if (!response.ok || !json.ok || !json.item) {
        setMessage("Не вдалося зберегти");
        return;
      }
      setItems((prev) => prev.map((row) => (row.slug === slug ? json.item! : row)));
      setMessage(`Оновлено: ${slug}`);
    } catch {
      setMessage("Помилка мережі");
    } finally {
      setBusyKey(null);
    }
  }

  async function uploadAndSet(
    slug: string,
    field: "cover" | "listCover",
    file: File | null | undefined,
  ) {
    if (!file) return;
    setBusyKey(`${slug}:${field}`);
    setMessage(null);
    try {
      const form = new FormData();
      form.set("file", file);
      const upload = await fetch("/api/admin/media", { method: "POST", body: form });
      const uploaded = (await upload.json()) as { ok?: boolean; item?: MediaItem };
      if (!upload.ok || !uploaded.item?.url) {
        setMessage("Upload не вдався");
        return;
      }
      await save(slug, { [field]: uploaded.item.url });
    } catch {
      setMessage("Помилка upload");
      setBusyKey(null);
    }
  }

  function onDrop(
    event: React.DragEvent,
    slug: string,
    field: "cover" | "listCover",
  ) {
    event.preventDefault();
    setDragKey(null);
    const file = event.dataTransfer.files?.[0];
    void uploadAndSet(slug, field, file);
  }

  return (
    <>
      <div className="admin-panel" style={{ marginBottom: 16 }}>
        <p style={{ margin: 0 }}>
          На <strong>картках кейсів</strong> (головна, /projects) показується{" "}
          <code>listCover</code>. Якщо його немає — береться <code>cover</code>.
          Поле <code>cover</code> також йде як poster для відео і як обкладинка сторінки кейсу.
        </p>
      </div>

      <div className="admin-filters">
        <input
          className="admin-input"
          placeholder="Пошук кейсу…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {message ? <p className="admin-toast">{message}</p> : null}

      <div className="admin-cover-list">
        {filtered.map((item) => (
          <article key={item.slug} className="admin-cover-card">
            <div className="admin-cover-card-head">
              <div>
                <h2>{item.title}</h2>
                <p className="admin-muted">{item.slug}</p>
              </div>
              <Link className="admin-btn admin-btn-secondary" href={`/admin/content/cases/body/${item.slug}`}>
                Редагувати кейс
              </Link>
            </div>

            <div className="admin-cover-grid">
              <section className="admin-cover-field">
                <h3>Картка (listCover)</h3>
                <Preview src={item.listCover || item.cover} label="Картка" />
                <div
                  className={`admin-cover-drop${dragKey === `${item.slug}:listCover` ? " is-active" : ""}`}
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setDragKey(`${item.slug}:listCover`);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDragLeave={() => setDragKey(null)}
                  onDrop={(e) => onDrop(e, item.slug, "listCover")}
                >
                  Перетягніть mp4/jpg сюди або
                  <button
                    type="button"
                    className="admin-btn admin-btn-secondary"
                    disabled={busyKey === `${item.slug}:listCover`}
                    onClick={() => fileRefs.current[`${item.slug}:listCover`]?.click()}
                  >
                    Upload
                  </button>
                </div>
                <input
                  ref={(el) => {
                    fileRefs.current[`${item.slug}:listCover`] = el;
                  }}
                  type="file"
                  accept="image/*,video/mp4,video/webm"
                  hidden
                  onChange={(e) => {
                    void uploadAndSet(item.slug, "listCover", e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
                <input
                  className="admin-input"
                  value={item.listCover}
                  placeholder="/assets/cases/.../cover.mp4"
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((row) =>
                        row.slug === item.slug
                          ? {
                              ...row,
                              listCover: e.target.value,
                              cardSrc: e.target.value || row.cover,
                            }
                          : row,
                      ),
                    )
                  }
                />
                <button
                  type="button"
                  className="admin-btn"
                  disabled={busyKey === `${item.slug}:listCover`}
                  onClick={() => save(item.slug, { listCover: item.listCover })}
                >
                  Зберегти картку
                </button>
              </section>

              <section className="admin-cover-field">
                <h3>Сторінка / poster (cover)</h3>
                <Preview src={item.cover} label="Cover" />
                <div
                  className={`admin-cover-drop${dragKey === `${item.slug}:cover` ? " is-active" : ""}`}
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setDragKey(`${item.slug}:cover`);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDragLeave={() => setDragKey(null)}
                  onDrop={(e) => onDrop(e, item.slug, "cover")}
                >
                  Перетягніть файл сюди або
                  <button
                    type="button"
                    className="admin-btn admin-btn-secondary"
                    disabled={busyKey === `${item.slug}:cover`}
                    onClick={() => fileRefs.current[`${item.slug}:cover`]?.click()}
                  >
                    Upload
                  </button>
                </div>
                <input
                  ref={(el) => {
                    fileRefs.current[`${item.slug}:cover`] = el;
                  }}
                  type="file"
                  accept="image/*,video/mp4,video/webm"
                  hidden
                  onChange={(e) => {
                    void uploadAndSet(item.slug, "cover", e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
                <input
                  className="admin-input"
                  value={item.cover}
                  placeholder="/assets/cases/.../cover.jpg"
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((row) =>
                        row.slug === item.slug
                          ? {
                              ...row,
                              cover: e.target.value,
                              cardSrc: row.listCover || e.target.value,
                            }
                          : row,
                      ),
                    )
                  }
                />
                <button
                  type="button"
                  className="admin-btn"
                  disabled={busyKey === `${item.slug}:cover`}
                  onClick={() => save(item.slug, { cover: item.cover })}
                >
                  Зберегти cover
                </button>
              </section>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
