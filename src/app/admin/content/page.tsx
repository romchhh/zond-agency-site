import { AdminContentList } from "@/components/admin/AdminContentList";
import { getCmsRegistry } from "@/cms/registry";
import { listCmsDocIds } from "@/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  const registry = getCmsRegistry();
  const existing = new Set(await listCmsDocIds());
  const docs = registry.map((doc) => ({
    ...doc,
    seeded: existing.has(doc.id),
  }));

  return (
    <>
      <h1 className="admin-page-title">Контент</h1>
      <p className="admin-page-lead">
        Головна, послуги, кейси й блог — тексти й фото трьома мовами. Відкрийте картку → редагуйте →
        збережіть.
      </p>
      <AdminContentList docs={docs} />
    </>
  );
}
