import {
  ContactUsIcon,
  RegisterIcon,
  MassBookingIcon,
  SafeguardingIcon,
  CertificateIcon,
  StreamedMassesIcon,
  SubscribeIcon,
  AnnouncementsIcon,
  BlogIcon,
  EventsIcon,
  NewsIcon,
  LegionOfMaryIcon,
  CrossIcon,
  ChoirIcon,
  BaptismIcon,
  ConfessionIcon,
  ConfirmationIcon,
  HolyCommunionIcon,
  MarriageIcon,
  AboutUsIcon,
} from "@/components/Icons";
import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "#",
    priority: true,
    children: [
      {
        label: "About Us",
        href: "/about/about-us",
        icon: <AboutUsIcon />,
      },
      {
        label: "Contact Us",
        href: "/about/contact",
        icon: <ContactUsIcon />,
      },
      {
        label: "How do I register in the Parish?",
        href: "/about/register",
        icon: <RegisterIcon />,
      },
      {
        label: "Mass Booking",
        href: "/about/mass-booking",
        icon: <MassBookingIcon />,
      },
      {
        label: "Safeguarding",
        href: "/about/safeguarding",
        icon: <SafeguardingIcon />,
      },
      {
        label:
          "Signing of the certificate of Catholic Practice (CCP) for Catholic schools",
        href: "/about/Signing-schools-certificate",
        icon: <CertificateIcon />,
      },
      {
        label: "Streamed Masses across the Diocese",
        href: "/about/streamed-masses-across-the-diocese",
        icon: <StreamedMassesIcon />,
      },
      {
        label: "Subscribe",
        href: "/about/subscribe",
        icon: <SubscribeIcon />,
      },
    ],
  },
  { label: "Mass Times", href: "/mass-times", priority: true },
  {
    label: "News & Events",
    href: "#",
    priority: false,
    children: [
      {
        label: "Announcements",
        href: "/news-and-events/announcements",
        icon: <AnnouncementsIcon />,
      },
      {
        label: "Blog",
        href: "/news-and-events/blog",
        icon: <BlogIcon />,
      },
      {
        label: "Events",
        href: "/news-and-events/events",
        icon: <EventsIcon />,
      },
      {
        label: "News",
        href: "/news-and-events/news",
        icon: <NewsIcon />,
      },
    ],
  },
  {
    label: "Parish Groups",
    href: "#",
    priority: false,
    children: [
      {
        label: "Legion of Mary",
        href: "/parish-groups/legion-of-mary",
        icon: <LegionOfMaryIcon />,
      },
      {
        label: "Mass servers",
        href: "/parish-groups/mass-server",
        icon: <CrossIcon />,
      },
      {
        label: "Our choir",
        href: "/parish-groups/choir",
        icon: <ChoirIcon />,
      },
    ],
  },
  {
    label: "Sacramental",
    href: "#",
    priority: true,
    children: [
      {
        label: "Baptism",
        href: "/sacramental/baptism",
        icon: <BaptismIcon />,
      },
      {
        label: "Confession",
        href: "/sacramental/confession",
        icon: <ConfessionIcon />,
      },
      {
        label: "Confirmation",
        href: "/sacramental/confirmation",
        icon: <ConfirmationIcon />,
      },
      {
        label: "First Holy Communion",
        href: "/sacramental/first-holy-communion",
        icon: <HolyCommunionIcon />,
      },
      {
        label: "Marriage",
        href: "/sacramental/marriage",
        icon: <MarriageIcon />,
      },
      {
        label: "RCIA",
        href: "/sacramental/become-a-catholic",
        icon: <CrossIcon />,
      },
    ],
  },
];
