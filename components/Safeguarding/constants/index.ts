import type {
  SafeguardingContact,
  SafeguardingPrinciple,
  ReportingStep,
  ExternalResource,
} from "../Safeguarding.types";

export const PARISH_REP: SafeguardingContact = {
  label: "Parish Safeguarding Representative",
  value: "Contact via the parish office",
  href: "/contact",
};

export const DIOCESAN_TEAM: SafeguardingContact[] = [
  {
    label: "Diocesan Safeguarding Team",
    value: "0121 230 6240",
    href: "tel:01212306240",
  },
  {
    label: "Email",
    value: "safeguarding@rcaob.org.uk",
    href: "mailto:safeguarding@rcaob.org.uk",
  },
];

export const PRINCIPLES: SafeguardingPrinciple[] = [
  {
    icon: "🛡️",
    title: "Zero Tolerance",
    description:
      "The Archdiocese of Birmingham has a zero-tolerance approach to abuse of any kind. Every parish, school and diocesan activity is expected to provide a safe environment that protects and supports the wellbeing of children and adults alike.",
  },
  {
    icon: "🤝",
    title: "One Church Approach",
    description:
      "The Catholic Church in England and Wales follows a single, national set of safeguarding standards. This means every parish, including ours, applies the same policies, training and procedures — consistent, robust protection wherever you encounter the Church.",
  },
  {
    icon: "👂",
    title: "Listening First",
    description:
      "Anyone who comes forward with a concern or disclosure is listened to with care, taken seriously, and supported — regardless of how long ago the concern relates to, or whether the person involved is still living.",
  },
  {
    icon: "📋",
    title: "Safer Recruitment",
    description:
      "Everyone taking on a role involving regular contact with children or vulnerable adults — clergy, staff and volunteers alike — undergoes identity checks, references and, where required, a full DBS check before they begin.",
  },
];

export const REPORTING_STEPS: ReportingStep[] = [
  {
    step: 1,
    title: "Immediate danger",
    description:
      "If a child or adult is in immediate danger, call 999 straight away. Safeguarding a life always comes before any internal process.",
  },
  {
    step: 2,
    title: "Raise it with us",
    description:
      "For concerns that aren't an emergency, speak to our Parish Safeguarding Representative or contact the Diocesan Safeguarding Team directly using the details on this page.",
  },
  {
    step: 3,
    title: "Reported to the authorities",
    description:
      "It is the policy of the Catholic Church in England and Wales that all allegations of abuse are reported to the statutory authorities, whether the concern is recent or historic, and whatever the outcome for the person involved.",
  },
  {
    step: 4,
    title: "Ongoing support",
    description:
      "Support doesn't end once a concern is reported. Survivors and their families are offered continued pastoral care, and independent support is available through Safe Spaces (see below).",
  },
];

export const EXTERNAL_RESOURCES: ExternalResource[] = [
  {
    name: "Safe Spaces",
    description:
      "A free, independent and confidential support service for anyone aged 18 or over who has been affected by abuse within the Church — available as a helpline and online, regardless of when the abuse took place.",
    href: "https://www.safespacesenglandandwales.org.uk",
  },
  {
    name: "The Isaiah Journey",
    description:
      "A resource from the Catholic Bishops' Conference of England and Wales offering guidance and support for survivors of abuse within the Church.",
    href: "https://www.cbcew.org.uk/the-isaiah-journey/",
  },
  {
    name: "Catholic Safeguarding Standards Agency (CSSA)",
    description:
      "The independent body responsible for setting and monitoring safeguarding standards across the Catholic Church in England and Wales.",
    href: "https://www.csasprocedures.uk.net",
  },
];
