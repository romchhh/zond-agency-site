export type ProjectLayout = "featured" | "half" | "third" | "cta";

export interface Project {
  title: string;
  description: string;
  image?: string;
  layout: ProjectLayout;
  href?: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { name: "monobank", logo: "/assets/clients/monobank.svg" },
  { name: "Нова Пошта", logo: "/assets/clients/nova-poshta.svg" },
  { name: "blisk", logo: "/assets/clients/blisk.svg" },
  { name: "agroton", logo: "/assets/clients/agroton.svg" },
  { name: "LUMI", logo: "/assets/clients/lumi.svg" },
  { name: "SPACES", logo: "/assets/clients/spaces.svg" },
  { name: "kineto", logo: "/assets/clients/kineto.svg" },
  { name: "verte", logo: "/assets/clients/verte.svg" },
];

export const stats = [
  { value: "6+", label: "років\nна ринку" },
  { value: "100+", label: "реалізованих\nпроєктів" },
  { value: "50+", label: "брендів\nу 12 країнах" },
  { value: "98%", label: "клієнтів\nрекомендують нас" },
];

export const projects: Project[] = [
  {
    title: "Digital Residence",
    description: "Технологічна резиденція нового покоління",
    image: "/assets/digital-residence.gif",
    layout: "featured",
  },
  {
    title: "AHMAD TEA",
    description: "Британський преміальний чай",
    image: "/assets/ahmad-tea.gif",
    layout: "half",
  },
  {
    title: "Terminal Borivaje",
    description: "Зерноперевантажувальний термінал",
    image:
      "/assets/6a8b0344d04c77b87616bfde_67635052448c4986e836a3cf_1-80.jpg",
    layout: "half",
  },
  {
    title: "ALTEP",
    description: "Виробник твердопаливних котлів",
    image:
      "/assets/6a8b03887a661f9cf0d7fa7b_6628f20206b9b93aa2a62c2a_Altep2.gif",
    layout: "third",
  },
  {
    title: "Пакування",
    description: "Добірка дизайну пакувань",
    image:
      "/assets/6a8b039f1afc26dfabc60f6a_66ab5efafe185b233eaddfe2_IMG_6170.png",
    layout: "third",
  },
  {
    title: "Ваш ідеальний проєкт",
    description: "Брендинг, Графіка, Ілюстрація тощо",
    layout: "cta",
    href: "#contact",
  },
];

export const services: Service[] = [
  { index: "01", title: "Стратегія бренду", description: "Аналіз цілей і можливостей.", image: "/assets/service-strategy.jpg" },
  { index: "02", title: "Позиціонування", description: "Унікальна роль бренду на ринку.", image: "/assets/service-positioning.jpg" },
  { index: "03", title: "Неймінг", description: "Назва, що запам’ятовується.", image: "/assets/service-naming.jpg" },
  { index: "04", title: "Логотип", description: "Лаконічний візуальний знак.", image: "/assets/service-logo.jpg" },
  { index: "05", title: "Айдентика", description: "Цілісна візуальна система.", image: "/assets/service-identity.jpg" },
  { index: "06", title: "Брендбук", description: "Правила використання бренду.", image: "/assets/service-brandbook.jpg" },
  { index: "07", title: "Слоган і комунікація", description: "Єдиний тон і меседжі.", image: "/assets/service-communication.jpg" },
  { index: "08", title: "Персонаж бренду", description: "Унікальний герой за потреби.", image: "/assets/service-character.jpg" },
  { index: "09", title: "Упаковка", description: "Дизайн, який продає.", image: "/assets/service-packaging.jpg" },
  { index: "10", title: "Графічний дизайн", description: "Візуальні рішення для носіїв.", image: "/assets/service-graphic.jpg" },
  { index: "11", title: "Веб-дизайн", description: "Сучасні сайти.", image: "/assets/service-web.jpg" },
  { index: "12", title: "SMM", description: "Контент, що працює.", image: "/assets/service-smm.jpg" },
];

export const team: TeamMember[] = [
  {
    name: "Алекс Крутих",
    role: "Засновник",
    image: "/assets/team/oleksandr-krutykh.webp",
  },
  {
    name: "Марія Супряга",
    role: "Дизайнер",
    image: "/assets/team/maria-supriaha.jpg",
  },
  {
    name: "Єлизавета Полуніна",
    role: "Арт-директор",
    image: "/assets/team/elyzaveta-polunina.jpg",
  },
  {
    name: "Дмитро Кавелашвілі",
    role: "Аккаунт",
    image: "/assets/team/dmytro-kavelashvili.webp",
  },
  {
    name: "Марія Дубова",
    role: "SMM",
    image: "/assets/team/maria-dubova.jpg",
  },
  {
    name: "Наталія Машталяр",
    role: "SMM",
    image: "/assets/team/natalia-mashtaliar.jpg",
  },
];
