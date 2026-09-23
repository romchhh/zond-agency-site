export type StatItem = {
  value: string;
  label: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

export type ServiceItem = {
  index: string;
  title: string;
  description: string;
  image: string;
};

export type TeamItem = {
  name: string;
  role: string;
  image?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  nav: {
    services: string;
    projects: string;
    blog: string;
    contact: string;
  };
  a11y: {
    mainNav: string;
    mobileNav: string;
    language: string;
    languages: string;
    consultation: string;
    openMenu: string;
    closeMenu: string;
    clients: string;
    vision: string;
    playVideo: string;
    teamMember: string;
  };
  hero: {
    services: string[];
    more: string;
    slogan: string;
    videoLabel: string;
  };
  mission: {
    title: string;
    description: string;
    stats: StatItem[];
    clientsTrust: string;
  };
  projects: {
    title: string;
    allProjects: string;
  };
  vision: {
    title: string;
    description: string;
    highlight: string;
    videoTitle: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  team: {
    title: string;
    items: TeamItem[];
    joinTitle: string;
    joinHint: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  consultationForm: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    close: string;
    successTitle: string;
    successDescription: string;
    telegramCta: string;
    errors: {
      name: string;
      contact: string;
      email: string;
    };
  };
  footer: {
    rights: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
    viewCases: string;
    ourServices: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    lead: string;
    readMore: string;
    backToBlog: string;
    home: string;
    articlesCount: string;
    relatedPosts: string;
  };
  cases: {
    title: string;
    lead: string;
    backToCases: string;
    relatedCases: string;
    moreCasesKicker: string;
    moreCasesTitle: string;
    prevCase: string;
    nextCase: string;
    filterAria: string;
    filters: {
      all: string;
      branding: string;
      packaging: string;
      smm: string;
      strategy: string;
      web: string;
      graphic: string;
    };
  };
  contactPage: {
    title: string;
    lead: string;
    channelsTitle: string;
    channelsLead: string;
    emailLabel: string;
    phoneLabel: string;
    telegramLabel: string;
    telegramValue: string;
    telegramDescription: string;
    instagramLabel: string;
    instagramValue: string;
  };
};
