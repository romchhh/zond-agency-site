import { revalidatePath } from "next/cache";
import { adminJson, requireAdminSession } from "@/lib/admin/http";
import { listCaseCoverRows, updateCaseCovers } from "@/lib/admin/case-covers";

export async function GET() {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;
  const items = await listCaseCoverRows();
  return adminJson({ ok: true, items });
}

export async function PUT(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  let body: { slug?: string; cover?: string; listCover?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const slug = body.slug?.trim();
  if (!slug) {
    return adminJson({ ok: false, error: "missing_slug" }, { status: 400 });
  }

  try {
    const item = await updateCaseCovers(slug, {
      cover: body.cover,
      listCover: body.listCover,
    });
    try {
      revalidatePath("/", "layout");
    } catch {
      // ignore
    }
    return adminJson({ ok: true, item });
  } catch (error) {
    console.error("covers: update failed", error);
    return adminJson({ ok: false, error: "update_failed" }, { status: 500 });
  }
}
