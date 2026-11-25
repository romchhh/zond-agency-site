export const ADMIN_SESSION_COOKIE = "zond_admin_session";

type SessionPayload = {
  u: string;
  e: number;
};

function b64urlFromBytes(bytes: ArrayBuffer | Uint8Array): string {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (let i = 0; i < view.length; i++) binary += String.fromCharCode(view[i]!);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function bytesFromB64url(input: string): Uint8Array {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

/** Edge-safe HMAC session verify (Web Crypto). */
export async function verifySessionTokenEdge(
  token: string | undefined | null,
  secret: string,
  expectedUsername: string,
): Promise<boolean> {
  if (!token || !secret || !expectedUsername) return false;
  const [body, sig] = token.split(".");
  if (!body || !sig) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(body),
  );
  const expected = b64urlFromBytes(signature);
  if (expected.length !== sig.length) return false;

  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  if (mismatch !== 0) return false;

  try {
    const json = new TextDecoder().decode(bytesFromB64url(body));
    const payload = JSON.parse(json) as SessionPayload;
    if (!payload?.u || typeof payload.e !== "number") return false;
    if (payload.e < Date.now()) return false;
    return payload.u === expectedUsername;
  } catch {
    return false;
  }
}
