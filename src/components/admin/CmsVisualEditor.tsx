"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AdminMediaPicker } from "@/components/admin/AdminMediaPicker";
import { cacheBustMediaUrl } from "@/lib/media-version";
import {
  applyCaptionToBlocks,
  captionsFromBlocks,
  mediaMatchKey,
  normalizeCaptionEntry,
  type LocalizedCaption,
  type MediaCaptionsStore,
} from "@/lib/admin/media-captions";

type Props = {
  value: unknown;
  localeMap?: boolean;
  /** CMS doc id, e.g. cases/catalog/uk — used for locale-aware captions. */
  docId?: string;
  onChange: (next: unknown) => void;
};

const LOCALES = ["uk", "en", "ru"] as const;
type LocaleCode = (typeof LOCALES)[number];

const CatalogLocaleContext = createContext<LocaleCode>("uk");

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

const FIELD_LABELS: Record<string, string> = {
  cover: "Cover (сторінка кейсу / poster для відео)",
  listCover: "List Cover (картка на головній і /projects)",
  cardDescription: "Короткий опис на картці",
  shared: "Shared (спільне для всіх мов)",
  media: "Галерея медіа",
  theme: "Тема / кольори",
  title: "Заголовок",
  description: "Опис",
  tagline: "Слоган",
  serviceTag: "Тег послуги",
  body: "Body",
  blocks: "Блоки",
  slug: "Slug",
};

function humanize(key: string): string {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function valueLooksLikeMediaPath(value: string): boolean {
  if (!value.trim()) return false;
  if (/^https?:\/\//i.test(value) || value.startsWith("/")) {
    return (
      /\.(png|jpe?g|webp|gif|svg|avif|mp4|webm)(\?|$)/i.test(value) ||
      /\/(assets|uploads|media)\//i.test(value)
    );
  }
  return /^(media\/|assets\/)/i.test(value) && /\.(png|jpe?g|webp|gif|svg|avif|mp4|webm)$/i.test(value);
}

function looksLikeMedia(key: string, value: string): boolean {
  const keySuggests =
    /^(src|image|img|cover|listCover|poster|icon|logo|photo|video|heroImage|ogImage)$/i.test(key);

  // Empty media-named fields stay media inputs so covers can be set.
  if (!value.trim()) return keySuggests;

  // Never treat plain text (service titles etc.) as media.
  if (valueLooksLikeMediaPath(value)) return true;

  // Key like "logo" only counts as media if value already looks like a path attempt.
  if (
    keySuggests &&
    (value.startsWith("/") ||
      value.startsWith("http") ||
      value.startsWith("media/") ||
      value.startsWith("assets/"))
  ) {
    return true;
  }

  return false;
}

function looksLikeMediaPath(value: string): boolean {
  return valueLooksLikeMediaPath(value);
}

function looksLikeColor(key: string, value: string): boolean {
  return (
    /color|accent|bg|fg|ink|hex/i.test(key) ||
    /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)
  );
}

function mediaSrc(value: string): string {
  if (!value) return "";
  if (value.startsWith("http") || value.startsWith("/")) return value;
  if (value.startsWith("media/")) return `/assets/cases/${value.replace(/^media\//, "")}`;
  if (value.startsWith("assets/")) return `/${value}`;
  return value;
}

function isVideoSrc(value: string) {
  return /\.(mp4|webm)$/i.test(value);
}

function cloneTemplate(sample: unknown): unknown {
  if (typeof sample === "string") return "";
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  if (Array.isArray(sample)) return [];
  if (isPlainObject(sample)) {
    const next: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(sample)) {
      next[key] = cloneTemplate(child);
    }
    return next;
  }
  return null;
}

function isCaseLike(value: unknown): value is Record<string, unknown> {
  return (
    isPlainObject(value) &&
    typeof value.slug === "string" &&
    ("cover" in value || "listCover" in value || "media" in value || "title" in value)
  );
}

function isMediaStringList(value: unknown[]): value is string[] {
  if (value.length === 0) return false;
  return value.every((item) => typeof item === "string" && (item === "" || looksLikeMediaPath(item)));
}

