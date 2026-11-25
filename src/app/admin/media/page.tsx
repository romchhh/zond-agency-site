import { AdminMediaLibrary } from "@/components/admin/AdminMediaLibrary";
import { listMedia } from "@/lib/admin/media";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const items = await listMedia();

  return (
    <>
      <h1 className="admin-page-title">Медіа</h1>
      <p className="admin-page-lead">
        Завантаження в <code>/uploads/cms</code> і перегляд існуючих <code>/assets</code>. URL
        вставляйте в поля image/video в редакторі контенту.
      </p>
      <AdminMediaLibrary initialItems={items} />
    </>
  );
}
