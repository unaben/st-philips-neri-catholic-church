import type { ContactFormData } from "../contact.types";

export interface ContactInfoRow {
  icon: string;
  label: string;
  href?: string;
  value: string | { text: string; href: string }[];
}

export const INFO_ROWS: ContactInfoRow[] = [
  {
    icon: "📍",
    label: "Postal Address - Presbytery",
    href: "https://maps.google.com/?q=20+Messenger+Road,+Smethwick,+Birmingham+B66+3DU",
    value: "20 Messenger Road, Smethwick, Birmingham B66 3DU",
  },
  {
    icon: "📞",
    label: "Telephone & Mobile",
    value: [
      { text: "0121 558 1065", href: "tel:01215581065" },
      { text: "07799 829 640", href: "tel:07799829640" },
    ],
  },
  {
    icon: "✉️",
    label: "Email",
    href: "mailto:stphilip.smethwick@rcaob.org.uk",
    value: "stphilip.smethwick@rcaob.org.uk",
  },
  {
    icon: "⛪",
    label: "Sunday Mass",
    value: "9:30am",
  },
  {
    icon: "🕐",
    label: "Parish Office Hours",
    value: "Fri: 10:30am – 2:30pm",
  },
];

export const INITIAL_STATE: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};
