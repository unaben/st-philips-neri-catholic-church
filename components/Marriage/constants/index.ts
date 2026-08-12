import type {
  MarriageRequirement,
  MarriageStep,
  MarriageFaq,
} from "../Marriage.types";

export const REQUIREMENTS: MarriageRequirement[] = [
  {
    icon: "📅",
    title: "Six Months' Notice",
    description:
      "Diocesan guidelines require at least six months' notice before the wedding date.",
  },
  {
    icon: "📖",
    title: "Marriage Preparation Course",
    description:
      "Couples attend a diocesan marriage preparation course before the ceremony.",
  },
  {
    icon: "📋",
    title: "Legal Documentation",
    description:
      "Baptism certificates, and where relevant a Certificate of No Impediment, are required.",
  },
];

export const JOURNEY: MarriageStep[] = [
  {
    stage: 1,
    title: "Speak to the Priest",
    timing: "At least 6 months before",
    description:
      "Contact the parish as soon as you're engaged to begin the process and check the date is available.",
  },
  {
    stage: 2,
    title: "Complete the Paperwork",
    timing: "Early in the process",
    description:
      "Gather baptism certificates and complete the pre-nuptial enquiry with the priest.",
  },
  {
    stage: 3,
    title: "Marriage Preparation",
    timing: "A few months before",
    description:
      "Attend the diocesan marriage preparation course together as a couple.",
  },
  {
    stage: 4,
    title: "Banns of Marriage",
    timing: "3 weeks before",
    description:
      "Your intention to marry is announced at Mass over three consecutive Sundays.",
  },
  {
    stage: 5,
    title: "The Wedding",
    timing: "Your chosen date",
    description:
      "You exchange vows and are joined in the Sacrament of Matrimony before God and your community.",
  },
];

export const FAQS: MarriageFaq[] = [
  {
    question: "Can we get married if one of us isn't Catholic?",
    answer:
      "Yes. A dispensation can be arranged for a mixed marriage between a Catholic and a baptised or non-baptised partner. Speak to the priest early to arrange this.",
  },
  {
    question: "What if one of us was married before?",
    answer:
      "If a previous marriage ended, the priest will need to discuss the circumstances with you, as an annulment may be required before a Catholic wedding can take place.",
  },
  {
    question: "Do we have to do the marriage preparation course?",
    answer:
      "Yes, it's a required part of preparing for the sacrament and is genuinely valuable for couples, covering communication, finances and faith together.",
  },
  {
    question: "Can we choose our own readings and music?",
    answer:
      "Yes, within the structure of the Nuptial Mass. The priest will guide you on suitable readings and hymns during your preparation meetings.",
  },
];
