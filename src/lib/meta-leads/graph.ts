import {
  getMetaGraphApiVersion,
  getMetaPageAccessToken,
} from "./config";
import type { MetaLeadPayload } from "./types";

function graphUrl(pathname: string, params: Record<string, string>): string {
  const version = getMetaGraphApiVersion();
  const url = new URL(`https://graph.facebook.com/${version}${pathname}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

async function graphGet<T>(
  pathname: string,
  params: Record<string, string>,
): Promise<T> {
  const token = getMetaPageAccessToken();
  if (!token) {
    throw new Error("META_PAGE_ACCESS_TOKEN is missing");
  }

  const response = await fetch(
    graphUrl(pathname, { ...params, access_token: token }),
    { method: "GET" },
  );

  const body = (await response.json()) as T & {
    error?: { message?: string; code?: number; type?: string };
  };

  if (!response.ok || body.error) {
    const message = body.error?.message ?? `graph_http_${response.status}`;
    const err = new Error(message) as Error & { retryable?: boolean };
    const code = body.error?.code ?? response.status;
    err.retryable = code === 4 || code === 17 || code === 32 || code >= 500;
    throw err;
  }

  return body;
}

export async function fetchMetaLead(leadgenId: string): Promise<MetaLeadPayload> {
  return graphGet<MetaLeadPayload>(`/${encodeURIComponent(leadgenId)}`, {
    fields:
      "id,created_time,field_data,ad_id,adset_id,campaign_id,form_id,is_organic,platform",
  });
}

export async function fetchAdNames(adId: string): Promise<{
  adName: string;
  campaignName: string;
}> {
  try {
    const data = await graphGet<{
      name?: string;
      campaign?: { name?: string };
      adset?: { campaign?: { name?: string } };
    }>(`/${encodeURIComponent(adId)}`, {
      fields: "name,campaign{name},adset{campaign{name}}",
    });

    return {
      adName: data.name?.trim() || "не визначено",
      campaignName:
        data.campaign?.name?.trim() ||
        data.adset?.campaign?.name?.trim() ||
        "не визначено",
    };
  } catch {
    return { adName: "не визначено", campaignName: "не визначено" };
  }
}
