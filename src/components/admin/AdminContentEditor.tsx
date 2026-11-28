"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CmsVisualEditor } from "@/components/admin/CmsVisualEditor";
import type { CmsDocMeta } from "@/cms/registry";

type Props = {
  meta: CmsDocMeta;
  initialData: unknown;
  seeded: boolean;
};

export function AdminContentEditor({ meta, initialData, seeded }: Props) {
  const router = useRouter();
  const [data, setData] = useState<unknown>(initialData ?? {});
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        if (!saving && dirty) void save();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saving, dirty, data]);

  function save() {
    setSaving(true);
    setProgress(8);
    setMessage(null);
    setError(null);

    const body = JSON.stringify({ id: meta.id, data });
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/admin/cms");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) return;
      const ratio = event.loaded / event.total;
      setProgress(Math.max(12, Math.min(78, Math.round(ratio * 78))));
    };
    xhr.onerror = () => {
      setError("Помилка мережі");
      setSaving(false);
      setProgress(0);
    };
    xhr.onload = () => {
      setProgress(92);
      let json: { ok?: boolean; error?: string } = {};
      try {
        json = JSON.parse(xhr.responseText) as { ok?: boolean; error?: string };
      } catch {
        json = {};
      }
      if (xhr.status < 200 || xhr.status >= 300 || !json.ok) {
        setError(json.error || "Не вдалося зберегти");
        setSaving(false);
        setProgress(0);
        return;
      }
      setProgress(100);
      setDirty(false);
      setMessage("Збережено. На сайті медіа оновляться після оновлення сторінки.");
      router.refresh();
      window.setTimeout(() => {
        setSaving(false);
        setProgress(0);
      }, 700);
    };
    xhr.send(body);
  }

  return (
    <>
      <div className="admin-editor-top">
        <p className="admin-muted" style={{ margin: 0 }}>
          <Link href="/admin/content">← Усі документи</Link>
          {meta.previewPath ? (
            <>
              {" · "}
              <a href={meta.previewPath} target="_blank" rel="noreferrer">
                Відкрити на сайті
              </a>
            </>
          ) : null}
          {" · "}
          <code>{meta.id}</code>
          {!seeded ? " · ще не засіяно з коду" : null}
        </p>
        {dirty ? <span className="admin-badge">не збережено</span> : null}
      </div>

      {meta.description ? <p className="admin-page-lead">{meta.description}</p> : null}
      {meta.id.startsWith("cases/body/") ? (
        <div className="admin-toast">
          Обкладинка картки = поле <code>Shared → List Cover</code>. Швидше змінити можна в{" "}
          <Link href="/admin/covers">Обкладинки</Link>.
        </div>
      ) : null}
      {meta.id.startsWith("cases/catalog/") ? (
        <div className="admin-toast">
          Відкрийте кейс → cover / listCover / галерея (підписи UK·EN·RU). Після збереження підписи
          синхронізуються в усі мови.
        </div>
      ) : null}
      {meta.id.match(/^services\/[^/]+\/page$/) ? (
        <div className="admin-toast">
          Вкладки UK / EN / RU зверху. Зображення міняйте через Бібліотека або Upload у полях image /
          photo. Потім Зберегти.
        </div>
      ) : null}
      {error ? <p className="admin-error">{error}</p> : null}
      {message ? <p className="admin-toast">{message}</p> : null}

      <div className="admin-panel admin-panel--editor">
        <CmsVisualEditor
          value={data}
          docId={meta.id}
          localeMap={meta.localeMap}
          onChange={(next) => {
            setData(next);
            setDirty(true);
            setMessage(null);
          }}
        />
      </div>

      <div className="admin-sticky-actions">
        <div className="admin-sticky-actions-inner">
          <span className="admin-muted">
            {saving
              ? `Оновлення ${progress}%`
              : dirty
                ? "Є незбережені зміни"
                : "Усе збережено"}{" "}
            · ⌘/Ctrl+S
          </span>
          <button type="button" className="admin-btn" disabled={saving || !dirty} onClick={save}>
            {saving ? "Збереження…" : "Зберегти"}
          </button>
        </div>
        {saving ? (
          <div
            className="admin-save-progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
        ) : null}
      </div>
    </>
  );
}
