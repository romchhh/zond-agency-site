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
  };
  cta: {
    title: string;
    description: string;
    button: string;
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
};
