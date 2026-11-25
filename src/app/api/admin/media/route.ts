import { adminJson, requireAdminSession } from "@/lib/admin/http";
import { listMedia, saveUploadedMedia } from "@/lib/admin/media";

export async function GET() {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;
  const items = await listMedia();
  return adminJson({ ok: true, items });
}

export async function POST(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return adminJson({ ok: false, error: "missing_file" }, { status: 400 });
  }
  if (file.size > 25 * 1024 * 1024) {
    return adminJson({ ok: false, error: "too_large" }, { status: 400 });
  }

  const item = await saveUploadedMedia(file);
  return adminJson({ ok: true, item });
}
