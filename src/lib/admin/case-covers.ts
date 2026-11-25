import { readCmsDoc, writeCmsDoc } from "@/cms/store";
import { syncCaseBodyIntoCatalogs } from "@/cms/sync-case-catalogs";
import { getCases } from "@/i18n/cases";

export type CaseCoverRow = {
  slug: string;
  title: string;
  cover: string;
  listCover: string;
  cardSrc: string;
};

type CaseBodyDoc = {
  shared?: {
    slug?: string;
    cover?: string;
    listCover?: string;
    media?: string[];
    theme?: unknown;
  };
  uk?: { title?: string };
  en?: { title?: string };
  ru?: { title?: string };
  [key: string]: unknown;
};

export async function listCaseCoverRows(): Promise<CaseCoverRow[]> {
  const cases = getCases("uk");
  return cases.map((item) => ({
    slug: item.slug,
    title: item.title,
    cover: item.cover || "",
    listCover: item.listCover || "",
    cardSrc: item.listCover || item.cover || "",
  }));
}

export async function updateCaseCovers(
  slug: string,
  input: { cover?: string; listCover?: string },
): Promise<CaseCoverRow> {
  const docId = `cases/body/${slug}`;
  const body = (await readCmsDoc<CaseBodyDoc>(docId)) ?? {};
  const shared = {
    slug,
    cover: "",
    listCover: "",
    media: [] as string[],
    theme: { accent: "#ff7100" },
    ...(body.shared ?? {}),
  };

  if (typeof input.cover === "string") shared.cover = input.cover.trim();
  if (typeof input.listCover === "string") shared.listCover = input.listCover.trim();

  const next = { ...body, shared };
  await writeCmsDoc(docId, next);
  await syncCaseBodyIntoCatalogs(slug, next as never);

  const title =
    body.uk?.title || body.en?.title || body.ru?.title || slug;

  return {
    slug,
    title,
    cover: shared.cover,
    listCover: shared.listCover,
    cardSrc: shared.listCover || shared.cover || "",
  };
}
