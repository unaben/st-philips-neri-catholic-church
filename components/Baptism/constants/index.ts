import type { BaptismRequirement, BaptismStep, BaptismFaq } from "../Baptism.types";

export const REQUIREMENTS: BaptismRequirement[] = [
  {
    icon: "🏠",
    title: "Parish Registration",
    description:
      "At least one parent should be a registered, practising member of the parish.",
  },
  {
    icon: "🤝",
    title: "Godparents",
    description:
      "At least one Godparent must be a confirmed, practising Catholic in good standing with the Church.",
  },
  {
    icon: "📖",
    title: "Baptism Preparation",
    description:
      "Parents (and Godparents where possible) attend a short preparation session before the ceremony.",
  },
];

export const JOURNEY: BaptismStep[] = [
  {
    stage: 1,
    title: "Contact the Parish",
    timing: "First step",
    description:
      "Speak to the priest or parish office to express your wish to have your child baptised.",
  },
  {
    stage: 2,
    title: "Preparation Session",
    timing: "A few weeks before",
    description:
      "Attend a short baptism preparation talk covering the meaning and promises of the sacrament.",
  },
  {
    stage: 3,
    title: "Choose Godparents",
    timing: "Before the date is confirmed",
    description:
      "Select at least one Catholic Godparent who is confirmed and living an active life of faith.",
  },
  {
    stage: 4,
    title: "The Baptism",
    timing: "Usually a Sunday",
    description:
      "Your child is baptised, often during or after Sunday Mass, welcoming them into the Church.",
  },
];

export const FAQS: BaptismFaq[] = [
  {
    question: "How old can my child be for baptism?",
    answer:
      "There's no upper age limit for infant baptism, though it's traditionally celebrated in the first year of life. Older children and adults follow a different preparation path — get in touch to discuss.",
  },
  {
    question: "Can we choose non-Catholic Godparents?",
    answer:
      "You may have one baptised Christian from another denomination act as a Christian Witness alongside at least one Catholic Godparent.",
  },
  {
    question: "How many Godparents can we have?",
    answer:
      "Canon law permits one or two Godparents. If two, one must be male and one female.",
  },
  {
    question: "Do we need to attend Mass regularly beforehand?",
    answer:
      "Yes, regular Mass attendance as a parish family is part of what it means to raise your child in the faith, and is usually discussed at the preparation session.",
  },
];
