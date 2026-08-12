import type {
  NavLink,
  HeroSlide,
  QuickLink,
  FeaturedItem,
  BlogPost,
  FooterQuickLink,
  SocialLink,
} from "@/types";

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "#",
    priority: true,
    children: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Contact Us", href: "/about/contact" },
      { label: "How do I register in the Parish?", href: "/about/register" },
      { label: "Mass Booking", href: "/about/mass-booking" },
      { label: "Safeguarding", href: "/about/safeguarding" },
      {
        label:
          "Signing of the certificate of Catholic Practice (CCP) for Catholic schools",
        href: "/about/Signing-schools-certificate",
      },
      {
        label: "Streamed Masses across the Diocese",
        href: "/about/streamed-masses-across-the-diocese",
      },
      { label: "Subscribe", href: "/about/subscribe" },
    ],
  },
  { label: "Mass Times", href: "/mass-times", priority: true },
  {
    label: "News & Events",
    href: "#",
    priority: false,
    children: [
      { label: "Announcements", href: "/news-and-events/announcements" },
      { label: "Blog", href: "/news-and-events/blog" },
      { label: "Events", href: "/news-and-events/events" },
      { label: "News", href: "/news-and-events/news" },
    ],
  },
  {
    label: "Parish Groups",
    href: "#",
    priority: false,
    children: [
      { label: "Legion of Mary", href: "/parish-groups/legion-of-mary" },
      { label: "Mass servers", href: "/parish-groups/mass-server" },
      { label: "Our choir", href: "/parish-groups/choir" },
    ],
  },
  {
    label: "Sacramental",
    href: "#",
    priority: true,
    children: [
      { label: "Baptism", href: "/sacramental/baptism" },
      { label: "Confession", href: "/sacramental/confession" },
      { label: "Confirmation", href: "/sacramental/confirmation" },      
      {
        label: "First Holy Communion",
        href: "/sacramental/first-holy-communion",
      },
      { label: "Marriage", href: "/sacramental/marriage" },
      { label: "RCIA", href: "/sacramental/become-a-catholic" },
    ],
  },
];

export const donateLink = {
  label: "Donate",
  href: "https://donate.mydona.com/st-philip-neri-catholic-church",
} as const;

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    src: "/images/parish_view.webp",
    alt: "Mass celebration at St. Philip Neri Catholic Church",
    tagline: "WE WELCOME YOU TO",
    heading: "FOLLOW CHRIST IN LOVE AND WITH A JOYFUL HEART",
    ctaLabel: "VISIT US",
    ctaHref: "/about/about-us",
  },
  {
    id: 2,
    src: "/images/parish-alter.webp",
    alt: "Interior of St. Philip Neri Catholic Church",
    tagline: "COME AND WORSHIP WITH US",
    heading: "A COMMUNITY UNITED IN FAITH AND LOVE",
    ctaLabel: "JOIN US",
    ctaHref: "/mass-times",
  },
];

export const quickLinks: QuickLink[] = [
  {
    icon: "⛪",
    label: "MASSES",
    href: "/mass-times",
    ariaLabel: "View Mass times",
  },
  {
    icon: "🙏",
    label: "CONFESSIONS",
    href: "/about/confession",
    ariaLabel: "Confession times",
  },
  {
    icon: "📅",
    label: "MASS BOOKING",
    href: "/about/mass-booking",
    ariaLabel: "Book a Mass",
  },
  {
    icon: "📢",
    label: "ANNOUNCEMENT",
    href: "/news-and-events/announcements",
    ariaLabel: "View announcements",
  },
  {
    icon: "🔗",
    label: "CONNECT WITH US",
    href: "/about/contact",
    ariaLabel: "Connect with us",
  },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "FIRST HOLY COMMUNION 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/sacramental/first-holy-communion",
  },
  {
    id: 2,
    title: "JOIN LEGION OF MARY",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/parish-groups/legion-of-mary",
  },
  {
    id: 3,
    title: "YOUTH GROUP MEETING",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/parish-groups/youth-group",
  },
  {
    id: 4,
    title: "COFFEE & TEA MORNING",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/about/coffee-morning",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "HOW TO TRULY TRUST SOMEONE",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.",
    image: "/images/blog-bible.jpg",
    imageAlt: "Open Bible on lectern with candles",
    href: "/news-and-events/blog/how-to-truly-trust-someone",
    date: "2024-04-10",
  },
];

export const footerQuickLinks: FooterQuickLink[] = [
  { label: "ABOUT US", href: "/about/about-us" },
  { label: "BEING CATHOLIC", href: "/sacramental/become-a-catholic" },
  { label: "MASS TIMES", href: "/mass-times" },
  { label: "LEGION OF MARY", href: "/parish-groups/legion-of-mary" },
  { label: "EVENT", href: "/news-and-events/events" },
  { label: "ANNOUNCEMENT", href: "/news-and-events/announcements" },
  { label: "BLOG", href: "/news-and-events/blog" },
  { label: "MASS BOOKING", href: "/about/mass-booking" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    href: "https://facebook.com",
    ariaLabel: "Visit our Facebook page",
  },
];

export const churchInfo = {
  name: "St. Philip Neri Catholic Church Smethwick",
  phone: "0121 558 1065",
  email: "stphilip.smethwick@rcaob.org.uk",
  address: "Messenger Road, Smethwick, Birmingham B66 3DU",
  priest: "Fr. Gerald Bonaventure Peter C.S.Sp",
};
