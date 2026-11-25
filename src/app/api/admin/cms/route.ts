import { revalidatePath } from "next/cache";
import { createCmsPage } from "@/cms/create-page";
import type { CreatePageType } from "@/cms/page-types";
import { getCmsDocMeta, getCmsRegistry } from "@/cms/registry";
import { seedCmsFromCode } from "@/cms/seed";
import { listCmsDocIds, readCmsDoc, writeCmsDoc } from "@/cms/store";
import { syncBlogBodyIntoCatalogs } from "@/cms/sync-blog-catalogs";
import { syncCaseBodyIntoCatalogs } from "@/cms/sync-case-catalogs";
import { adminJson, requireAdminSession } from "@/lib/admin/http";
import type { Locale } from "@/i18n/config";

function bustPublicCache() {
  try {
    revalidatePath("/", "layout");
    revalidatePath("/uk", "layout");
    revalidatePath("/en", "layout");
    revalidatePath("/ru", "layout");
  } catch (error) {
    console.error("cms: revalidate failed", error);
  }
}

export async function GET(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    const registry = getCmsRegistry();
    const existing = new Set(await listCmsDocIds());
    return adminJson({
      ok: true,
      docs: registry.map((doc) => ({
        ...doc,
        seeded: existing.has(doc.id),
      })),
    });
  }

  const meta = getCmsDocMeta(id);
  if (!meta) {
    return adminJson({ ok: false, error: "unknown_doc" }, { status: 404 });
  }

  const data = await readCmsDoc(id);
  return adminJson({ ok: true, meta, data, seeded: data !== null });
}

export async function PUT(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  let body: { id?: string; data?: unknown };
  try {
    body = (await request.json()) as { id?: string; data?: unknown };
  } catch {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const id = body.id?.trim();
  if (!id || body.data === undefined) {
    return adminJson({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const meta = getCmsDocMeta(id);
  if (!meta) {
    return adminJson({ ok: false, error: "unknown_doc" }, { status: 404 });
  }

  await writeCmsDoc(id, body.data);

  if (id.startsWith("cases/body/")) {
    const slug = id.slice("cases/body/".length);
    await syncCaseBodyIntoCatalogs(slug, body.data as never);
  }

  if (id.startsWith("cases/catalog/")) {
    const locale = id.slice("cases/catalog/".length) as Locale;
    if (locale === "uk" || locale === "en" || locale === "ru") {
      const { syncCatalogMediaCaptions } = await import("@/lib/admin/media-captions");
      await syncCatalogMediaCaptions(locale, body.data as never);
    }
  }

  if (id.startsWith("blog/body/")) {
    const slug = id.slice("blog/body/".length);
    await syncBlogBodyIntoCatalogs(slug, body.data as never);
  }

  bustPublicCache();
  return adminJson({ ok: true });
}

export async function POST(request: Request) {
  const auth = await requireAdminSession();
  if (!auth.ok) return auth.response;

  let body: {
    action?: string;
    type?: CreatePageType;
    slug?: string;
    titles?: Partial<Record<Locale, string>>;
  } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    // empty body ok for seed
  }

  if (!body.action || body.action === "seed") {
    const result = await seedCmsFromCode();
    bustPublicCache();
    return adminJson({ ok: true, ...result });
  }

  if (body.action === "create") {
    try {
      const result = await createCmsPage({
        type: body.type as CreatePageType,
        slug: body.slug ?? "",
        titles: body.titles ?? {},
      });
      bustPublicCache();
      return adminJson({ ok: true, ...result });
    } catch (error) {
      const message = error instanceof Error ? error.message : "create_failed";
      const status =
        message === "already_exists" || message === "invalid_slug" ? 400 : 500;
      return adminJson({ ok: false, error: message }, { status });
    }
  }

  return adminJson({ ok: false, error: "unsupported" }, { status: 400 });
}
