import type { Slide, QuickLink, FeaturedItem, FooterQuickLink } from "@/types";

export const donateLink = {
  label: "Donate",
  href: "https://donate.mydona.com/st-philip-neri-catholic-church",
} as const;

export const heroSlides: Slide[] = [
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

export const hallSlides: Slide[] = [
  {
    id: 1,
    src: "/images/hall1.webp",
    alt: "Interior of St. Philip Neri Catholic Church hall setup for an event",
    tagline: "WELCOME TO OUR HALL",
    heading: "A PERFECT VENUE FOR YOUR SPECIAL EVENTS",
  },
  {
    id: 2,
    src: "/images/hall2.webp",
    alt: "Spacious seating arrangement in St. Philip Neri Catholic Church hall",
    tagline: "GATHER & CELEBRATE",
    heading: "HOST YOUR MEMORABLE MOMENTS WITH US",
  },
  {
    id: 3,
    src: "/images/hall3.webp",
    alt: "Decorated stage area in St. Philip Neri Catholic Church hall",
    tagline: "COMFORT & ELEGANCE",
    heading: "DESIGNED TO ACCOMMODATE EVERY OCCASION",
  },
  {
    id: 4,
    src: "/images/hall4.webp",
    alt: "Atmospheric lighting inside St. Philip Neri Catholic Church hall",
    tagline: "COMMUNITY & FELLOWSHIP",
    heading: "A WARM AND WELCOMING SPACE FOR ALL",
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

export const footerQuickLinks: FooterQuickLink[] = [
  { label: "ABOUT US", href: "/about/about-us" },
  { label: "BEING CATHOLIC", href: "/sacramental/become-a-catholic" },
  { label: "MASS TIMES", href: "/mass-times" },
  { label: "LEGION OF MARY", href: "/parish-groups/legion-of-mary" },
  { label: "EVENT", href: "/news-and-events/events" },
  { label: "ANNOUNCEMENT", href: "/news-and-events/announcements" },
  { label: "MASS BOOKING", href: "/about/mass-booking" },
];

export const churchInfo = {
  name: "St. Philip Neri Catholic Church Smethwick",
  phone: "0121 558 1065",
  email: "stphilip.smethwick@rcaob.org.uk",
  address: "Messenger Road, Smethwick, Birmingham B66 3DU",
  priest: "Fr. Gerald Bonaventure Peter C.S.Sp",
};
