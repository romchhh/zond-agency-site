export interface Project {
  title: string;
  description: string;
  image: string;
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
  { value: "5+", label: "років\nна ринку" },
  { value: "300+", label: "реалізованих\nпроєктів" },
  { value: "30+", label: "ніш\nу 8 країнах" },
  { value: "95%", label: "клієнтів\nрекомендують нас" },
];

export const projects: Project[] = [
  {
    title: "Digital Residence",
    description: "Технологічна резиденція нового покоління",
    image: "/assets/digital-residence.gif",
  },
  {
    title: "AHMAD TEA",
    description: "Британський преміальний чай",
    image: "/assets/ahmad-tea.gif",
  },
  {
    title: "Terminal Borivaje",
    description: "Зерноперевантажувальний термінал",
    image:
      "/assets/6a8b0344d04c77b87616bfde_67635052448c4986e836a3cf_1-80.jpg",
  },
  {
    title: "ALTEP",
    description: "Виробник твердопаливних котлів",
    image: "/assets/altep.gif",
  },
  {
    title: "Пакування",
    description: "Добірка дизайну пакувань",
    image:
      "/assets/6a8b039f1afc26dfabc60f6a_66ab5efafe185b233eaddfe2_IMG_6170.png",
  },
  {
    title: "ZOND Works",
    description: "Брендинг і візуальна ідентичність агенції",
    image: "/assets/hero-art.jpg",
  },
];

export const services: Service[] = [
  { index: "01", title: "Стратегія бренду", description: "Аналіз цілей і можливостей.", image: "/services/strategy.jpg" },
  { index: "02", title: "Позиціонування", description: "Унікальна роль бренду на ринку.", image: "/services/positioning.jpg" },
  { index: "03", title: "Неймінг", description: "Назва, що запам’ятовується.", image: "/services/naming.jpg" },
  { index: "04", title: "Логотип", description: "Лаконічний візуальний знак.", image: "/services/logo.jpg" },
  { index: "05", title: "Айдентика", description: "Цілісна візуальна система.", image: "/services/identity.jpg" },
  { index: "06", title: "Брендбук", description: "Правила використання бренду.", image: "/services/brandbook.jpg" },
  { index: "07", title: "Слоган і комунікація", description: "Єдиний тон і меседжі.", image: "/services/communication.jpg" },
  { index: "08", title: "Персонаж бренду", description: "Унікальний герой за потреби.", image: "/services/character.jpg" },
  { index: "09", title: "Упаковка", description: "Дизайн, який продає.", image: "/services/packaging.jpg" },
  { index: "10", title: "Графічний дизайн", description: "Візуальні рішення для носіїв.", image: "/services/graphic.jpg" },
  { index: "11", title: "Веб-дизайн", description: "Сучасні сайти.", image: "/services/web.jpg" },
  { index: "12", title: "SMM", description: "Контент, що працює.", image: "/services/smm.jpg" },
];

export const team: TeamMember[] = [
  {
    name: "Олександр Крутих",
    role: "CEO",
    image: "/assets/team/oleksandr-krutykh.jpg",
  },
  {
    name: "Жасмін Мустафа",
    role: "SMM",
    image: "/assets/team/zhasmin-mustafa.jpg",
  },
  {
    name: "Марія Саніна",
    role: "Дизайнер",
    image: "/assets/team/maria-sanina.jpg",
  },
  {
    name: "Марія Супряга",
    role: "Арт-директор",
    image: "/assets/team/maria-supriaha.jpg",
  },
  {
    name: "Анастасія Грищенко",
    role: "SMM",
    image: "/assets/team/anastasiia-hryshchenko.jpg",
  },
  {
    name: "Наталія Машталер",
    role: "SMM",
    image: "/assets/team/natalia-mashtaler.jpg",
  },
  {
    name: "Віталій Заєць",
    role: "Project management",
    image: "/assets/team/vitalii-zaiets.jpg",
  },
  {
    name: "Софія Писанчишин",
    role: "Sales manager",
    image: "/assets/team/sofia-pysanchyshyn.jpg",
  },
];