async function uploadMediaFile(file: File): Promise<string | null> {
  const form = new FormData();
  form.set("file", file);
  const response = await fetch("/api/admin/media", { method: "POST", body: form });
  const json = (await response.json()) as { ok?: boolean; item?: { url: string } };
  if (!response.ok || !json.item?.url) return null;
  return cacheBustMediaUrl(json.item.url);
}

function MediaPreview({ value }: { value: string }) {
  if (!value) {
    return <span className="admin-muted">Немає файлу</span>;
  }
  if (isVideoSrc(value)) {
    return <video src={mediaSrc(value)} muted playsInline preload="metadata" />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={mediaSrc(value)} alt="" />
  );
}

function MediaField({
  label,
  fieldKey,
  value,
  onChange,
}: {
  label: string;
  fieldKey: string;
  value: string;
  onChange: (next: string) => void;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [showPath, setShowPath] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function applyFile(file: File | null | undefined) {
    if (!file) return;
    setBusy(true);
    try {
      const url = await uploadMediaFile(file);
      if (url) onChange(url);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="admin-vis-field admin-vis-media-field">
      <span className="admin-vis-label">{label}</span>
      <div className="admin-vis-media">
        <div
          className={`admin-vis-media-preview${dragOver ? " is-drop" : ""}`}
          onDragEnter={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            void applyFile(e.dataTransfer.files?.[0]);
          }}
        >
          <MediaPreview value={value} />
          {dragOver ? <span className="admin-vis-media-drop-hint">Відпустіть файл</span> : null}
        </div>

        <div className="admin-vis-media-actions">
          <button
            type="button"
            className="admin-btn"
            disabled={busy}
            onClick={() => setPickerOpen(true)}
          >
            Бібліотека
          </button>
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            {busy ? "Upload…" : "Upload"}
          </button>
          {value ? (
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={() => onChange("")}
            >
              Очистити
            </button>
          ) : null}
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => setShowPath((v) => !v)}
          >
            {showPath ? "Сховати шлях" : "Шлях"}
          </button>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/mp4,video/webm"
          hidden
          onChange={(e) => void applyFile(e.target.files?.[0])}
        />

        {showPath ? (
          <input
            className="admin-input"
            value={value}
            placeholder="/assets/... або media/..."
            onChange={(e) => onChange(e.target.value)}
          />
        ) : value ? (
          <code className="admin-vis-media-path" title={value}>
            {value}
          </code>
        ) : null}
      </div>

      <AdminMediaPicker
        open={pickerOpen}
        title={`Медіа · ${label || fieldKey}`}
        onClose={() => setPickerOpen(false)}
        onSelect={(url) => onChange(cacheBustMediaUrl(url))}
      />
    </div>
  );
}

function remapLocalizedCaptionKey(
  captions: MediaCaptionsStore,
  fromPath: string,
  toPath: string,
  fallbackLocale: LocaleCode,
): MediaCaptionsStore {
  const next: MediaCaptionsStore = { ...captions };
  const entry = normalizeCaptionEntry(
    next[fromPath] ?? next[mediaMatchKey(fromPath)],
    fallbackLocale,
  );
  delete next[fromPath];
  delete next[mediaMatchKey(fromPath)];
  if (Object.keys(entry).length) next[toPath] = entry;
  return next;
}

