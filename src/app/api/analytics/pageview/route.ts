import { NextResponse } from "next/server";
import { recordPageview } from "@/lib/analytics/store";

export async function POST(request: Request) {
  let body: { path?: string };
  try {
    body = (await request.json()) as { path?: string };
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const path = typeof body.path === "string" ? body.path.trim() : "";
  if (!path.startsWith("/") || path.startsWith("/admin") || path.startsWith("/api")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;
  const ua = request.headers.get("user-agent");

  try {
    await recordPageview({ path, ip, ua });
  } catch (error) {
    console.error("analytics: pageview failed", error);
  }

  return NextResponse.json(
    { ok: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
