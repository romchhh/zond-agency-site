import { adminJson, requireAdminSession } from "@/lib/admin/http";
import { listAdminLeads } from "@/lib/admin/leads";
import { markSiteLeadRead } from "@/lib/leads/store";

export async function GET() {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;
  const leads = await listAdminLeads();
  return adminJson({ ok: true, leads });
}

export async function PATCH(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  let body: { id?: string; read?: boolean; source?: string };
  try {
    body = (await request.json()) as { id?: string; read?: boolean; source?: string };
  } catch {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!body.id || body.source !== "site") {
    return adminJson({ ok: false, error: "unsupported" }, { status: 400 });
  }

  const updated = await markSiteLeadRead(body.id, body.read ?? true);
  if (!updated) {
    return adminJson({ ok: false, error: "not_found" }, { status: 404 });
  }
  return adminJson({ ok: true, lead: updated });
}
