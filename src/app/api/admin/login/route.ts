import {
  adminJson,
  attemptAdminLogin,
  checkLoginRateLimit,
} from "@/lib/admin/http";

export async function POST(request: Request) {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;

  if (!checkLoginRateLimit(ip)) {
    return adminJson({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: { username?: string; password?: string };
  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const username = body.username?.trim() ?? "";
  const password = body.password ?? "";
  if (!username || !password) {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const result = await attemptAdminLogin(username, password);
  if (!result.ok) {
    return adminJson({ ok: false, error: result.error }, { status: result.status });
  }

  return adminJson({ ok: true });
}
