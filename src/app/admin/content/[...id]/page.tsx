import { notFound } from "next/navigation";
import { AdminContentEditor } from "@/components/admin/AdminContentEditor";
import { getCmsDocMeta } from "@/cms/registry";
import { readCmsDoc } from "@/cms/store";

export const dynamic = "force-dynamic";

export default async function AdminContentDocPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id: parts } = await params;
  const id = parts.map(decodeURIComponent).join("/");
  const meta = getCmsDocMeta(id);
  if (!meta) notFound();

  const data = await readCmsDoc(id);

  return (
    <>
      <h1 className="admin-page-title">{meta.title}</h1>
      <AdminContentEditor meta={meta} initialData={data ?? {}} seeded={data !== null} />
    </>
  );
}
