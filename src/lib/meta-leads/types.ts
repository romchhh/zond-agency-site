export type MetaLeadgenValue = {
  leadgen_id?: string;
  page_id?: string;
  form_id?: string;
  adgroup_id?: string;
  ad_id?: string;
  created_time?: number | string;
};

export type MetaWebhookBody = {
  object?: string;
  entry?: Array<{
    id?: string;
    time?: number;
    changes?: Array<{
      field?: string;
      value?: MetaLeadgenValue;
    }>;
  }>;
};

export type MetaFieldDataItem = {
  name?: string;
  values?: string[];
};

export type MetaLeadPayload = {
  id?: string;
  created_time?: string;
  field_data?: MetaFieldDataItem[];
  ad_id?: string;
  adset_id?: string;
  campaign_id?: string;
  form_id?: string;
  is_organic?: boolean;
  platform?: string;
};

export type ParsedMetaLead = {
  leadgenId: string;
  pageId: string;
  formId: string;
  name: string;
  phone: string;
  service: string;
  platform: "Facebook" | "Instagram" | "не визначено";
  campaignName: string;
  adName: string;
  isOrganic: boolean;
  isTest: boolean;
  createdTime: Date;
};

export type MetaLeadDeliveryStatus =
  | "received"
  | "processing"
  | "sent"
  | "failed"
  | "ambiguous"
  | "ignored";

export type MetaLeadRecord = {
  leadgenId: string;
  status: MetaLeadDeliveryStatus;
  createdAt: string;
  updatedAt: string;
  attempts: number;
  pageId?: string;
  formId?: string;
  telegramMessageId?: number;
  lastError?: string;
  reason?: string;
};
