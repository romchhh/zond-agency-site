export default function HeroVideo() {
  return (
    <section className="hero-video" aria-label="Відео про ZOND">
      <div className="wrap">
        <div className="hero-video-frame">
          <iframe
            src="https://www.youtube.com/embed/zCCJfr5r4dQ?start=4"
            title="ZOND — відео"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
