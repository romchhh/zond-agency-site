import { AdminCaseCovers } from "@/components/admin/AdminCaseCovers";
import { listCaseCoverRows } from "@/lib/admin/case-covers";

export const dynamic = "force-dynamic";

export default async function AdminCoversPage() {
  const items = await listCaseCoverRows();

  return (
    <>
      <h1 className="admin-page-title">Обкладинки карток</h1>
      <p className="admin-page-lead">
        Швидка заміна медіа на картках кейсів. Drag-and-drop або upload — файл потрапляє в
        /uploads/cms і одразу підставляється в listCover / cover.
      </p>
      <AdminCaseCovers initialItems={items} />
    </>
  );
}
