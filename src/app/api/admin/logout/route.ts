import { adminJson, clearAdminSession } from "@/lib/admin/http";

export async function POST() {
  await clearAdminSession();
  return adminJson({ ok: true });
}
