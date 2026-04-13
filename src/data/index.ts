import type {
  NavLink,
  HeroSlide,
  QuickLink,
  FeaturedItem,
  BlogPost,
  FooterQuickLink,
  SocialLink,
} from '@/types';

export const navLinks: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Masses', href: '/masses' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Legion of Mary', href: '/legion-of-mary' },
      { label: 'Events', href: '/events' },
      { label: 'Blog', href: '/blog' },
      { label: 'Announcements', href: '/announcements' },
      { label: 'Mass Booking', href: '/mass-booking' },
      { label: 'Safe guarding', href: '/safe-guarding' },
      { label: 'News & events', href: '/news-events' },
      { label: 'RCIA', href: '/become-a-catholic' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Donate', href: '/donate' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    src: '/images/church-img-2.jpg',
    alt: 'Mass celebration at St. Philip Neri Catholic Church',
    tagline: 'WE WELCOME YOU TO',
    heading: 'FOLLOW CHRIST IN LOVE AND WITH A JOYFUL HEART',
    ctaLabel: 'VISIT US',
    ctaHref: '/about',
  },
  {
    id: 2,
    src: '/images/church-img.jpg',
    alt: 'Interior of St. Philip Neri Catholic Church',
    tagline: 'COME AND WORSHIP WITH US',
    heading: 'A COMMUNITY UNITED IN FAITH AND LOVE',
    ctaLabel: 'JOIN US',
    ctaHref: '/masses',
  },
];

export const quickLinks: QuickLink[] = [
  { icon: '⛪', label: 'MASSES', href: '/masses', ariaLabel: 'View Mass times' },
  { icon: '🙏', label: 'CONFESSIONS', href: '/confessions', ariaLabel: 'Confession times' },
  { icon: '📅', label: 'MASS BOOKING', href: '/mass-booking', ariaLabel: 'Book a Mass' },
  { icon: '📢', label: 'ANNOUNCEMENT', href: '/announcements', ariaLabel: 'View announcements' },
  { icon: '🔗', label: 'CONNECT WITH US', href: '/contact', ariaLabel: 'Connect with us' },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: 'FIRST HOLY COMMUNION 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/events/first-holy-communion',
  },
  {
    id: 2,
    title: 'JOIN LEGION OF MARY',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/legion-of-mary',
  },
  {
    id: 3,
    title: 'YOUTH GROUP MEETING',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/events/youth-group',
  },
  {
    id: 4,
    title: 'COFFEE & TEA MORNING',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/events/coffee-morning',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'HOW TO TRULY TRUST SOMEONE',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.',
    image: '/images/blog-bible.jpg',
    imageAlt: 'Open Bible on lectern with candles',
    href: '/blog/how-to-truly-trust-someone',
    date: '2024-04-10',
  },
];

export const footerQuickLinks: FooterQuickLink[] = [
  { label: 'ABOUT US', href: '/about' },
  { label: 'BEING CATHOLIC', href: '/being-catholic' },
  { label: 'MASSES', href: '/masses' },
  { label: 'LEGION OF MARY', href: '/legion-of-mary' },
  { label: 'EVENT', href: '/events' },
  { label: 'ANNOUNCEMENT', href: '/announcements' },
  { label: 'BLOG', href: '/blog' },
  { label: 'MASS BOOKING', href: '/mass-booking' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    href: 'https://facebook.com',
    ariaLabel: 'Visit our Facebook page',
  },
];

export const churchInfo = {
  name: 'St. Philip Neri Catholic Church',
  phone: '0121 558 1065',
  email: 'stphilip.smethwick@rcaob.org.uk',
  address: 'Messenger Road, Smethwick, Birmingham B66 3DU',
  priest: 'Fr. Gerald Bonaventure Peter C.S.Sp',
};
