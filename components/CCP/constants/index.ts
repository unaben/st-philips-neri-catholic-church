import type {
  CcpApplicationType,
  CcpFaq,
  CcpPriestContact,
  CcpRequirement,
} from "../CCP.types";

export const PRIESTS: CcpPriestContact[] = [
  {
    role: "Parish Priest",
    name: "Fr. Gerald Bonaventure Peter C.S.Sp",
    email: "stphilip.smethwick@rcaob.org.uk",
    phone: "0121 558 1065 | 07799 829 640",
    dayOff: "Monday",
  },
];

export const REQUIREMENTS: CcpRequirement[] = [
  {
    icon: "⛪",
    title: "Two Years' Regular Attendance",
    description:
      "The Archdiocese requires families to attend Mass regularly, every Sunday or Saturday evening, for at least two years before a priest can sign the CCP.",
  },
  {
    icon: "🗓️",
    title: "Attendance Card",
    description:
      "An Attendance Card is used to record your family's presence at Mass. Ask the parish office for one if you don't already have it.",
  },
  {
    icon: "✉️",
    title: "Letter From Previous Parish",
    description:
      "If you're new to the parish, you'll need a letter from your previous parish priest confirming your Mass attendance there.",
  },
];

export const APPLICATION_TYPES: CcpApplicationType[] = [
  {
    title: "Secondary School Transfer (Year 6 to Year 7)",
    description:
      "Watch the parish newsletter and website near the application time for online appointments with the priest. Parents should select six schools in order of preference.",
    linkLabel: "GOV.UK secondary school admissions",
    linkHref: "https://www.gov.uk/apply-for-secondary-school-place",
  },
  {
    title: "Reception School (Nursery to Reception)",
    description:
      "Watch the newsletter and website for appointment details. Parents should select six schools in order of preference. Visit Sandwell Council's website for local primary admissions guidance.",
    linkLabel: "Sandwell Council primary admissions",
    linkHref: "https://www.sandwell.gov.uk/info/200247/school_admissions",
  },
  {
    title: "Nursery Applications",
    description:
      "For other school years (Year 1 to Year 6) or nursery applications, please make an appointment directly with the priest via the newsletter, website, or Contact Us page.",
  },
];

export const FAQS: CcpFaq[] = [
  {
    question: "What do I need to bring to the appointment?",
    answer:
      "Please bring your Attendance Card(s), or a letter from your previous parish priest if you're new to the parish, before your appointment.",
  },
  {
    question: "How do I book an appointment with the priest?",
    answer:
      "Please email or call the parish office directly using the contact details below. Bear in mind the priest's day off when planning your call.",
  },
  {
    question: "What's the deadline for submitting my application?",
    answer:
      "Please submit your school application before Sandwell Council's or the school's deadline. Visit the Local Council or school website for exact dates and guidance.",
  },
  {
    question: "Where do I get the actual school application form?",
    answer:
      "School application forms and guidelines come from your Local Council or the individual school, not the parish. The parish only signs the Certificate of Catholic Practice once your Mass attendance is confirmed.",
  },
];
