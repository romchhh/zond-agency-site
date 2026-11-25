"use client";

import { useMemo, useRef, useState } from "react";
import type { MediaItem } from "@/lib/admin/media";

type Props = {
  initialItems: MediaItem[];
};

export function AdminMediaLibrary({ initialItems }: Props) {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("all");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragDepth = useRef(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (source !== "all" && item.source !== source) return false;
      if (!q) return true;
      return item.url.toLowerCase().includes(q) || item.name.toLowerCase().includes(q);
    });
  }, [items, query, source]);

  async function onUpload(fileList: FileList | File[] | null) {
    const files = fileList ? Array.from(fileList) : [];
    if (!files.length) return;

    const accepted = files.filter((file) =>
      /^(image\/|video\/(mp4|webm))/i.test(file.type) ||
      /\.(png|jpe?g|webp|gif|svg|mp4|webm|avif)$/i.test(file.name),
    );
    if (!accepted.length) {
      setMessage("Підтримуються зображення та mp4/webm");
      return;
    }

    setUploading(true);
    setMessage(null);
    setProgress({ done: 0, total: accepted.length });

    let okCount = 0;
    try {
      for (let i = 0; i < accepted.length; i++) {
        const file = accepted[i]!;
        const form = new FormData();
        form.set("file", file);
        const response = await fetch("/api/admin/media", { method: "POST", body: form });
        const json = (await response.json()) as { ok?: boolean; item?: MediaItem };
        if (response.ok && json.item) {
          setItems((prev) => [json.item!, ...prev]);
          okCount += 1;
        }
        setProgress({ done: i + 1, total: accepted.length });
      }
      setMessage(
        okCount === accepted.length
          ? `Завантажено: ${okCount}`
          : `Завантажено ${okCount} з ${accepted.length}`,
      );
    } catch {
      setMessage("Помилка завантаження");
    } finally {
      setUploading(false);
      setProgress(null);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setMessage(`Скопійовано: ${url}`);
    } catch {
      setMessage(url);
    }
  }

  function onDragEnter(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current += 1;
    setDragOver(true);
  }

  function onDragLeave(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setDragOver(false);
  }

  function onDragOver(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  }

  function onDrop(event: React.DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current = 0;
    setDragOver(false);
    if (uploading) return;
    void onUpload(event.dataTransfer.files);
  }

  return (
    <>
      <div className="admin-filters">
        <input
          className="admin-input"
          placeholder="Пошук файлів…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="admin-select" value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="all">Усі</option>
          <option value="upload">Uploads</option>
          <option value="assets">Assets</option>
        </select>
        <button
          type="button"
          className="admin-btn admin-btn-secondary"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          {uploading ? "Завантаження…" : "Обрати файли"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/mp4,video/webm"
          multiple
          hidden
          disabled={uploading}
          onChange={(e) => onUpload(e.target.files)}
        />
      </div>

      <div
        className={`admin-dropzone${dragOver ? " is-active" : ""}${uploading ? " is-busy" : ""}`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={() => !uploading && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!uploading) inputRef.current?.click();
          }
        }}
      >
        <strong>{dragOver ? "Відпустіть файли тут" : "Перетягніть медіа сюди"}</strong>
        <span>PNG, JPG, WEBP, SVG, GIF, MP4, WEBM · можна кілька файлів</span>
        {progress ? (
          <span className="admin-dropzone-progress">
            {progress.done}/{progress.total}
          </span>
        ) : null}
      </div>

      {message ? <p className="admin-toast">{message}</p> : null}

      <div className="admin-media-meta">
        Показано {filtered.length} з {items.length}
      </div>

      <div className="admin-media-grid">
        {filtered.map((item) => {
          const isVideo = /\.(mp4|webm)$/i.test(item.url);
          return (
            <figure key={item.url} className="admin-media-item">
              {isVideo ? (
                <video src={item.url} muted playsInline preload="metadata" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.url} alt={item.name} loading="lazy" />
              )}
              <figcaption>
                <div className="admin-media-item-actions">
                  <button
                    type="button"
                    className="admin-btn admin-btn-secondary"
                    onClick={() => copyUrl(item.url)}
                  >
                    Copy URL
                  </button>
                  <span className={`admin-badge${item.source === "assets" ? " admin-badge-meta" : ""}`}>
                    {item.source}
                  </span>
                </div>
                <div className="admin-media-url" title={item.url}>
                  {item.url}
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="admin-muted">Нічого не знайдено за поточними фільтрами.</p>
      ) : null}
    </>
  );
}
