import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import type { CustomPageContent } from "@/cms/custom-pages";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
  slug: string;
  content: CustomPageContent;
};

export default function CustomCmsPage({ locale, dictionary, slug, content }: Props) {
  const paragraphs = content.body
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64 }}>
          <PageBreadcrumbs
            items={[
              { label: "ZOND", href: getLocalePath(locale, "/") },
              { label: content.title },
            ]}
          />
          <h1 className="section-title" style={{ marginTop: 18 }}>
            {content.title}
          </h1>
          {content.description ? (
            <p style={{ color: "var(--muted-2)", maxWidth: "60ch", marginTop: 10 }}>
              {content.description}
            </p>
          ) : null}
          <div style={{ marginTop: 28, display: "grid", gap: 16, maxWidth: "70ch" }}>
            {paragraphs.length ? (
              paragraphs.map((paragraph) => (
                <p key={`${slug}-${paragraph.slice(0, 24)}`} style={{ margin: 0, lineHeight: 1.6 }}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p style={{ color: "var(--muted)" }}>Контент ще не заповнено.</p>
            )}
          </div>
        </div>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
