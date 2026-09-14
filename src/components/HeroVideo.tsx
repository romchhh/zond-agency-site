import LazyYouTube from "@/components/LazyYouTube";

export default function HeroVideo() {
  return (
    <section className="hero-video" aria-label="Відео про ZOND">
      <div className="wrap">
        <LazyYouTube
          videoId="zCCJfr5r4dQ"
          title="ZOND — відео"
          start={4}
        />
      </div>
    </section>
  );
}
