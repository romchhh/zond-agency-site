import { getHomeSeoContent } from "@/i18n/home-seo";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

type HomeSeoBlockProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function HomeSeoBlock({ locale, dictionary }: HomeSeoBlockProps) {
  const blocks = getHomeSeoContent(locale);

  return (
    <section className="section home-seo-block">
      <div className="wrap">
        <h1 className="home-seo-title">{dictionary.meta.h1}</h1>
        <div className="home-seo-body">
          {blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="home-seo-subtitle">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="home-seo-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="home-seo-copy">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
