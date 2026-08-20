import {
  ContactUsIcon,
  RegisterIcon,
  MassBookingIcon,
  SafeguardingIcon,
  CertificateIcon,
  SubscribeIcon,
  AnnouncementsIcon,
  EventsIcon,
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
import type { NavLink } from "@/types";

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
        label: "Hall Rentals",
        href: "/about/hall-rentals",
        icon: <MassBookingIcon />,
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
        label: "Privacy Policy",
        href: "/about/privacy-policy",
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
        label: "Events",
        href: "/news-and-events/events",
        icon: <EventsIcon />,
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
        label: "Alter servers",
        href: "/parish-groups/alter-server",
        icon: <CrossIcon />,
      },
      {
        label: "Our choir",
        href: "/parish-groups/choir",
        icon: <ChoirIcon />,
      },
      {
        label: "Youth group",
        href: "/parish-groups/youth-group",
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
