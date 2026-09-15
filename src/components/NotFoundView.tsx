import Header from "@/components/Header";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { getLocalePath } from "@/i18n/routing";
import Link from "next/link";

type NotFoundViewProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function NotFoundView({ locale, dictionary }: NotFoundViewProps) {
  const homePath = getLocalePath(locale);
  const { notFound } = dictionary;

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="not-found-page">
        <div className="wrap not-found-wrap">
          <div className="not-found-card">
            <p className="not-found-code" aria-hidden="true">404</p>
            <h1>{notFound.title}</h1>
            <p className="not-found-copy">{notFound.description}</p>

            <div className="not-found-actions">
              <Link className="not-found-btn not-found-btn--primary" href={homePath}>
                <span>{notFound.backHome}</span>
                <span className="not-found-btn-icon" aria-hidden="true">↗</span>
              </Link>

              <div className="not-found-secondary">
                <Link
                  className="not-found-btn not-found-btn--ghost"
                  href={`${homePath}#projects`}
                >
                  {notFound.viewCases}
                </Link>
                <Link
                  className="not-found-btn not-found-btn--ghost"
                  href={`${homePath}#services`}
                >
                  {notFound.ourServices}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
