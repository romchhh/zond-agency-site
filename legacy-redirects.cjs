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
  "brand-character",
  "web-development",
  "logo",
  "brandbook",
  "rebranding",
];

/** Old www.zond.agency paths → current public paths. Permanent (308). */
const oldSiteRedirects = [
  ["/blog/aydentika-brenda-chto-eto-i-kak-s-ney-rabotat", "/ru-blog/brand-identity-basics"],
  ["/blog/emblema-i-logotip-vidminnosti-ta-shozhosti", "/blog/emblem-vs-logo"],
  ["/blog/emblema-i-logotip-otlichiya-i-shodstva", "/ru-blog/emblem-vs-logo"],
  ["/blog/aydentika-brendu-shcho-ce-ta-yak-z-neyu-pracyuvati", "/blog/brand-identity-basics"],
  ["/blog/evolyuciya-logotipov-ot-simvolov-do-sovremennogo-dizayna", "/ru-blog/logo-evolution"],
  ["/blog/evolyuciya-logotipiv-vid-simvoliv-do-suchasnogo-dizaynu", "/blog/logo-evolution"],
  ["/our-services/logo-2", "/ru/services/logo"],
  ["/our-services/brandbook-2", "/ru/services/brandbook"],
  ["/blog/logotip-chto-eto-zachem-on-nuzhen-i-kakim-on-byvaet", "/ru-blog/what-is-a-logo"],
  ["/our-services/smm-2", "/ru/services/smm"],
  ["/ru/home", "/ru"],
  ["/our-services/brending-2", "/ru/services/branding"],
  ["/blog/kak-uluchshit-svoy-logotip-bez-kardinalnyh-izmeneniy", "/ru-blog/improve-logo-without-changes"],
  ["/blog/dizayn-i-marketing-chomu-odne-bez-inshogo-nemozhlive", "/blog/design-and-marketing"],
  ["/en/home", "/en"],
  ["/blog/naming", "/blog/naming-guide"],
  ["/our-services/upakovka", "/ru/services/packaging"],
  ["/blog/dizayn-i-marketing-pochemu-odno-bez-drugogo-nevozmozhno", "/ru-blog/design-and-marketing"],
  ["/blog/suchasni-rishennya-v-dizayni-upakovki-innovaciyi-ta-trendi", "/blog/packaging-design-trends"],
  ["/projects/pridniprovskiy-zavod-gofrotari", "/cases"],
  ["/blog/brendbuk-dlya-medicinskih-uchrezhdeniy-pochemu-on-neobhodim-i-kakie-osobennosti-uchest", "/ru-blog/brandbook-for-medical"],
  ["/blog/brendingovoe-agentstvo-chto-eto-chem-zanimaetsya-i-chem-mozhet-pomoch-biznesu", "/ru-blog/what-is-branding-agency"],
  ["/blog/chto-vhodit-v-professionalnyy-brendbuk-cheklist-dlya-vashego-biznesa", "/ru-blog/brandbook-checklist"],
  ["/blog/brandbook-ru", "/ru-blog/what-is-a-brandbook"],
  ["/blog/yak-pokrashchiti-sviy-logotip-bez-kardinalnih-zmin", "/blog/improve-logo-without-changes"],
  ["/graphics", "/our-services/graphics"],
  ["/blog/good-logo", "/blog/good-vs-bad-logo"],
  ["/blog/good-logo-ru", "/ru-blog/good-vs-bad-logo"],
  ["/blog/brandbook", "/blog/what-is-a-brandbook"],
  ["/blog/klyuchovi-osoblivosti-brendbuku", "/blog/brandbook-key-features"],
  ["/projects/akula-mama", "/cases"],
  ["/blog/brendbuk-dlya-zavedeniy-pitaniya-klyuchevye-osobennosti-i-znachenie", "/ru-blog/brandbook-for-restaurants"],
  ["/blog/marketing-360-dlya-vashego-biznesa", "/ru-blog/marketing-360"],
  ["/blog/sovremennye-resheniya-v-dizayne-upakovki-innovacii-i-trendy", "/ru-blog/packaging-design-trends"],
  ["/our-services/illyustraciya", "/ru/services/illustration"],
  ["/projects/pridneprovskiy-zavod-gofrotary", "/ru/cases"],
  ["/ru-projects/yakomoga", "/ru/cases"],
  ["/projects-eng/alesta-corp", "/en/cases"],
  ["/blog/design-packing", "/blog/packaging-design-benefits"],
  ["/en/portfolio/medeus-eng", "/en/cases"],
  ["/our-services/grafika", "/ru/services/graphics"],
  ["/projects/goshchanochka-ru", "/ru/cases"],
  ["/projects-eng/teamiq", "/en/cases"],
  ["/blog/chomu-brendbuk-ce-osnova-uspihu-vashogo-biznesu", "/blog/brandbook-business-success"],
  ["/projects-eng/valtex", "/en/cases"],
  ["/blog/brendbuk-dlya-agentstv-nedvizhimosti", "/ru-blog/brandbook-for-real-estate"],
  ["/ru-blog/evolyuciya-logotipov-ot-simvolov-do-sovremennogo-dizayna", "/ru-blog/logo-evolution"],
  ["/blog/logotip-shcho-ce-navishcho-vin-potriben-i-yakim-vin-buvaie", "/blog/what-is-a-logo"],
  ["/blog/brending-agenciya-shcho-ce-chim-zaymaietsya-i-chim-mozhe-dopomogti-biznesu", "/blog/what-is-branding-agency"],
  ["/blog/shcho-vhodit-u-profesiyniy-brendbuk-cheklist-dlya-vashogo-biznesu", "/blog/brandbook-checklist"],
  ["/projects/nadiya-odesa", "/cases"],
  ["/projects/cha", "/cases"],
  ["/blog/rol-brendingovogo-agentstva-v-vashem-biznese", "/ru-blog/role-of-branding-agency"],
  ["/projects/wiex-2", "/ru/cases"],
  ["/projects-eng/flups", "/en/cases"],
  ["/blog/chim-vidriznyayutsya-logotipi-v-riznih-sferah-osoblivosti-dizaynu-dlya-kozhnoyi-galuzi", "/blog/logos-by-industry"],
  ["/blog/brendbuk-dlya-startapa-s-chego-nachat", "/ru-blog/brandbook-for-startup"],
  ["/blog/brendbuk-dlya-startapu-z-chogo-pochati", "/blog/brandbook-for-startup"],
  ["/projects/dron", "/cases"],
  ["/blog/brending", "/blog/branding-key-features"],
  ["/illustration", "/our-services/illustration"],
  ["/projects/altep-2", "/ru-projects/altep"],
  ["/branding", "/our-services/branding"],
  ["/projects/alesta-corp", "/cases"],
  ["/blog/chto-lishnego-mozhet-byt-v-logotipe", "/ru-blog/logo-excess-details"],
  ["/projects-eng/pakuvannya", "/projects-eng/packaging"],
  ["/ru-projects/medeus", "/ru/cases"],
  ["/en/portfolio/wiex-eng", "/en/cases"],
  ["/our-services/rebrending", "/our-services/rebranding"],
  ["/projects/novo-development", "/cases"],
  ["/projects/tehno-group-ru", "/ru/cases"],
  ["/portfolio/wiex", "/cases"],
  ["/portfolio/medeus", "/cases"],
  ["/projects/bit-school-ru", "/ru-projects/bit-school"],
  ["/projects/flups", "/cases"],
  ["/projects/nadiya-odesa-2", "/ru/cases"],
  ["/blog/generator-logotipov-preimushchestva-i-nedostatki", "/ru-blog/logo-generator-pros-cons"],
  ["/blog/klyuchevye-osobennosti-brendbuka", "/ru-blog/brandbook-key-features"],
  ["/projects-eng/synta-servis-mashinnogo-intelektu", "/en/cases"],
  ["/projects-eng/wiex", "/en/cases"],
  ["/projects/valtex-ru", "/ru/cases"],
  ["/projects-eng/techno-group", "/en/cases"],
  ["/smm", "/our-services/smm"],
  ["/blog/brendbuk-dlya-medichnih-zakladiv-chomu-vin-neobhidniy-i-yaki-osoblivosti-vrahuvati", "/blog/brandbook-for-medical"],
  ["/blog/sdelat-logotip-samostoyatelno-ili-zakazat-u-professionalov", "/ru-blog/diy-vs-professional-logo"],
  ["/projects-eng/dron", "/en/cases"],
  ["/ru-projects/akula-mama", "/ru/cases"],
  ["/projects-eng/edina-shkola", "/en/cases"],
  ["/projects-eng/yakomoga", "/en/cases"],
  ["/projects/alesta-corp-2", "/ru/cases"],
  ["/projects/bohrach", "/cases"],
  ["/projects/cha-2", "/ru/cases"],
  ["/projects/medeus-2", "/ru/cases"],
  ["/blog/kak-zakazat-razrabotku-logotipa-sovety-professionalov", "/ru-blog/ordering-a-logo-tips"],
  ["/portfolio/yakomoga", "/cases"],
  ["/projects-eng/skybar", "/en/cases"],
  ["/projects-eng/valtex-guma", "/en/cases"],
  ["/projects/flups-2", "/ru/cases"],
  ["/projects/goshchanochka", "/cases"],
  ["/blog/brendbuk-dlya-agentstv-neruhomosti", "/blog/brandbook-for-real-estate"],
  ["/projects/tbiliso-ru", "/ru-projects/tbiliso"],
  ["/blog/brendbuk-buti-chi-ne-buti", "/blog/brandbook-to-be-or-not"],
  ["/en/portfolio/stefania-eng", "/en/cases"],
  ["/ru-projects/goshchanochka", "/ru/cases"],
  ["/blog/emblema/ossyl", "/blog/emblem-vs-logo"],
  ["/blog/shcho-zayvogo-mozhe-buti-v-logotipi", "/blog/logo-excess-details"],
  ["/projects/stefania", "/cases"],
  ["/ru-projects/dron", "/ru/cases"],
  ["/ru-projects/nadiya-odesa", "/ru/cases"],
  ["/blog/emblema-ta-logotip-vidminnosti-ta-shozhosti", "/blog/emblem-vs-logo"],
  ["/blog/zrobiti-logotip-vlasnoruch-chi-zamoviti-u-profesionaliv", "/blog/diy-vs-professional-logo"],
  ["/projects-eng/nove-misto", "/en/cases"],
  ["/projects-eng/pridniprovsky-zavod", "/en/cases"],
  ["/projects/bohrach-2", "/ru/cases"],
  ["/projects/stefania-2", "/ru/cases"],
  ["/ru-projects/alesta-corp", "/ru/cases"],
  ["/ru-projects/karantin-identity", "/ru/cases"],
  ["/ru-projects/pridniprovsky-zavod", "/ru/cases"],
  ["/blog/brendbuk-dlya-torgovelnih-kompaniy-vazhlivist-ta-klyuchovi-osoblivosti", "/blog/brandbook-for-retail"],
  ["/blog/rol-brending-agenciyi-u-vashomu-biznesi", "/blog/role-of-branding-agency"],
  ["/en/illustration", "/our-services-eng/illustration"],
  ["/projects-eng/karantin-identity", "/en/cases"],
  ["/projects-eng/kyiv-city-state-administration-department-of-tourism", "/projects-eng/kyiv-tourism-department"],
  ["/projects-eng/pixies", "/en/cases"],
  ["/projects-eng/synta", "/en/cases"],
  ["/ru-projects/edina-shkola", "/ru/cases"],
  ["/ru-projects/novo-development", "/ru/cases"],
  ["/ru-projects/techno-group", "/ru/cases"],
  ["/blog/brendbuk-byt-ili-ne-byt", "/ru-blog/brandbook-to-be-or-not"],
  ["/blog/emblema-i-logotip-otlichiya-shodstva", "/ru-blog/emblem-vs-logo"],
  ["/blog/emblema-i-shodstva", "/ru-blog/emblem-vs-logo"],
  ["/blog/generator-logotipiv-perevagi-i-nedoliki", "/blog/logo-generator-pros-cons"],
  ["/blog/marketing-360-dlya-vashogo-biznesu", "/blog/marketing-360"],
  ["/blog/sovremennye-resheniya-v-dizayne-upakovki-innovacii-i-innovacii", "/ru-blog/packaging-design-trends"],
  ["/projects/ahmad-tea-2-ru", "/ru-projects/ahmad-tea"],
  ["/projects/chillary-fest-2", "/ru/cases"],
  ["/projects/upravlenie-turizma-kgga", "/ru-projects/kyiv-tourism-department"],
  ["/projects/yakomoga", "/cases"],
  ["/ru-projects/chillary-fest", "/ru/cases"],
  ["/ru-projects/flups", "/ru/cases"],
  ["/ru-projects/olegivskiy", "/ru/cases"],
  ["/ru-projects/pixies", "/ru/cases"],
  ["/ru-projects/sk-energy", "/ru/cases"],
  ["/ru-projects/wiex", "/ru/cases"],
  ["/en/branding", "/our-services-eng/branding"],
  ["/en/graphics", "/our-services-eng/graphics"],
  ["/en/packaging", "/our-services-eng/packaging"],
  ["/en/portfolio/chillary-eng", "/en/cases"],
  ["/en/portfolio/drone-eng", "/en/cases"],
  ["/en/portfolio/flups-eng", "/en/cases"],
  ["/en/portfolio/olegivskiy-eng", "/en/cases"],
  ["/en/portfolio/packaging-eng", "/projects-eng/packaging"],
  ["/en/portfolio/pixies-eng", "/en/cases"],
  ["/en/portfolio/pridniprovskiy-eng", "/en/cases"],
  ["/en/portfolio/quarantine-eng", "/en/cases"],
  ["/en/portfolio/school-eng", "/en/cases"],
  ["/en/portfolio/skybar-eng", "/en/cases"],
  ["/en/portfolio/synta-eng", "/en/cases"],
  ["/en/portfolio/yakomoga-eng", "/en/cases"],
  ["/en/smm", "/our-services-eng/smm"],
  ["/en/strategy", "/our-services-eng/marketing-360"],
  ["/home", "/"],
  ["/home-test", "/"],
  ["/our-services/influence-marketing-2", "/ru/services/influence-marketing"],
  ["/packaging", "/our-services/packaging"],
  ["/portfolio/chillary", "/cases"],
  ["/portfolio/drone", "/cases"],
  ["/portfolio/flups", "/cases"],
  ["/portfolio/olegivskiy", "/cases"],
  ["/portfolio/packaging", "/projects/packaging"],
  ["/portfolio/pixies", "/cases"],
  ["/portfolio/pridniprovskiy", "/cases"],
  ["/portfolio/quarantine", "/cases"],
  ["/portfolio/school", "/cases"],
  ["/portfolio/skybar", "/cases"],
  ["/portfolio/stefania", "/cases"],
  ["/portfolio/synta", "/cases"],
  ["/projects-eng/bohrach", "/en/cases"],
  ["/projects-eng/chillary-fest", "/en/cases"],
  ["/projects-eng/medeus", "/en/cases"],
  ["/projects-eng/olegivskiy", "/en/cases"],
  ["/projects-eng/stefania", "/en/cases"],
  ["/projects/akula-mama-2", "/ru/cases"],
  ["/projects/chillary-fest", "/cases"],
  ["/projects/digital-residence-ru", "/ru-projects/digital-residence"],
  ["/projects/dron-2", "/ru/cases"],
  ["/projects/edina-shkola", "/cases"],
  ["/projects/insb", "/cases"],
  ["/projects/insb-ru", "/ru/cases"],
  ["/projects/karantin-identity", "/cases"],
  ["/projects/medeus", "/cases"],
  ["/projects/nove-misto", "/cases"],
  ["/projects/nove-misto-2", "/ru/cases"],
  ["/projects/novo-development-2", "/ru/cases"],
  ["/projects/olegivskiy", "/cases"],
  ["/projects/olegivskiy-2", "/ru/cases"],
  ["/projects/pixies", "/cases"],
  ["/projects/pixies-2", "/ru/cases"],
  ["/projects/pridniprovsky-zavod", "/cases"],
  ["/projects/sk-energy", "/cases"],
  ["/projects/sk-energy-ru", "/ru/cases"],
  ["/projects/skybar", "/cases"],
  ["/projects/skybar-2", "/ru/cases"],
  ["/projects/synta", "/cases"],
  ["/projects/teamiq", "/cases"],
  ["/projects/teamiq-ru", "/ru/cases"],
  ["/projects/techno-group", "/cases"],
  ["/projects/terminal-borivaje-2", "/ru-projects/terminal-borivaje"],
  ["/projects/valtex-guma", "/cases"],
  ["/projects/wiex", "/cases"],
  ["/projects/yakomoga-2", "/ru/cases"],
  ["/ru-projects/bohrach", "/ru/cases"],
  ["/ru-projects/cha", "/ru/cases"],
  ["/ru-projects/insb", "/ru/cases"],
  ["/ru-projects/nove-misto", "/ru/cases"],
  ["/ru-projects/skybar", "/ru/cases"],
  ["/ru-projects/stefania", "/ru/cases"],
  ["/ru-projects/synta", "/ru/cases"],
  ["/ru-projects/teamiq", "/ru/cases"],
  ["/ru-projects/valtex-guma", "/ru/cases"],
  ["/strategy", "/our-services/positioning"],
];

