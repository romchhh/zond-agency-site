import { listSiteLeads, type SiteLeadRecord } from "@/lib/leads/store";
import { listMetaLeadRecords } from "@/lib/meta-leads/store";
import type { MetaLeadRecord } from "@/lib/meta-leads/types";

export type AdminLeadRow = {
  id: string;
  source: "site" | "meta";
  createdAt: string;
  name: string;
  contact: string;
  email: string;
  locale: string;
  utm_source: string;
  page_url: string;
  status: string;
  read: boolean;
  interest?: string;
  metaStatus?: string;
};

function mapSite(lead: SiteLeadRecord): AdminLeadRow {
  return {
    id: lead.id,
    source: "site",
    createdAt: lead.createdAt,
    name: lead.name,
    contact: lead.contact,
    email: lead.email || "-",
    locale: lead.locale,
    utm_source: lead.utm_source || "direct",
    page_url: lead.page_url || "-",
    status: lead.read ? "read" : "new",
    read: lead.read,
    interest: lead.interest,
  };
}

function mapMeta(lead: MetaLeadRecord): AdminLeadRow {
  return {
    id: lead.leadgenId,
    source: "meta",
    createdAt: lead.createdAt,
    name: "Meta Lead",
    contact: lead.formId ? `form:${lead.formId}` : "-",
    email: "-",
    locale: "-",
    utm_source: "meta",
    page_url: lead.pageId ? `page:${lead.pageId}` : "-",
    status: lead.status,
    read: lead.status === "sent" || lead.status === "ignored",
    metaStatus: lead.status,
  };
}

export async function listAdminLeads(): Promise<AdminLeadRow[]> {
  const [site, meta] = await Promise.all([listSiteLeads(), listMetaLeadRecords()]);
  return [...site.map(mapSite), ...meta.map(mapMeta)].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

export async function getLeadsStats(days = 30) {
  const leads = await listAdminLeads();
  const since = Date.now() - days * 24 * 60 * 60 * 1000;
  const recent = leads.filter((l) => Date.parse(l.createdAt) >= since);

  const byDay: Record<string, number> = {};
  const bySource: Record<string, number> = {};
  const byLocale: Record<string, number> = {};
  const byUtm: Record<string, number> = {};

  for (const lead of recent) {
    const day = lead.createdAt.slice(0, 10);
    byDay[day] = (byDay[day] ?? 0) + 1;
    bySource[lead.source] = (bySource[lead.source] ?? 0) + 1;
    if (lead.locale && lead.locale !== "-") {
      byLocale[lead.locale] = (byLocale[lead.locale] ?? 0) + 1;
    }
    const utm = lead.utm_source || "direct";
    byUtm[utm] = (byUtm[utm] ?? 0) + 1;
  }

  return {
    total: recent.length,
    unreadSite: recent.filter((l) => l.source === "site" && !l.read).length,
    byDay,
    bySource,
    byLocale,
    byUtm,
  };
}
