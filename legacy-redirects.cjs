const serviceSlugs = [
  "branding",
  "marketing-360",
  "graphics",
  "smm",
  "illustration",
  "packaging",
  "influence-marketing",
  "identity",
  "naming",
  "positioning",
  "communication",
  "logo",
  "brandbook",
  "rebranding",
];

function toServiceUrlSlug(slug, locale) {
  if (slug === "marketing-360") {
    return locale === "uk" ? "marketing360" : "marketing-360";
  }
  return slug;
}

function buildLegacyRedirects() {
  const redirects = [
    { source: "/cases/:slug", destination: "/projects/:slug", permanent: true },
    { source: "/en/cases/:slug", destination: "/projects-eng/:slug", permanent: true },
    { source: "/ru/cases/:slug", destination: "/ru-projects/:slug", permanent: true },
    { source: "/ru/blog/:slug", destination: "/ru-blog/:slug", permanent: true },
    { source: "/ru/blog", destination: "/ru/blog-ru", permanent: true },
    {
      source: "/our-services/marketing-360",
      destination: "/our-services/marketing360",
      permanent: true,
    },
    {
      source: "/our-services-eng/marketing360",
      destination: "/our-services-eng/marketing-360",
      permanent: true,
    },
    {
      source: "/ru/services/marketing360",
      destination: "/ru/services/marketing-360",
      permanent: true,
    },
  ];

  for (const slug of serviceSlugs) {
    const ukUrlSlug = toServiceUrlSlug(slug, "uk");
    const enUrlSlug = toServiceUrlSlug(slug, "en");
    const ruUrlSlug = toServiceUrlSlug(slug, "ru");

    redirects.push({
      source: `/services/${slug}`,
      destination: `/our-services/${ukUrlSlug}`,
      permanent: true,
    });
    redirects.push({
      source: `/en/services/${slug}`,
      destination: `/our-services-eng/${enUrlSlug}`,
      permanent: true,
    });

    if (ukUrlSlug !== slug) {
      redirects.push({
        source: `/services/${ukUrlSlug}`,
        destination: `/our-services/${ukUrlSlug}`,
        permanent: true,
      });
    }

    if (enUrlSlug !== slug && enUrlSlug !== ukUrlSlug) {
      redirects.push({
        source: `/en/services/${enUrlSlug}`,
        destination: `/our-services-eng/${enUrlSlug}`,
        permanent: true,
      });
      redirects.push({
        source: `/our-services-eng/${ukUrlSlug}`,
        destination: `/our-services-eng/${enUrlSlug}`,
        permanent: true,
      });
    }

    if (ruUrlSlug !== slug && ruUrlSlug !== ukUrlSlug) {
      redirects.push({
        source: `/ru/services/${slug}`,
        destination: `/ru/services/${ruUrlSlug}`,
        permanent: true,
      });
    }
  }

  return redirects;
}

module.exports = { buildLegacyRedirects };