function toServiceUrlSlug(slug) {
  if (slug === "marketing-360") return "marketing360";
  return slug;
}

function modernizeDestination(dest) {
  if (dest === "/ru/blog-ru") return "/ru/blog";
  if (dest === "/ru/policy-ru") return "/ru/policy";
  if (dest.startsWith("/ru-blog/")) return `/ru/blog/${dest.slice("/ru-blog/".length)}`;
  if (dest.startsWith("/ru-projects/")) return `/ru/projects/${dest.slice("/ru-projects/".length)}`;
  if (dest.startsWith("/projects-eng/")) return `/en/projects/${dest.slice("/projects-eng/".length)}`;
  if (dest.startsWith("/our-services-eng/")) {
    const slug = dest.slice("/our-services-eng/".length);
    return `/en/our-services/${toServiceUrlSlug(slug)}`;
  }
  if (dest.startsWith("/ru/services/")) {
    const slug = dest.slice("/ru/services/".length);
    return `/ru/our-services/${toServiceUrlSlug(slug)}`;
  }
  return dest;
}

function pushRedirect(redirects, seen, source, destination) {
  if (seen.has(source)) return;
  seen.add(source);
  redirects.push({ source, destination: modernizeDestination(destination), permanent: true });
}

function buildLegacyRedirects() {
  const redirects = [];
  const seen = new Set();

  for (const [source, destination] of oldSiteRedirects) {
    pushRedirect(redirects, seen, source, destination);
  }

  pushRedirect(redirects, seen, "/our-services-eng/marketing-360", "/en/our-services/marketing360");
  pushRedirect(redirects, seen, "/ru/services/marketing-360", "/ru/our-services/marketing360");
  pushRedirect(redirects, seen, "/en/our-services/marketing-360", "/en/our-services/marketing360");
  pushRedirect(redirects, seen, "/ru/our-services/marketing-360", "/ru/our-services/marketing360");
  pushRedirect(redirects, seen, "/our-services/marketing-360", "/our-services/marketing360");

  pushRedirect(redirects, seen, "/ru-blog/:slug", "/ru/blog/:slug");
  pushRedirect(redirects, seen, "/ru/blog-ru", "/ru/blog");
  pushRedirect(redirects, seen, "/ru/policy-ru", "/ru/policy");
  pushRedirect(redirects, seen, "/ru-projects/:slug", "/ru/projects/:slug");
  pushRedirect(redirects, seen, "/projects-eng/:slug", "/en/projects/:slug");
  pushRedirect(redirects, seen, "/our-services-eng/:slug", "/en/our-services/:slug");
  pushRedirect(redirects, seen, "/ru/services/:slug", "/ru/our-services/:slug");
  pushRedirect(redirects, seen, "/en/services/:slug", "/en/our-services/:slug");
  pushRedirect(redirects, seen, "/cases/:slug", "/projects/:slug");
  pushRedirect(redirects, seen, "/en/cases/:slug", "/en/projects/:slug");
  pushRedirect(redirects, seen, "/ru/cases/:slug", "/ru/projects/:slug");

  for (const slug of serviceSlugs) {
    const urlSlug = toServiceUrlSlug(slug);

    pushRedirect(redirects, seen, `/services/${slug}`, `/our-services/${urlSlug}`);
    if (urlSlug !== slug) {
      pushRedirect(redirects, seen, `/services/${urlSlug}`, `/our-services/${urlSlug}`);
    }
  }

  return redirects;
}

module.exports = { buildLegacyRedirects, oldSiteRedirects };
