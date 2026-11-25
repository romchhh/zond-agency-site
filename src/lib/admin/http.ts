import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createSessionToken,
  getAdminUsername,
  verifyAdminPassword,
  verifySessionToken,
} from "@/lib/admin/auth";
import { cookies } from "next/headers";

export function adminJson(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      ...(init?.headers ?? {}),
    },
  });
}

export async function requireAdminSession(): Promise<
  { ok: true; username: string } | { ok: false; response: NextResponse }
> {
  const jar = await cookies();
  const token = jar.get(ADMIN_SESSION_COOKIE)?.value;
  const session = verifySessionToken(token);
  if (!session) {
    return { ok: false, response: adminJson({ ok: false, error: "unauthorized" }, { status: 401 }) };
  }
  return { ok: true, username: session.u };
}

export function loginRateKey(ip: string | null): string {
  return `admin-login:${ip ?? "unknown"}`;
}

const loginAttempts = new Map<string, { count: number; resetAt: number }>();

export function checkLoginRateLimit(ip: string | null): boolean {
  const key = loginRateKey(ip);
  const now = Date.now();
  const entry = loginAttempts.get(key);
  if (!entry || entry.resetAt < now) {
    loginAttempts.set(key, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 20) return false;
  entry.count += 1;
  return true;
}

export async function attemptAdminLogin(
  username: string,
  password: string,
): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const expected = getAdminUsername();
  if (!expected) {
    return { ok: false, status: 503, error: "admin_not_configured" };
  }
  if (username !== expected || !verifyAdminPassword(password)) {
    return { ok: false, status: 401, error: "invalid_credentials" };
  }

  try {
    const token = createSessionToken(expected);
    const jar = await cookies();
    jar.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return { ok: true };
  } catch {
    return { ok: false, status: 503, error: "admin_not_configured" };
  }
}

export async function clearAdminSession(): Promise<void> {
  const jar = await cookies();
  jar.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return Boolean(verifySessionToken(jar.get(ADMIN_SESSION_COOKIE)?.value));
}
