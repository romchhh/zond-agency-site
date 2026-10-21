import { NextResponse } from "next/server";
import {
  getMetaAppSecret,
  getMetaWebhookVerifyToken,
} from "@/lib/meta-leads/config";
import { processMetaLeadgenEvent } from "@/lib/meta-leads/process";
import { verifyMetaSignature } from "@/lib/meta-leads/signature";
import type { MetaWebhookBody } from "@/lib/meta-leads/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Meta webhook verification (hub.challenge). */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  const expected = getMetaWebhookVerifyToken();

  if (mode === "subscribe" && expected && token === expected && challenge) {
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  console.warn("meta-leads: webhook verify rejected", {
    mode,
    hasChallenge: Boolean(challenge),
    at: new Date().toISOString(),
  });
  return NextResponse.json({ ok: false }, { status: 403 });
}

/** Meta leadgen notifications. */
export async function POST(request: Request) {
  const rawBody = await request.text();
  const appSecret = getMetaAppSecret();
  const signature = request.headers.get("x-hub-signature-256");

  if (!appSecret || !verifyMetaSignature(rawBody, signature, appSecret)) {
    console.warn("meta-leads: invalid signature", {
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let body: MetaWebhookBody;
  try {
    body = JSON.parse(rawBody) as MetaWebhookBody;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (body.object !== "page") {
    return NextResponse.json({ ok: true });
  }

  const events: Array<{
    leadgen_id?: string;
    page_id?: string;
    form_id?: string;
    adgroup_id?: string;
    ad_id?: string;
    created_time?: number | string;
  }> = [];

  for (const entry of body.entry ?? []) {
    for (const change of entry.changes ?? []) {
      if (change.field !== "leadgen" || !change.value) continue;
      events.push(change.value);
    }
  }

  // Acknowledge quickly; process sequentially to keep filesystem store simple.
  for (const event of events) {
    try {
      await processMetaLeadgenEvent(event);
    } catch (error) {
      console.error("meta-leads: unexpected handler error", {
        leadgenId: event.leadgen_id,
        error: error instanceof Error ? error.message : "unknown",
        at: new Date().toISOString(),
      });
    }
  }

  return NextResponse.json({ ok: true });
}
