"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AdminCreatePageForm } from "@/components/admin/AdminCreatePageForm";
import type { CmsDocMeta } from "@/cms/registry";
import type { CreatePageType } from "@/cms/page-types";

type DocRow = CmsDocMeta & { seeded: boolean };

type Props = {
  docs: DocRow[];
};

type SectionId = "home" | "services" | "cases" | "blog";

type PageCard = {
  key: string;
  title: string;
  subtitle?: string;
  href: string;
  previewPath?: string;
  seeded: boolean;
  badges?: string[];
  secondary?: Array<{ label: string; href: string }>;
};

const SECTIONS: Array<{
  id: SectionId;
  label: string;
  hint: string;
  createType?: CreatePageType;
  createLabel?: string;
}> = [
  {
    id: "home",
    label: "Головна",
    hint: "Тексти головної, SEO та клієнти — трьома мовами",
  },
  {
    id: "services",
    label: "Послуги",
    hint: "Сторінки послуг: тексти, фото, блоки UK / EN / RU",
    createType: "service",
    createLabel: "+ Нова послуга",
  },
  {
    id: "cases",
    label: "Кейси",
    hint: "Проєкти: обкладинки, галерея, підписи, контент",
    createType: "case",
    createLabel: "+ Новий кейс",
  },
  {
    id: "blog",
    label: "Блог",
    hint: "Статті блогу трьома мовами",
    createType: "blog",
    createLabel: "+ Нова стаття",
  },
];

const SERVICE_TITLES_UK: Record<string, string> = {
  branding: "Брендинг",
  "marketing-360": "Marketing 360",
  graphics: "Графічний дизайн",
  smm: "SMM",
  illustration: "Ілюстрація",
  packaging: "Упаковка",
  "influence-marketing": "Інфлюенс маркетинг",
  identity: "Айдентика",
  naming: "Неймінг",
  positioning: "Позиціонування",
  communication: "Слоган і комунікація",
  "brand-character": "Персонаж бренду",
  "web-development": "Веб-розробка",
  logo: "Логотип",
  brandbook: "Брендбук",
  rebranding: "Ребрендинг",
  "marketing-research": "Маркетингові дослідження",
  "motion-design": "Моушн-дизайн",
  "brand-audit": "Аудит бренду",
  "brand-voice": "Голос бренду",
  "font-design": "Дизайн шрифтів",
  presentations: "Дизайн презентацій",
  labels: "Дизайн етикеток",
  catalogs: "Дизайн каталогів",
  infographics: "Технічна інфографіка",
};

function humanSlug(slug: string): string {
  return SERVICE_TITLES_UK[slug] ?? slug.replace(/-/g, " ");
}

