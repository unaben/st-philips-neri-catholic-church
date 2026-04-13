// ─── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Hero / Carousel ────────────────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
  tagline: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

// ─── Welcome Section ────────────────────────────────────────────────────────
export interface QuickLink {
  icon: string;
  label: string;
  href: string;
  ariaLabel: string;
}

// ─── Featured Cards ─────────────────────────────────────────────────────────
export interface FeaturedItem {
  id: number;
  title: string;
  excerpt: string;
  href: string;
}

// ─── Blog ────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  href: string;
  date: string;
}

// ─── Parish Hall ─────────────────────────────────────────────────────────────
export interface ParishHall {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  termsHref: string;
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export interface FooterQuickLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}
