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
        Редагуйте сторінки й блоки нативно: тексти, списки, медіа, кольори. JSON лише в Advanced.
        Якщо список порожній — натисніть «Засіяти з коду».
      </p>
      <AdminContentList docs={docs} />
    </>
  );
}
