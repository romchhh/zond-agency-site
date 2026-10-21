import { createHmac, timingSafeEqual } from "node:crypto";

/** Verify Meta `X-Hub-Signature-256` over the raw POST body. */
export function verifyMetaSignature(
  rawBody: string,
  signatureHeader: string | null,
  appSecret: string,
): boolean {
  if (!signatureHeader || !appSecret) return false;

  const expected = createHmac("sha256", appSecret).update(rawBody, "utf8").digest("hex");
  const provided = signatureHeader.startsWith("sha256=")
    ? signatureHeader.slice("sha256=".length)
    : signatureHeader;

  if (!/^[a-f0-9]+$/i.test(provided) || provided.length !== expected.length) {
    return false;
  }

  try {
    return timingSafeEqual(
      Buffer.from(expected, "utf8"),
      Buffer.from(provided.toLowerCase(), "utf8"),
    );
  } catch {
    return false;
  }
}
