import {
  MeetingDetails,
  MembershipType,
  ApostolicWork,
  LegionFaq,
} from "../LegionOfMary.types";

// TODO confirm real day/time/location with Elisabete before this goes live
export const MEETING: MeetingDetails = {
  weekday: 2,
  weekdayLabel: "Tuesday",
  time: "6:30 PM",
  location: "Parish Hall",
  contactName: "Elisabete Capela",
  contactPhone: "0121 558 1065",
  contactEmail: "stphilips.smethwick@rcaob.org.uk",
};

export const MEMBERSHIP_TYPES: MembershipType[] = [
  {
    icon: "🕊️",
    title: "Active Members",
    description:
      "Attend the weekly praesidium meeting and carry out an assigned work of apostolate each week, such as home or hospital visits.",
  },
  {
    icon: "🙏",
    title: "Auxiliary Members",
    description:
      "Support the Legion through daily prayer, especially the Tessera prayers, without attending weekly meetings in person.",
  },
  {
    icon: "⛪",
    title: "The Praesidium",
    description:
      "The local unit of the Legion, meeting weekly for prayer, a spiritual reading, and to report on and assign apostolic work.",
  },
];

export const APOSTOLIC_WORKS: ApostolicWork[] = [
  {
    icon: "🏠",
    title: "Home Visitation",
    description:
      "Visiting parishioners at home, especially those who are isolated or new to the parish.",
  },
  {
    icon: "🏥",
    title: "Hospital & Care Visits",
    description:
      "Bringing companionship and prayer to the sick and those in residential care.",
  },
  {
    icon: "📖",
    title: "Faith Support",
    description:
      "Helping parishioners reconnect with the sacraments and the life of the parish.",
  },
  {
    icon: "🤝",
    title: "Welcoming New Parishioners",
    description:
      "Reaching out to new families and helping them feel at home at St. Philip Neri.",
  },
];

export const FAQS: LegionFaq[] = [
  {
    question: "Do I need any experience to join?",
    answer:
      "No experience is needed, only a willingness to grow in faith and give a little time each week. New members are paired with experienced Legionaries.",
  },
  {
    question: "How much time does it involve?",
    answer:
      "Active members attend one weekly meeting of about an hour and carry out around two hours of assigned apostolic work during the week.",
  },
  {
    question: "Can I join as an Auxiliary member instead?",
    answer:
      "Yes. Auxiliary membership is ideal if you cannot commit to weekly meetings but want to support the Legion's work through daily prayer.",
  },
  {
    question: "Who do I contact to get started?",
    answer:
      "Get in touch with our Legion of Mary contact using the details below, or simply come along to a Tuesday meeting to see what it's about.",
  },
];
