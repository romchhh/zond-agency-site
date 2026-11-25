"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MediaItem } from "@/lib/admin/media";

type Props = {
  open: boolean;
  title?: string;
  onClose: () => void;
  onSelect: (url: string) => void;
};

export function AdminMediaPicker({ open, title = "Обрати медіа", onClose, onSelect }: Props) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("all");
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragDepth = useRef(0);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    void (async () => {
      try {
        const response = await fetch("/api/admin/media");
        const json = (await response.json()) as { ok?: boolean; items?: MediaItem[] };
        if (!cancelled) {
          if (response.ok && json.items) setItems(json.items);
          else setError("Не вдалося завантажити бібліотеку");
        }
      } catch {
        if (!cancelled) setError("Помилка мережі");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (source !== "all" && item.source !== source) return false;
      if (!q) return true;
      return item.url.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
    });
  }, [items, query, source]);

  async function uploadFiles(fileList: FileList | File[] | null) {
    const files = fileList ? Array.from(fileList) : [];
    if (!files.length) return;
    setUploading(true);
    setError(null);
    try {
      for (const file of files) {
        const form = new FormData();
        form.set("file", file);
        const response = await fetch("/api/admin/media", { method: "POST", body: form });
        const json = (await response.json()) as { ok?: boolean; item?: MediaItem };
        if (response.ok && json.item) {
          setItems((prev) => [json.item!, ...prev]);
          if (files.length === 1) {
            onSelect(json.item.url);
            onClose();
            return;
          }
        }
      }
    } catch {
      setError("Помилка upload");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  if (!open) return null;

  return (
    <div className="admin-picker-backdrop" role="presentation" onClick={onClose}>
      <div
        className="admin-picker"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-picker-head">
          <div>
            <h2>{title}</h2>
            <p className="admin-muted">Клік по файлу підставляє шлях у поле</p>
          </div>
          <button type="button" className="admin-icon-btn" onClick={onClose} aria-label="Закрити">
            ✕
          </button>
        </div>

        <div className="admin-filters">
          <input
            className="admin-input"
            placeholder="Пошук…"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          />
          <select className="admin-select" value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="all">Усі</option>
            <option value="upload">Uploads</option>
            <option value="assets">Assets</option>
          </select>
          <button
            type="button"
            className="admin-btn"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
          >
            {uploading ? "Upload…" : "Завантажити"}
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/mp4,video/webm"
            multiple
            hidden
            onChange={(e) => void uploadFiles(e.target.files)}
          />
        </div>

        <div
          className={`admin-dropzone admin-picker-drop${dragOver ? " is-active" : ""}${uploading ? " is-busy" : ""}`}
          onDragEnter={(e) => {
            e.preventDefault();
            dragDepth.current += 1;
            setDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            dragDepth.current = Math.max(0, dragDepth.current - 1);
            if (dragDepth.current === 0) setDragOver(false);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            dragDepth.current = 0;
            setDragOver(false);
            void uploadFiles(e.dataTransfer.files);
          }}
          onClick={() => !uploading && inputRef.current?.click()}
        >
          <strong>{dragOver ? "Відпустіть тут" : "Перетягніть новий файл"}</strong>
          <span>або оберіть з бібліотеки нижче</span>
        </div>

        {error ? <p className="admin-error">{error}</p> : null}
        {loading ? <p className="admin-muted">Завантаження бібліотеки…</p> : null}

        <div className="admin-picker-grid">
          {filtered.map((item) => {
            const isVideo = /\.(mp4|webm)$/i.test(item.url);
            return (
              <button
                key={item.url}
                type="button"
                className="admin-picker-item"
                title={item.url}
                onClick={() => {
                  onSelect(item.url);
                  onClose();
                }}
              >
                {isVideo ? (
                  <video src={item.url} muted playsInline preload="metadata" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.url} alt="" loading="lazy" />
                )}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {!loading && filtered.length === 0 ? (
          <p className="admin-muted">Нічого не знайдено.</p>
        ) : null}
      </div>
    </div>
  );
}