function MediaListEditor({
  label,
  value,
  onChange,
  captions = {},
  onCaptionChange,
  onMediaReplace,
}: {
  label: string;
  value: string[];
  onChange: (next: string[]) => void;
  captions?: Record<string, LocalizedCaption>;
  onCaptionChange?: (src: string, locale: LocaleCode, caption: string) => void;
  onMediaReplace?: (fromSrc: string, toSrc: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const [pickerIndex, setPickerIndex] = useState<number | "add" | null>(null);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function captionFor(src: string, locale: LocaleCode): string {
    return captions[src]?.[locale] ?? captions[mediaMatchKey(src)]?.[locale] ?? "";
  }

  async function uploadMany(files: FileList | File[] | null) {
    const list = files ? Array.from(files) : [];
    if (!list.length) return;
    setBusy(true);
    try {
      const urls: string[] = [];
      for (const file of list) {
        const url = await uploadMediaFile(file);
        if (url) urls.push(url);
      }
      if (urls.length) onChange([...value, ...urls]);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function move(index: number, dir: -1 | 1) {
    const next = [...value];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    const tmp = next[target]!;
    next[target] = next[index]!;
    next[index] = tmp;
    onChange(next);
  }

  function replaceAt(index: number, url: string) {
    const prev = value[index];
    const next = [...value];
    next[index] = url;
    onChange(next);
    if (prev && prev !== url) onMediaReplace?.(prev, url);
  }

  return (
    <div className="admin-vis-block depth-1">
      <div className="admin-vis-block-head">
        <button type="button" className="admin-vis-toggle" onClick={() => setOpen((v) => !v)}>
          <span aria-hidden>{open ? "▾" : "▸"}</span>
          {label}
          <em>{value.length}</em>
        </button>
        <div className="admin-vis-card-actions">
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            disabled={busy}
            onClick={() => setPickerIndex("add")}
          >
            + З бібліотеки
          </button>
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            {busy ? "Upload…" : "+ Upload"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="admin-vis-block-body">
          <div
            className={`admin-media-list-drop${dragOver ? " is-active" : ""}`}
            onDragEnter={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              void uploadMany(e.dataTransfer.files);
            }}
          >
            Перетягніть кілька файлів сюди, щоб додати в галерею
          </div>

          {value.length === 0 ? (
            <p className="admin-muted">Галерея порожня.</p>
          ) : (
            <div className="admin-media-list-grid admin-media-list-grid--captions">
              {value.map((item, index) => (
                <div key={`${item}-${index}`} className="admin-media-list-item">
                  <div className="admin-media-list-thumb">
                    <MediaPreview value={item} />
                  </div>
                  <div className="admin-media-list-tools">
                    <button type="button" className="admin-icon-btn" disabled={index === 0} onClick={() => move(index, -1)} title="Вгору">
                      ↑
                    </button>
                    <button
                      type="button"
                      className="admin-icon-btn"
                      disabled={index === value.length - 1}
                      onClick={() => move(index, 1)}
                      title="Вниз"
                    >
                      ↓
                    </button>
                    <button type="button" className="admin-icon-btn" onClick={() => setPickerIndex(index)} title="Замінити">
                      ✎
                    </button>
                    <button
                      type="button"
                      className="admin-icon-btn danger"
                      onClick={() => onChange(value.filter((_, i) => i !== index))}
                      title="Видалити"
                    >
                      ✕
                    </button>
                  </div>
                  <code title={item}>{item.split("/").pop()}</code>
                  {onCaptionChange ? (
                    <div className="admin-media-captions">
                      {LOCALES.map((locale) => (
                        <label key={locale} className="admin-media-caption">
                          <span>Підпис {locale.toUpperCase()}</span>
                          <input
                            className="admin-input"
                            value={captionFor(item, locale)}
                            placeholder={`${locale.toUpperCase()} caption…`}
                            onChange={(e) => onCaptionChange(item, locale, e.target.value)}
                          />
                        </label>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/mp4,video/webm"
            multiple
            hidden
            onChange={(e) => void uploadMany(e.target.files)}
          />
        </div>
      ) : null}

      <AdminMediaPicker
        open={pickerIndex !== null}
        title={pickerIndex === "add" ? "Додати медіа" : "Замінити медіа"}
        onClose={() => setPickerIndex(null)}
        onSelect={(url) => {
          const next = cacheBustMediaUrl(url);
          if (pickerIndex === "add") onChange([...value, next]);
          else if (typeof pickerIndex === "number") replaceAt(pickerIndex, next);
          setPickerIndex(null);
        }}
      />
    </div>
  );
}

function CaseItemEditor({
  item,
  index,
  total,
  onChange,
  onMove,
  onRemove,
}: {
  item: Record<string, unknown>;
  index: number;
  total: number;
  onChange: (next: Record<string, unknown>) => void;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
}) {
  const catalogLocale = useContext(CatalogLocaleContext);
  const [open, setOpen] = useState(false);
  const [fetchedCaptions, setFetchedCaptions] = useState<Record<string, LocalizedCaption>>({});
  const title = typeof item.title === "string" ? item.title : `Кейс ${index + 1}`;
  const slug = typeof item.slug === "string" ? item.slug : "";
  const cover = typeof item.listCover === "string" && item.listCover ? item.listCover : typeof item.cover === "string" ? item.cover : "";
  const media = Array.isArray(item.media) ? item.media : [];
  const storedCaptions: MediaCaptionsStore = isPlainObject(item.mediaCaptions)
    ? (item.mediaCaptions as MediaCaptionsStore)
    : {};

  useEffect(() => {
    if (!open || !slug) return;
    let cancelled = false;
    void (async () => {
      try {
        const response = await fetch(`/api/admin/cms?id=${encodeURIComponent(`cases/body/${slug}`)}`);
        const json = (await response.json()) as { data?: Record<string, unknown> };
        if (cancelled || !json.data || !isPlainObject(json.data)) return;
        const merged: Record<string, LocalizedCaption> = {};
        for (const locale of LOCALES) {
          const localeData = json.data[locale];
          if (!isPlainObject(localeData)) continue;
          const fromBlocks = captionsFromBlocks(localeData.blocks);
          for (const [key, text] of Object.entries(fromBlocks)) {
            merged[key] = { ...merged[key], [locale]: text };
          }
        }
        const shared = isPlainObject(json.data.shared) ? json.data.shared : {};
        if (isPlainObject(shared.mediaCaptions)) {
          for (const [key, value] of Object.entries(shared.mediaCaptions)) {
            merged[key] = {
              ...merged[key],
              ...normalizeCaptionEntry(value as string | LocalizedCaption, catalogLocale),
            };
            merged[mediaMatchKey(key)] = {
              ...merged[mediaMatchKey(key)],
              ...merged[key],
            };
          }
        }
        setFetchedCaptions(merged);
      } catch {
        // ignore — local captions still work
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, slug, catalogLocale]);

  const captionMap: Record<string, LocalizedCaption> = { ...fetchedCaptions };
  const blockCaptions = captionsFromBlocks(item.blocks);
  for (const [key, text] of Object.entries(blockCaptions)) {
    captionMap[key] = { ...captionMap[key], [catalogLocale]: text };
  }
  for (const [key, value] of Object.entries(storedCaptions)) {
    const entry = normalizeCaptionEntry(value, catalogLocale);
    captionMap[key] = { ...captionMap[key], ...entry };
    captionMap[mediaMatchKey(key)] = { ...captionMap[mediaMatchKey(key)], ...entry };
  }

  function setMediaCaption(src: string, locale: LocaleCode, caption: string) {
    const prev = normalizeCaptionEntry(storedCaptions[src] ?? captionMap[src], catalogLocale);
    const nextEntry: LocalizedCaption = { ...prev };
    if (caption.trim()) nextEntry[locale] = caption;
    else delete nextEntry[locale];

    const nextCaptions: MediaCaptionsStore = { ...storedCaptions, [src]: nextEntry };
    const patch: Record<string, unknown> = {
      ...item,
      mediaCaptions: nextCaptions,
    };
    if (locale === catalogLocale) {
      patch.blocks = applyCaptionToBlocks(item.blocks, src, caption);
    }
    onChange(patch);

    setFetchedCaptions((prevMap) => ({
      ...prevMap,
      [src]: nextEntry,
      [mediaMatchKey(src)]: nextEntry,
    }));
  }

  function onMediaReplace(fromSrc: string, toSrc: string) {
    const nextCaptions = remapLocalizedCaptionKey(storedCaptions, fromSrc, toSrc, catalogLocale);
    const moved = normalizeCaptionEntry(
      storedCaptions[fromSrc] ?? captionMap[fromSrc] ?? captionMap[mediaMatchKey(fromSrc)],
      catalogLocale,
    );
    let nextBlocks = applyCaptionToBlocks(item.blocks, fromSrc, "");
    if (moved[catalogLocale]) {
      nextBlocks = applyCaptionToBlocks(nextBlocks, toSrc, moved[catalogLocale] ?? "");
    }
    onChange({
      ...item,
      mediaCaptions: nextCaptions,
      blocks: nextBlocks,
    });
  }

  return (
    <div className={`admin-case-card${open ? " is-open" : ""}`}>
      <div className="admin-case-card-head">
        <button type="button" className="admin-case-card-toggle" onClick={() => setOpen((v) => !v)}>
          <span className="admin-case-card-thumb">
            <MediaPreview value={cover} />
          </span>
          <span className="admin-case-card-meta">
            <strong>{title}</strong>
            <em>
              {slug || "без slug"} · медіа: {media.length}
            </em>
          </span>
          <span aria-hidden>{open ? "▾" : "▸"}</span>
        </button>
        <div className="admin-vis-card-actions">
          <button type="button" className="admin-icon-btn" disabled={index === 0} onClick={() => onMove(-1)} title="Вгору">
            ↑
          </button>
          <button type="button" className="admin-icon-btn" disabled={index === total - 1} onClick={() => onMove(1)} title="Вниз">
            ↓
          </button>
          <button type="button" className="admin-icon-btn danger" onClick={onRemove} title="Видалити">
            ✕
          </button>
        </div>
      </div>

      {open ? (
        <div className="admin-case-card-body">
          <div className="admin-case-covers">
            <MediaField
              label="List Cover (картка)"
              fieldKey="listCover"
              value={typeof item.listCover === "string" ? item.listCover : ""}
              onChange={(next) => onChange({ ...item, listCover: next })}
            />
            <MediaField
              label="Cover (сторінка)"
              fieldKey="cover"
              value={typeof item.cover === "string" ? item.cover : ""}
              onChange={(next) => onChange({ ...item, cover: next })}
            />
          </div>

          {Array.isArray(item.media) &&
          (item.media.length === 0 || isMediaStringList(item.media as unknown[])) ? (
            <MediaListEditor
              label="Галерея медіа"
              value={item.media as string[]}
              onChange={(next) => onChange({ ...item, media: next })}
              captions={captionMap}
              onCaptionChange={setMediaCaption}
              onMediaReplace={onMediaReplace}
            />
          ) : null}

          <div className="admin-case-fields">
            {Object.entries(item).map(([key, child]) => {
              if (key === "cover" || key === "listCover" || key === "media" || key === "mediaCaptions") {
                return null;
              }
              return (
                <NodeEditor
                  key={key}
                  label={humanize(key)}
                  fieldKey={key}
                  value={child}
                  depth={2}
                  onChange={(nextChild) => onChange({ ...item, [key]: nextChild })}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StringField({
  label,
  fieldKey,
  value,
  onChange,
}: {
  label: string;
  fieldKey: string;
  value: string;
  onChange: (next: string) => void;
}) {
  if (looksLikeMedia(fieldKey, value) || looksLikeMediaPath(value)) {
    return <MediaField label={label} fieldKey={fieldKey} value={value} onChange={onChange} />;
  }

  const color = looksLikeColor(fieldKey, value);
  const multiline =
    value.length > 90 ||
    value.includes("\n") ||
    /^(body|description|text|paragraph|lead|sub|quote|caption|content)$/i.test(fieldKey) ||
    fieldKey.toLowerCase().includes("description") ||
    fieldKey.toLowerCase().includes("paragraph");

  return (
    <label className="admin-vis-field">
      <span className="admin-vis-label">{label}</span>
      {color ? (
        <div className="admin-vis-color">
          <input
            type="color"
            value={/^#([0-9a-f]{6})$/i.test(value) ? value : "#000000"}
            onChange={(e) => onChange(e.target.value)}
            aria-label={label}
          />
          <input className="admin-input" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
      ) : multiline ? (
        <textarea
          className="admin-textarea"
          value={value}
          rows={Math.min(12, Math.max(3, value.split("\n").length + 1))}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input className="admin-input" value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function NodeEditor({
  label,
  fieldKey,
  value,
  depth,
  onChange,
}: {
  label: string;
  fieldKey: string;
  value: unknown;
  depth: number;
  onChange: (next: unknown) => void;
}) {
  const [open, setOpen] = useState(depth < 2);

  if (value === null || value === undefined) {
    return (
      <div className="admin-vis-field">
        <span className="admin-vis-label">{label}</span>
        <span className="admin-muted">пусто</span>
      </div>
    );
  }

  if (typeof value === "string") {
    return <StringField label={label} fieldKey={fieldKey} value={value} onChange={onChange} />;
  }

  if (typeof value === "number") {
    return (
      <label className="admin-vis-field">
        <span className="admin-vis-label">{label}</span>
        <input
          className="admin-input"
          type="number"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="admin-vis-check">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        <span>{label}</span>
      </label>
    );
  }

  if (Array.isArray(value)) {
    if (isMediaStringList(value) || fieldKey === "media") {
      return (
        <MediaListEditor
          label={label}
          value={value as string[]}
          onChange={onChange}
        />
      );
    }

    if (value.length > 0 && value.every(isCaseLike)) {
      return (
        <div className="admin-case-list">
          <div className="admin-case-list-toolbar">
            <strong>
              {label} · {value.length}
            </strong>
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={() => {
                const sample = value[0];
                onChange([...value, cloneTemplate(sample)]);
              }}
            >
              + Додати кейс
            </button>
          </div>
          {value.map((item, index) => (
            <CaseItemEditor
              key={`${String(item.slug)}-${index}`}
              item={item}
              index={index}
              total={value.length}
              onChange={(nextItem) => {
                const next = [...value];
                next[index] = nextItem;
                onChange(next);
              }}
              onMove={(dir) => {
                const target = index + dir;
                if (target < 0 || target >= value.length) return;
                const next = [...value];
                const tmp = next[target];
                next[target] = next[index];
                next[index] = tmp;
                onChange(next);
              }}
              onRemove={() => onChange(value.filter((_, i) => i !== index))}
            />
          ))}
        </div>
      );
    }

    const isStringList = value.every((item) => typeof item === "string");
    return (
      <div className={`admin-vis-block depth-${Math.min(depth, 4)}`}>
        <div className="admin-vis-block-head">
          <button type="button" className="admin-vis-toggle" onClick={() => setOpen((v) => !v)}>
            <span aria-hidden>{open ? "▾" : "▸"}</span>
            {label}
            <em>{value.length}</em>
          </button>
          <button
            type="button"
            className="admin-btn admin-btn-secondary"
            onClick={() => {
              const sample = value[0] ?? (isStringList || value.length === 0 ? "" : {});
              onChange([...value, typeof sample === "string" ? "" : cloneTemplate(sample)]);
              setOpen(true);
            }}
          >
            + Додати
          </button>
        </div>
        {open ? (
          <div className="admin-vis-block-body">
            {value.length === 0 ? <p className="admin-muted">Список порожній. Натисніть «Додати».</p> : null}
            {value.map((item, index) => (
              <div key={`${fieldKey}-${index}`} className="admin-vis-card">
                <div className="admin-vis-card-toolbar">
                  <strong>
                    {isStringList
                      ? `#${index + 1}`
                      : humanize(String((item as { type?: string })?.type ?? index + 1))}
                  </strong>
                  <div className="admin-vis-card-actions">
                    <button
                      type="button"
                      className="admin-icon-btn"
                      disabled={index === 0}
                      onClick={() => {
                        const next = [...value];
                        const tmp = next[index - 1];
                        next[index - 1] = next[index];
                        next[index] = tmp;
                        onChange(next);
                      }}
                      title="Вгору"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="admin-icon-btn"
                      disabled={index === value.length - 1}
                      onClick={() => {
                        const next = [...value];
                        const tmp = next[index + 1];
                        next[index + 1] = next[index];
                        next[index] = tmp;
                        onChange(next);
                      }}
                      title="Вниз"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="admin-icon-btn danger"
                      onClick={() => onChange(value.filter((_, i) => i !== index))}
                      title="Видалити"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <NodeEditor
                  label={isStringList ? "Текст" : `Елемент ${index + 1}`}
                  fieldKey={isStringList ? fieldKey : `${fieldKey}[${index}]`}
                  value={item}
                  depth={depth + 1}
                  onChange={(nextItem) => {
                    const next = [...value];
                    next[index] = nextItem;
                    onChange(next);
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value);
    const isRootish = depth === 0;
    return (
      <div className={`admin-vis-block depth-${Math.min(depth, 4)}${isRootish ? " is-root" : ""}`}>
        {!isRootish ? (
          <div className="admin-vis-block-head">
            <button type="button" className="admin-vis-toggle" onClick={() => setOpen((v) => !v)}>
              <span aria-hidden>{open ? "▾" : "▸"}</span>
              {label}
              <em>{entries.length} полів</em>
            </button>
          </div>
        ) : null}
        {(open || isRootish) && (
          <div className={`admin-vis-block-body${isRootish ? " is-root-body" : ""}`}>
            {entries.map(([key, child]) => (
              <NodeEditor
                key={`${fieldKey}.${key}`}
                label={humanize(key)}
                fieldKey={key}
                value={child}
                depth={depth + 1}
                onChange={(nextChild) => onChange({ ...value, [key]: nextChild })}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="admin-vis-field">
      <span className="admin-vis-label">{label}</span>
      <span className="admin-muted">Непідтримуваний тип</span>
    </div>
  );
}

function hasLocaleBuckets(value: unknown): value is Record<string, unknown> {
  if (!isPlainObject(value)) return false;
  return LOCALES.some((locale) => locale in value);
}

export function CmsVisualEditor({ value, localeMap, docId, onChange }: Props) {
  const [locale, setLocale] = useState<(typeof LOCALES)[number]>("uk");
  const [showRaw, setShowRaw] = useState(false);

  const catalogLocale = useMemo<LocaleCode>(() => {
    const match = docId?.match(/^cases\/catalog\/(uk|en|ru)$/);
    if (match?.[1] === "uk" || match?.[1] === "en" || match?.[1] === "ru") return match[1];
    return locale;
  }, [docId, locale]);

  const root = value;
  const mixedLocaleDoc = !localeMap && hasLocaleBuckets(root);

  const editingValue = useMemo(() => {
    if (localeMap && isPlainObject(root)) return root[locale] ?? {};
    if (mixedLocaleDoc && isPlainObject(root)) {
      const shared = isPlainObject(root.shared) ? root.shared : {};
      const localeData = isPlainObject(root[locale]) ? root[locale] : {};
      return {
        shared,
        [locale]: localeData,
      };
    }
    return root;
  }, [localeMap, mixedLocaleDoc, root, locale]);

  function commit(nextEditing: unknown) {
    if (localeMap && isPlainObject(root)) {
      onChange({ ...root, [locale]: nextEditing });
      return;
    }
    if (mixedLocaleDoc && isPlainObject(root) && isPlainObject(nextEditing)) {
      const nextShared = isPlainObject(nextEditing.shared) ? nextEditing.shared : root.shared;
      const nextLocale = nextEditing[locale];
      onChange({
        ...root,
        shared: nextShared,
        [locale]: nextLocale,
      });
      return;
    }
    onChange(nextEditing);
  }

  return (
    <CatalogLocaleContext.Provider value={catalogLocale}>
      <div className="admin-vis">
        {(localeMap || mixedLocaleDoc) && (
          <div className="admin-tabs">
            {LOCALES.map((item) => (
              <button
                key={item}
                type="button"
                className={`admin-tab${locale === item ? " is-active" : ""}`}
                onClick={() => setLocale(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {mixedLocaleDoc ? (
          <p className="admin-muted" style={{ marginTop: 0 }}>
            Shared-медіа спільні для всіх мов. Тексти нижче — для {locale.toUpperCase()}.
          </p>
        ) : null}

        <NodeEditor label="Контент" fieldKey="root" value={editingValue} depth={0} onChange={commit} />

        <details
          className="admin-vis-advanced"
          open={showRaw}
          onToggle={(e) => setShowRaw((e.target as HTMLDetailsElement).open)}
        >
          <summary>Advanced JSON</summary>
          <textarea
            className="admin-textarea"
            style={{ minHeight: 280, marginTop: 10 }}
            value={JSON.stringify(root, null, 2)}
            onChange={(e) => {
              try {
                onChange(JSON.parse(e.target.value));
              } catch {
                // ignore while typing
              }
            }}
          />
        </details>
      </div>
    </CatalogLocaleContext.Provider>
  );
}