function buildSectionCards(docs: DocRow[], section: SectionId): PageCard[] {
  const byId = new Map(docs.map((doc) => [doc.id, doc]));

  if (section === "home") {
    const cards: PageCard[] = [
      {
        key: "home-ui",
        title: "Головна — тексти і UI",
        subtitle: "Словник: навігація, hero, форми, футер",
        href: "/admin/content/dictionary/uk",
        previewPath: "/",
        seeded: Boolean(byId.get("dictionary/uk")?.seeded),
        badges: ["UK", "EN", "RU"],
        secondary: [
          { label: "UK", href: "/admin/content/dictionary/uk" },
          { label: "EN", href: "/admin/content/dictionary/en" },
          { label: "RU", href: "/admin/content/dictionary/ru" },
        ],
      },
      {
        key: "home-seo",
        title: "SEO блоки головної",
        subtitle: "home-seo",
        href: "/admin/content/home-seo",
        previewPath: "/",
        seeded: Boolean(byId.get("home-seo")?.seeded),
      },
      {
        key: "clients",
        title: "Клієнти (логотипи)",
        subtitle: "clients",
        href: "/admin/content/clients",
        previewPath: "/",
        seeded: Boolean(byId.get("clients")?.seeded),
      },
      {
        key: "contact",
        title: "Контакти",
        subtitle: "Meta і тексти сторінки контактів",
        href: "/admin/content/contact/meta",
        previewPath: "/contact",
        seeded: Boolean(byId.get("contact/meta")?.seeded),
        badges: ["UK · EN · RU"],
      },
    ];
    return cards;
  }

  if (section === "services") {
    const serviceMap = new Map<
      string,
      { page?: DocRow; seo?: DocRow; text?: DocRow }
    >();

    for (const doc of docs) {
      const heavy = doc.id.match(/^services\/([^/]+)\/(page|seo)$/);
      if (heavy) {
        const slug = heavy[1]!;
        const kind = heavy[2] as "page" | "seo";
        const row = serviceMap.get(slug) ?? {};
        row[kind] = doc;
        serviceMap.set(slug, row);
        continue;
      }
      const text = doc.id.match(/^text-services\/(.+)$/);
      if (text) {
        const slug = text[1]!;
        const row = serviceMap.get(slug) ?? {};
        row.text = doc;
        serviceMap.set(slug, row);
      }
    }

    const cards: PageCard[] = Array.from(serviceMap.entries())
      .sort(([a], [b]) => humanSlug(a).localeCompare(humanSlug(b), "uk"))
      .map(([slug, row]) => {
        const main = row.page ?? row.text!;
        const seeded = Boolean(main?.seeded);
        const secondary: PageCard["secondary"] = [];
        if (row.page) secondary.push({ label: "Контент", href: `/admin/content/${row.page.id}` });
        if (row.seo) secondary.push({ label: "SEO", href: `/admin/content/${row.seo.id}` });
        if (row.text && !row.page) {
          secondary.push({ label: "Контент", href: `/admin/content/${row.text.id}` });
        }
        return {
          key: slug,
          title: humanSlug(slug),
          subtitle: `/services/${slug}`,
          href: `/admin/content/${main.id}`,
          previewPath: `/services/${slug}`,
          seeded,
          badges: row.page ? ["UK · EN · RU"] : ["text"],
          secondary,
        };
      });

    const settings: PageCard[] = [
      {
        key: "services-titles",
        title: "Назви послуг",
        subtitle: "services/titles",
        href: "/admin/content/services/titles",
        seeded: Boolean(byId.get("services/titles")?.seeded),
        badges: ["UK · EN · RU"],
      },
      {
        key: "services-index",
        title: "Меню послуг",
        subtitle: "services/index",
        href: "/admin/content/services/index",
        previewPath: "/services",
        seeded: Boolean(byId.get("services/index")?.seeded),
      },
      {
        key: "services-about",
        title: "Блок About на послугах",
        subtitle: "services/about",
        href: "/admin/content/services/about",
        seeded: Boolean(byId.get("services/about")?.seeded),
      },
    ];

    return [...cards, ...settings];
  }

  if (section === "cases") {
    const bodies = docs
      .filter((doc) => doc.id.startsWith("cases/body/"))
      .sort((a, b) => a.title.localeCompare(b.title, "uk"));

    const cards: PageCard[] = bodies.map((doc) => {
      const slug = doc.id.replace("cases/body/", "");
      return {
        key: doc.id,
        title: slug.replace(/-/g, " "),
        subtitle: `/projects/${slug}`,
        href: `/admin/content/${doc.id}`,
        previewPath: doc.previewPath,
        seeded: doc.seeded,
        badges: ["UK · EN · RU"],
        secondary: [{ label: "Обкладинки", href: "/admin/covers" }],
      };
    });

    cards.push(
      {
        key: "cases-published",
        title: "Порядок кейсів",
        subtitle: "Опубліковані slug",
        href: "/admin/content/cases/published",
        previewPath: "/projects",
        seeded: Boolean(byId.get("cases/published")?.seeded),
      },
      {
        key: "cases-covers",
        title: "Обкладинки (швидко)",
        subtitle: "listCover / cover для всіх кейсів",
        href: "/admin/covers",
        seeded: true,
      },
      {
        key: "cases-catalog-uk",
        title: "Каталог кейсів",
        subtitle: "Повний каталог з галереями",
        href: "/admin/content/cases/catalog/uk",
        previewPath: "/projects",
        seeded: Boolean(byId.get("cases/catalog/uk")?.seeded),
        badges: ["UK"],
        secondary: [
          { label: "UK", href: "/admin/content/cases/catalog/uk" },
          { label: "EN", href: "/admin/content/cases/catalog/en" },
          { label: "RU", href: "/admin/content/cases/catalog/ru" },
        ],
      },
    );

    return cards;
  }

  // blog
  const posts = docs
    .filter((doc) => doc.id.startsWith("blog/body/"))
    .sort((a, b) => a.title.localeCompare(b.title, "uk"));

  const cards: PageCard[] = posts.map((doc) => {
    const slug = doc.id.replace("blog/body/", "");
    return {
      key: doc.id,
      title: slug.replace(/-/g, " "),
      subtitle: `/blog/${slug}`,
      href: `/admin/content/${doc.id}`,
      previewPath: doc.previewPath,
      seeded: doc.seeded,
      badges: ["UK · EN · RU"],
    };
  });

  cards.push({
    key: "blog-meta",
    title: "Meta індексу блогу",
    subtitle: "blog/meta",
    href: "/admin/content/blog/meta",
    previewPath: "/blog",
    seeded: Boolean(byId.get("blog/meta")?.seeded),
    badges: ["UK · EN · RU"],
  });

  return cards;
}

