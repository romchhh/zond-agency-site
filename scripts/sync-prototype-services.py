#!/usr/bin/env python3
"""Extract UK copy from zond-* HTML prototypes into i18n TS + public assets."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]

SERVICES: list[tuple[str, str, str, str]] = [
    ("communication", "zond-communication-page-code-and-images", "index.html", "assets"),
    ("identity", "zond-identity-page-code-and-images", "index.html", "assets"),
    ("positioning", "zond-positioning-page-code-and-images", "index.html", "assets"),
    ("naming", "zond-naming-page-code", "dist/index.html", "dist/assets"),
    ("brand-character", "zond-brand-character-page-code-and-images", "index.html", "assets"),
    ("web-development", "zond-webdev-page-code-and-images", "index.html", "assets"),
]

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}

RELATED: dict[str, list[dict[str, str]]] = {
    "communication": [
        {"title": "Брендинг", "slug": "branding"},
        {"title": "Позиціонування", "slug": "positioning"},
        {"title": "Айдентика", "slug": "identity"},
    ],
    "identity": [
        {"title": "Логотип", "slug": "logo"},
        {"title": "Брендбук", "slug": "brandbook"},
        {"title": "Брендинг", "slug": "branding"},
    ],
    "positioning": [
        {"title": "Неймінг", "slug": "naming"},
        {"title": "Комунікація", "slug": "communication"},
        {"title": "Брендинг", "slug": "branding"},
    ],
    "naming": [
        {"title": "Брендинг", "slug": "branding"},
        {"title": "Позиціонування", "slug": "positioning"},
        {"title": "Логотип", "slug": "logo"},
    ],
    "brand-character": [
        {"title": "Ілюстрація", "slug": "illustration"},
        {"title": "Айдентика", "slug": "identity"},
        {"title": "Брендинг", "slug": "branding"},
    ],
    "web-development": [
        {"title": "Брендинг", "slug": "branding"},
        {"title": "Айдентика", "slug": "identity"},
        {"title": "SMM", "slug": "smm"},
    ],
}

EN_EYEBROW: dict[str, str] = {
    "communication": "Services / Slogan & communication",
    "identity": "Services / Brand identity",
    "positioning": "Services / Positioning",
    "naming": "Services / Naming",
    "brand-character": "Services / Brand character",
    "web-development": "Services / Web development",
}

RU_EYEBROW: dict[str, str] = {
    "communication": "Услуги / Слоган и коммуникация",
    "identity": "Услуги / Айдентика",
    "positioning": "Услуги / Позиционирование",
    "naming": "Услуги / Нейминг",
    "brand-character": "Услуги / Персонаж бренда",
    "web-development": "Услуги / Веб-разработка",
}

COMPARE_ROWS = [
    {
        "criterion": "Підхід",
        "zond": "Під задачу й систему бренду",
        "freelance": "Окремий макет",
        "generator": "Універсальний шаблон",
    },
    {
        "criterion": "Стратегія",
        "zond": "Дослідження та логіка",
        "freelance": "Не завжди",
        "generator": "Немає",
    },
    {
        "criterion": "Стиль",
        "zond": "Єдина система",
        "freelance": "Стиль автора",
        "generator": "Схожий на інших",
    },
    {
        "criterion": "Результат",
        "zond": "Готово до використання",
        "freelance": "Залежить від досвіду",
        "generator": "Потрібна доробка",
    },
]


def parse_h1(h1) -> tuple[str, str]:
    lines: list[str] = []
    accent = ""
    buf: list[str] = []

    for child in h1.children:
        name = getattr(child, "name", None)
        if name == "br":
            lines.append("".join(buf).strip())
            buf = []
        elif name == "span":
            accent = child.get_text(strip=True)
        else:
            buf.append(child.get_text() if name else str(child))
    tail = "".join(buf).strip()
    if tail:
        lines.append(tail)

    lines = [x for x in lines if x]
    if not lines:
        return h1.get_text(strip=True), accent
    title = lines[0]
    rest = lines[1:]
    if accent:
        rest.append(accent)
    title_accent = " ".join(rest).strip() or accent
    return title, title_accent


def parse_feature(h2, body_p) -> dict[str, str]:
    eyebrow_el = h2.find_previous("p", class_="section-label")
    eyebrow = eyebrow_el.get_text(strip=True) if eyebrow_el else "ОСНОВА ДЛЯ РІШЕНЬ"
    em = h2.find("em")
    if em:
        title_accent = em.get_text(strip=True)
        title_line = h2.get_text().replace(title_accent, "").strip()
        title_line = re.sub(r"\s+", " ", title_line)
    else:
        parts = [p.strip() for p in h2.get_text().split("\n") if p.strip()]
        title_line = parts[0] if parts else ""
        title_accent = parts[1] if len(parts) > 1 else ""
    return {
        "eyebrow": eyebrow,
        "titleLine": title_line,
        "titleAccent": title_accent,
        "body": body_p.get_text(strip=True),
    }


def asset_public_path(slug: str, asset_src: str) -> str:
    name = Path(asset_src).name
    return f"/services/{slug}/{name}"


def extract(slug: str, folder: str, html_rel: str, assets_rel: str) -> dict:
    html_path = ROOT / folder / html_rel
    assets_dir = ROOT / folder / assets_rel
    soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")

    meta_title = soup.find("meta", attrs={"name": "title"})
    meta_desc = soup.find("meta", attrs={"name": "description"})
    title_tag = soup.find("title")

    hero = soup.select_one(".hero")
    eyebrow = hero.select_one(".eyebrow").get_text(strip=True)
    h1 = hero.find("h1")
    title, title_accent = parse_h1(h1)
    lead = hero.select_one(".lead").get_text(strip=True)
    hero_bottom_ps = hero.select(".hero-bottom p")
    sub = hero_bottom_ps[1].get_text(strip=True) if len(hero_bottom_ps) > 1 else ""
    cta_btn = hero.select_one(".orange-button")
    cta = cta_btn.get_text(strip=True).replace("↗", "").strip() if cta_btn else "Обговорити проєкт"
    hero_img = hero.select_one(".hero-image img")
    hero_alt = hero_img.get("alt", "")
    hero_src = hero_img.get("src", "")
    hero_caption = hero.select_one(".hero-image figcaption")
    hero_caption_text = hero_caption.get_text(strip=True) if hero_caption else ""

    metrics = soup.select_one(".metrics")
    metrics_title = metrics.find("h2").get_text(strip=True)
    stats = []
    for metric in metrics.select(".metric"):
        strong = metric.find("strong")
        span = metric.find("span")
        label = span.get_text(strip=True) if span else ""
        stats.append({"value": strong.get_text(strip=True), "label": label})

    service_sec = soup.select_one("#service")
    includes_title = service_sec.select_one(".section-heading h2, h2").get_text(strip=True)
    includes_sub_el = service_sec.select_one(".section-heading p")
    includes_subtitle = includes_sub_el.get_text(strip=True) if includes_sub_el else ""

    include_cards = []
    for card in service_sec.select(".service-card"):
        idx = card.select_one(".service-index").get_text(strip=True)
        h3 = card.find("h3").get_text(strip=True)
        desc = card.select_one(".service-copy p").get_text(strip=True)
        img = card.select_one(".service-visual img")
        include_cards.append(
            {
                "index": idx,
                "title": h3,
                "description": desc,
                "image": asset_public_path(slug, img.get("src", "")),
                "alt": img.get("alt", h3),
            }
        )

    needs_sec = None
    for sec in soup.select(".page-body .section"):
        h2 = sec.find("h2")
        if h2 and sec.select_one(".need-grid"):
            needs_sec = sec
            break
    needs_title = needs_sec.find("h2").get_text(strip=True)
    needs_items = []
    for art in needs_sec.select(".need-grid article"):
        needs_items.append(
            {
                "index": art.find("span").get_text(strip=True),
                "title": art.find("h3").get_text(strip=True),
                "description": art.find("p").get_text(strip=True),
            }
        )

    feature_sec = soup.select_one(".feature")
    feature_h2 = feature_sec.find("h2")
    feature_p = feature_sec.select_one(".feature-grid > p, .wrap > p")
    if not feature_p:
        feature_p = feature_sec.find("p", class_=lambda c: c != "section-label")
    feature = parse_feature(feature_h2, feature_p)

    cases_sec = soup.select_one("#cases")
    cases_title = cases_sec.select_one(".section-heading h2, h2").get_text(strip=True)
    cases_sub_el = cases_sec.select_one(".section-heading p")
    cases_subtitle = cases_sub_el.get_text(strip=True) if cases_sub_el else ""

    reviews_sec = soup.select_one(".review-section")
    reviews_label = reviews_sec.select_one(".section-label")
    reviews_eyebrow = reviews_label.get_text(strip=True) if reviews_label else ""
    reviews_title = reviews_sec.select_one(".section-heading h2, h2").get_text(strip=True)
    reviews_note = reviews_sec.select_one(".section-heading p").get_text(strip=True)
    reviews = []
    for block in reviews_sec.select(".review"):
        label = block.find("span").get_text(strip=True)
        quote = block.find("p").get_text(strip=True)
        footer = block.find("footer")
        name = footer.get_text(strip=True) if footer else ""
        small = footer.find("small")
        role = small.get_text(strip=True) if small else ""
        if small and name.endswith(role):
            name = name[: -len(role)].strip()
        reviews.append({"label": label, "quote": quote, "name": name, "role": role})

    products_sec = None
    for sec in soup.select(".page-body .section"):
        if sec.select_one(".use-gallery"):
            products_sec = sec
            break
    products_title = products_sec.select_one(".section-heading h2, h2").get_text(strip=True)
    products_note = products_sec.select_one(".section-heading p").get_text(strip=True)
    products = []
    for fig in products_sec.select(".use-gallery figure"):
        img = fig.find("img")
        cap = fig.find("figcaption")
        products.append(
            {
                "src": asset_public_path(slug, img.get("src", "")),
                "alt": img.get("alt", ""),
                "caption": cap.get_text(strip=True) if cap else "",
            }
        )

    process_sec = soup.select_one("#process")
    process_title = process_sec.find("h2").get_text(strip=True)
    process = []
    for art in process_sec.select(".process-grid article"):
        process.append(
            {
                "index": art.find("span").get_text(strip=True),
                "title": art.find("h3").get_text(strip=True),
                "description": art.find("p").get_text(strip=True),
                "duration": "",
            }
        )

    editorial_sec = soup.select_one("section.editorial")
    editorial_eyebrow = ""
    editorial_title = ""
    if editorial_sec:
        label = editorial_sec.select_one(".section-label")
        editorial_eyebrow = label.get_text(strip=True) if label else ""
        h2 = editorial_sec.find("h2")
        editorial_title = h2.get_text(strip=True) if h2 else ""

    editorial = []
    for art in soup.select(".editorial-grid article"):
        paragraphs = [p.get_text(strip=True) for p in art.find_all("p")]
        editorial.append({"title": art.find("h3").get_text(strip=True), "paragraphs": paragraphs})

    deliverables_sec = soup.select_one("section.deliverables")
    deliverables_eyebrow = ""
    deliverables_title = ""
    deliverables_note = ""
    if deliverables_sec:
        label = deliverables_sec.select_one(".section-label")
        deliverables_eyebrow = label.get_text(strip=True) if label else ""
        h2 = deliverables_sec.find("h2")
        deliverables_title = h2.get_text(strip=True) if h2 else ""
        fineprint = deliverables_sec.select_one(".fineprint")
        deliverables_note = fineprint.get_text(strip=True) if fineprint else ""

    deliverables = []
    for item in soup.select(".deliverable-grid > div"):
        deliverables.append(item.find("p").get_text(strip=True))

    faq_sec = soup.select_one("#faq")
    faq_title = faq_sec.find("h2").get_text(strip=True)
    faq = []
    for det in faq_sec.select("details"):
        faq.append(
            {
                "question": det.find("summary").get_text(strip=True).replace("+", "").strip(),
                "answer": det.find("p").get_text(strip=True),
            }
        )

    cta_sec = soup.select_one(".cta .cta-panel")
    cta_h2 = cta_sec.find("h2")
    cta_title = cta_h2.get_text("\n", strip=True).replace("\n", " ")
    cta_text = cta_sec.find("p", class_=lambda c: c != "section-label").get_text(strip=True)

    page_meta_title = meta_title["content"] if meta_title else (title_tag.get_text(strip=True) if title_tag else "")
    page_meta_desc = meta_desc["content"] if meta_desc else ""

    return {
        "slug": slug,
        "meta": {"title": page_meta_title, "description": page_meta_desc},
        "hero": {
            "eyebrow": eyebrow,
            "title": title,
            "titleAccent": title_accent,
            "lead": lead,
            "sub": sub,
            "cta": cta,
            "heroAlt": hero_alt,
            "heroCaption": hero_caption_text,
            "heroImage": asset_public_path(slug, hero_src),
        },
        "metricsTitle": metrics_title,
        "stats": stats,
        "includesTitle": includes_title,
        "includesSubtitle": includes_subtitle,
        "includeCards": include_cards,
        "includes": deliverables,
        "audienceTitle": needs_title,
        "audienceItems": needs_items,
        "featureStrip": feature,
        "casesTitle": cases_title,
        "casesSubtitle": cases_subtitle,
        "reviewsEyebrow": reviews_eyebrow,
        "reviewsTitle": reviews_title,
        "reviewsNote": reviews_note,
        "reviews": reviews,
        "productTitle": products_title,
        "productNote": products_note,
        "products": products,
        "processTitle": process_title,
        "process": process,
        "editorial": editorial,
        "editorialEyebrow": editorial_eyebrow,
        "editorialTitle": editorial_title,
        "deliverables": deliverables,
        "deliverablesEyebrow": deliverables_eyebrow,
        "deliverablesTitle": deliverables_title,
        "deliverablesNote": deliverables_note,
        "formTitle": cta_title,
        "formDescription": cta_text,
        "faqTitle": faq_title,
        "faq": faq,
    }


def ts_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def page_export_name(slug: str) -> str:
    parts = slug.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:]) + "Page"


def seo_export_name(slug: str) -> str:
    parts = slug.split("-")
    base = parts[0] + "".join(p.capitalize() for p in parts[1:])
    return f"get{base[0].upper()}{base[1:]}Seo"


def write_page_ts(slug: str, data: dict) -> None:
    export_name = page_export_name(slug)
    related = RELATED.get(slug, RELATED["communication"])

    why_items = []
    if data["featureStrip"]:
        why_items.append(
            {
                "title": f"{data['featureStrip']['titleLine']} {data['featureStrip']['titleAccent']}".strip(),
                "description": data["featureStrip"]["body"],
            }
        )
    for ed in data["editorial"][:3]:
        why_items.append({"title": ed["title"], "description": ed["paragraphs"][0] if ed["paragraphs"] else ""})

    lines: list[str] = []
    lines.append('import type { Locale } from "@/i18n/config";')
    lines.append('import type { ServicePageContent } from "@/i18n/logo";')
    lines.append("")
    lines.append("const uk: ServicePageContent = {")
    h = data["hero"]
    lines.append(f"  eyebrow: {ts_string(h['eyebrow'])},")
    lines.append(f"  title: {ts_string(h['title'])},")
    lines.append(f"  titleAccent: {ts_string(h['titleAccent'])},")
    lines.append(f"  lead: {ts_string(h['lead'])},")
    lines.append(f"  sub: {ts_string(h['sub'])},")
    lines.append(f"  cta: {ts_string(h['cta'])},")
    lines.append(f"  heroAlt: {ts_string(h['heroAlt'])},")
    lines.append(f"  heroCaption: {ts_string(h['heroCaption'])},")
    lines.append(f"  metricsTitle: {ts_string(data['metricsTitle'])},")
    lines.append(f"  stats: {json.dumps(data['stats'], ensure_ascii=False, indent=4)},")
    lines.append(f"  audienceTitle: {ts_string(data['audienceTitle'])},")
    lines.append(f"  audienceItems: {json.dumps(data['audienceItems'], ensure_ascii=False, indent=4)},")
    fs = data["featureStrip"]
    lines.append("  featureStrip: {")
    lines.append(f"    eyebrow: {ts_string(fs['eyebrow'])},")
    lines.append(f"    titleLine: {ts_string(fs['titleLine'])},")
    lines.append(f"    titleAccent: {ts_string(fs['titleAccent'])},")
    lines.append(f"    body: {ts_string(fs['body'])},")
    lines.append("  },")
    lines.append(f"  includesTitle: {ts_string(data['includesTitle'])},")
    if data.get("includesSubtitle"):
        lines.append(f"  includesSubtitle: {ts_string(data['includesSubtitle'])},")
    lines.append(f"  includes: {json.dumps(data['includes'], ensure_ascii=False, indent=4)},")
    lines.append(f"  deliverables: {json.dumps(data['deliverables'], ensure_ascii=False, indent=4)},")
    if data.get("deliverablesEyebrow"):
        lines.append(f"  deliverablesEyebrow: {ts_string(data['deliverablesEyebrow'])},")
    if data.get("deliverablesTitle"):
        lines.append(f"  deliverablesTitle: {ts_string(data['deliverablesTitle'])},")
    if data.get("deliverablesNote"):
        lines.append(f"  deliverablesNote: {ts_string(data['deliverablesNote'])},")
    lines.append(f"  includeCards: {json.dumps(data['includeCards'], ensure_ascii=False, indent=4)},")
    lines.append(f"  casesTitle: {ts_string(data['casesTitle'])},")
    if data.get("casesSubtitle"):
        lines.append(f"  casesSubtitle: {ts_string(data['casesSubtitle'])},")
    lines.append(f"  processTitle: {ts_string(data['processTitle'])},")
    lines.append(f"  process: {json.dumps(data['process'], ensure_ascii=False, indent=4)},")
    lines.append('  teamTitle: "Хто веде проєкт",')
    lines.append(f"  whyTitle: {ts_string(fs['titleLine'])},")
    lines.append(f"  whyItems: {json.dumps(why_items, ensure_ascii=False, indent=4)},")
    lines.append('  compareTitle: "Чому ZOND, а не шаблон чи разовий макет?",')
    lines.append('  compareColumns: ["Критерій", "ZOND", "Фриланс", "Шаблон"],')
    lines.append(f"  compareRows: {json.dumps(COMPARE_ROWS, ensure_ascii=False, indent=4)},")
    lines.append(f"  reviewsEyebrow: {ts_string(data['reviewsEyebrow'])},")
    lines.append(f"  reviewsTitle: {ts_string(data['reviewsTitle'])},")
    lines.append(f"  reviewsNote: {ts_string(data['reviewsNote'])},")
    lines.append(f"  reviews: {json.dumps(data['reviews'], ensure_ascii=False, indent=4)},")
    lines.append(f"  productTitle: {ts_string(data['productTitle'])},")
    lines.append(f"  productNote: {ts_string(data['productNote'])},")
    lines.append(f"  products: {json.dumps(data['products'], ensure_ascii=False, indent=4)},")
    lines.append(f"  formTitle: {ts_string(data['formTitle'])},")
    lines.append(f"  formDescription: {ts_string(data['formDescription'])},")
    lines.append(f"  faqTitle: {ts_string(data['faqTitle'])},")
    lines.append(f"  faq: {json.dumps(data['faq'], ensure_ascii=False, indent=4)},")
    lines.append('  relatedTitle: "Суміжні послуги",')
    lines.append(f"  related: {json.dumps(related, ensure_ascii=False, indent=4)},")
    lines.append("};")
    lines.append("")
    lines.append("const en: ServicePageContent = {")
    lines.append("  ...uk,")
    lines.append(f"  eyebrow: {ts_string(EN_EYEBROW[slug])},")
    lines.append('  cta: "Discuss the project",')
    lines.append('  teamTitle: "Who leads the project",')
    lines.append('  relatedTitle: "Related services",')
    lines.append('  compareColumns: ["Criterion", "ZOND", "Freelance", "Template"],')
    lines.append("};")
    lines.append("")
    lines.append("const ru: ServicePageContent = {")
    lines.append("  ...uk,")
    lines.append(f"  eyebrow: {ts_string(RU_EYEBROW[slug])},")
    lines.append('  cta: "Обсудить проект",')
    lines.append('  teamTitle: "Кто ведёт проект",')
    lines.append('  relatedTitle: "Смежные услуги",')
    lines.append('  compareColumns: ["Критерий", "ZOND", "Фриланс", "Шаблон"],')
    lines.append("};")
    lines.append("")
    lines.append(f"export const {export_name}: Record<Locale, ServicePageContent> = {{ uk, en, ru }};")
    lines.append("")

    out = ROOT / "src" / "i18n" / f"{slug}.ts"
    out.write_text("\n".join(lines), encoding="utf-8")


def write_seo_ts(slug: str, data: dict) -> None:
    fn = seo_export_name(slug)

    sections = []
    for ed in data["editorial"]:
        blocks = [{"kind": "p", "text": p} for p in ed["paragraphs"]]
        sections.append({"title": ed["title"], "blocks": blocks})

    uk_seo: dict = {"spoilerLabel": "Детальніше", "sections": sections}
    if data.get("editorialEyebrow"):
        uk_seo["editorialEyebrow"] = data["editorialEyebrow"]
    if data.get("editorialTitle"):
        uk_seo["editorialTitle"] = data["editorialTitle"]

    lines = [
        'import type { BrandingSeoContent } from "@/i18n/branding-seo";',
        'import type { Locale } from "@/i18n/config";',
        "",
        f"const uk: BrandingSeoContent = {json.dumps(uk_seo, ensure_ascii=False, indent=2)};",
        "",
        "const en: BrandingSeoContent = { ...uk, spoilerLabel: \"Learn more\" };",
        "",
        "const ru: BrandingSeoContent = { ...uk, spoilerLabel: \"Подробнее\" };",
        "",
        f"const seo: Record<Locale, BrandingSeoContent> = {{ uk, en, ru }};",
        "",
        f"export function {fn}(locale: Locale): BrandingSeoContent {{",
        "  return seo[locale];",
        "}",
        "",
    ]
    (ROOT / "src" / "i18n" / f"{slug}-seo.ts").write_text("\n".join(lines), encoding="utf-8")


def copy_assets(slug: str, folder: str, assets_rel: str) -> None:
    src_dir = ROOT / folder / assets_rel
    dest = ROOT / "public" / "services" / slug
    dest.mkdir(parents=True, exist_ok=True)
    for path in src_dir.iterdir():
        if path.suffix.lower() in IMAGE_EXTS:
            shutil.copy2(path, dest / path.name)


def main() -> None:
    extracted_dir = ROOT / "scripts" / "extracted-services"
    extracted_dir.mkdir(parents=True, exist_ok=True)

    for slug, folder, html_rel, assets_rel in SERVICES:
        data = extract(slug, folder, html_rel, assets_rel)
        (extracted_dir / f"{slug}.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        copy_assets(slug, folder, assets_rel)
        write_page_ts(slug, data)
        write_seo_ts(slug, data)
        print(f"synced {slug}")


if __name__ == "__main__":
    main()
