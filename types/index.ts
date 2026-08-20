export interface NavLink {
  label: string;
  href: string;
  priority?: boolean;
  icon?: React.ReactNode; 
  children?: NavLink[];
}

export interface Slide {
  id: number;
  src: string;
  alt: string;
  tagline: string;
  heading: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface QuickLink {
  icon: string;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface FeaturedItem {
  id: number;
  title: string;
  excerpt: string;
  href: string;
}

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

export interface FooterQuickLink {
  label: string;
  href: string;
}
