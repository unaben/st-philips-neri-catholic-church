import {
  ConfessionSlot,
  ConfessionReason,
  ConfessionStep,
  ConfessionFaq,
} from "../Confession.types";

// TODO confirm exact times with the parish office
export const CONFESSION_TIMES: ConfessionSlot[] = [
  { day: "Saturday", time: "10:00 AM – 10:30 AM" },
  { day: "Saturday", time: "5:00 PM – 5:30 PM", note: "Before the Vigil Mass" },
  {
    day: "By Appointment",
    time: "Contact the Parish Office",
    note: "Any day of the week",
  },
];

export const REASONS: ConfessionReason[] = [
  {
    icon: "🕊️",
    title: "Peace of Mind",
    description:
      "Confession offers a real, tangible experience of God's mercy and a fresh start.",
  },
  {
    icon: "💬",
    title: "A Conversation, Not a Test",
    description:
      "The priest is there to help, not to judge. There's no wrong way to approach it.",
  },
  {
    icon: "🔒",
    title: "Complete Confidentiality",
    description:
      "Everything shared in confession is protected absolutely under the Seal of Confession.",
  },
];

export const STEPS: ConfessionStep[] = [
  {
    step: 1,
    title: "Examine Your Conscience",
    description:
      "Take a few quiet moments beforehand to reflect honestly on your thoughts, words and actions.",
  },
  {
    step: 2,
    title: "Confess Your Sins",
    description:
      "Speak openly with the priest, either face to face or behind the screen, whichever you prefer.",
  },
  {
    step: 3,
    title: "Receive Absolution",
    description:
      "The priest offers guidance, gives a penance, and absolves you in the name of Christ.",
  },
  {
    step: 4,
    title: "Complete Your Penance",
    description:
      "Carry out the penance given, often a prayer, as a small act of gratitude for God's mercy.",
  },
];

export const FAQS: ConfessionFaq[] = [
  {
    question:
      "How long has it been since my last confession? Does that matter?",
    answer:
      "Not at all. However long it has been, you're welcome. The priest will happily guide you through it if you're out of practice.",
  },
  {
    question: "Can I confess face to face?",
    answer:
      "Yes. You may choose to sit face to face with the priest or remain behind the screen — whichever helps you feel more at ease.",
  },
  {
    question: "What if I can't make the scheduled times?",
    answer:
      "Contact the parish office to arrange an appointment with one of the priests at a time that suits you.",
  },
];
