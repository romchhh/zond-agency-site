import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin/session-edge";

export { ADMIN_SESSION_COOKIE };
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12h

type SessionPayload = {
  u: string;
  e: number;
};

function requireSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (!secret || secret.length < 16) {
    throw new Error("ADMIN_SESSION_SECRET missing or too short");
  }
  return secret;
}

function b64url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromB64url(input: string): Buffer {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  return Buffer.from(padded + pad, "base64");
}

export function hashAdminPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt$16384$8$1$${b64url(salt)}$${b64url(hash)}`;
}

export function verifyAdminPassword(password: string): boolean {
  const username = process.env.ADMIN_USERNAME?.trim();
  if (!username) return false;

  const storedHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (storedHash?.startsWith("scrypt$")) {
    // scrypt$N$r$p$salt$hash
    const parts = storedHash.split("$");
    if (parts.length !== 6) return false;
    const n = Number(parts[1]);
    const r = Number(parts[2]);
    const p = Number(parts[3]);
    const salt = fromB64url(parts[4] ?? "");
    const expected = fromB64url(parts[5] ?? "");
    if (!Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(p)) return false;
    if (!salt.length || !expected.length) return false;
    const actual = scryptSync(password, salt, expected.length, { N: n, r, p });
    if (actual.length !== expected.length) return false;
    return timingSafeEqual(actual, expected);
  }

  // Local/dev fallback when hash is not set yet.
  const plain = process.env.ADMIN_PASSWORD?.trim();
  if (!plain) return false;
  const a = Buffer.from(plain);
  const b = Buffer.from(password);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function getAdminUsername(): string | null {
  return process.env.ADMIN_USERNAME?.trim() || null;
}

export function createSessionToken(username: string, now = Date.now()): string {
  const payload: SessionPayload = { u: username, e: now + SESSION_TTL_MS };
  const body = b64url(JSON.stringify(payload));
  const sig = createHmac("sha256", requireSecret()).update(body).digest();
  return `${body}.${b64url(sig)}`;
}

export function verifySessionToken(token: string | undefined | null): SessionPayload | null {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;

  let expected: Buffer;
  try {
    expected = createHmac("sha256", requireSecret()).update(body).digest();
  } catch {
    return null;
  }

  const actual = fromB64url(sig);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return null;
  }

  try {
    const payload = JSON.parse(fromB64url(body).toString("utf8")) as SessionPayload;
    if (!payload?.u || typeof payload.e !== "number") return null;
    if (payload.e < Date.now()) return null;
    const expectedUser = getAdminUsername();
    if (!expectedUser || payload.u !== expectedUser) return null;
    return payload;
  } catch {
    return null;
  }
}

