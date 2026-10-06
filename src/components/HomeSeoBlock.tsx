import type { Dictionary } from "@/i18n/dictionary";

type HomeSeoBlockProps = {
  dictionary: Dictionary;
};

export default function HomeSeoBlock({ dictionary }: HomeSeoBlockProps) {
  return (
    <section className="section home-seo-block">
      <div className="wrap">
        <h1 className="home-seo-title">{dictionary.meta.h1}</h1>
        <p className="home-seo-copy">{dictionary.meta.description}</p>
      </div>
    </section>
  );
}