export function AdminContentList({ docs }: Props) {
  const [section, setSection] = useState<SectionId>("services");
  const [query, setQuery] = useState("");
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const active = SECTIONS.find((item) => item.id === section)!;
  const cards = useMemo(() => {
    const all = buildSectionCards(docs, section);
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.subtitle?.toLowerCase().includes(q) ||
        card.key.toLowerCase().includes(q),
    );
  }, [docs, section, query]);

  async function seed() {
    setSeeding(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seed" }),
      });
      const json = (await response.json()) as { ok?: boolean; count?: number };
      if (!response.ok || !json.ok) {
        setMessage("Seed не вдався");
        return;
      }
      setMessage(`Засіяно документів: ${json.count ?? 0}`);
      window.location.reload();
    } catch {
      setMessage("Помилка мережі під час seed");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <>
      <div className="admin-section-tabs" role="tablist" aria-label="Розділи контенту">
        {SECTIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={section === item.id}
            className={`admin-section-tab${section === item.id ? " is-active" : ""}`}
            onClick={() => setSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="admin-section-head">
        <div>
          <h2 className="admin-section-title">{active.label}</h2>
          <p className="admin-muted" style={{ margin: 0 }}>
            {active.hint}
          </p>
        </div>
        <div className="admin-section-actions">
          {active.createType ? (
            <AdminCreatePageForm
              defaultType={active.createType}
              buttonLabel={active.createLabel}
              lockType
            />
          ) : null}
          <button type="button" className="admin-btn admin-btn-secondary" disabled={seeding} onClick={seed}>
            {seeding ? "Seed…" : "Засіяти з коду"}
          </button>
        </div>
      </div>

      <div className="admin-filters">
        <input
          className="admin-input"
          placeholder={`Пошук у розділі «${active.label}»…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {message ? <p className="admin-toast">{message}</p> : null}

      <div className="admin-page-grid">
        {cards.map((card) => (
          <article key={card.key} className="admin-page-card">
            <div className="admin-page-card-top">
              <div>
                <h3>
                  <Link href={card.href}>{card.title}</Link>
                </h3>
                {card.subtitle ? <p className="admin-muted">{card.subtitle}</p> : null}
              </div>
              <span
                className={`admin-badge${card.seeded ? "" : ""}`}
                style={
                  card.seeded
                    ? { background: "rgba(16,185,129,.12)", color: "#047857" }
                    : undefined
                }
              >
                {card.seeded ? "ok" : "no seed"}
              </span>
            </div>

            {card.badges?.length ? (
              <div className="admin-page-card-badges">
                {card.badges.map((badge) => (
                  <span key={badge} className="admin-chip">
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="admin-page-card-actions">
              <Link className="admin-btn" href={card.href}>
                Редагувати
              </Link>
              {card.previewPath ? (
                <a
                  className="admin-btn admin-btn-secondary"
                  href={card.previewPath}
                  target="_blank"
                  rel="noreferrer"
                >
                  На сайті
                </a>
              ) : null}
              {card.secondary?.map((item) => (
                <Link key={item.href + item.label} className="admin-btn admin-btn-secondary" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>

      {cards.length === 0 ? <p className="admin-muted">Нічого не знайдено в цьому розділі.</p> : null}
    </>
  );
}
