import type { WhoItsFor, JourneyStage, FaqItem } from "../RCIA.types";

export const WHO_ITS_FOR: WhoItsFor[] = [
  {
    icon: "🕯️",
    title: "Never Been Baptized",
    description:
      "You've never been baptized in any Christian tradition and feel drawn to learn more about the Catholic faith, with a view to receiving Baptism, Confirmation and Holy Communion.",
  },
  {
    icon: "✝️",
    title: "Baptized in Another Tradition",
    description:
      "You were baptized as a Christian in another denomination and wish to be received into full communion with the Catholic Church.",
  },
  {
    icon: "🍞",
    title: "Baptized Catholic, Sacraments Incomplete",
    description:
      "You were baptized Catholic as an infant but never completed First Holy Communion or Confirmation, and would like to complete your Christian initiation.",
  },
  {
    icon: "❓",
    title: "Simply Curious",
    description:
      "You're not sure yet whether you want to become Catholic — you're asking questions, exploring, and want a welcoming space to do that without any pressure or obligation.",
  },
];

export const JOURNEY: JourneyStage[] = [
  {
    stage: "01",
    title: "Inquiry",
    timing: "No commitment required",
    description:
      "An informal period of asking questions and getting to know our parish community. There's no obligation here — this stage is simply about exploring what the Catholic faith teaches and whether it's the right path for you.",
  },
  {
    stage: "02",
    title: "Catechumenate",
    timing: "Several months, typically from autumn",
    description:
      "Once you decide to formally begin the journey, you're welcomed as a Catechumen (or Candidate, if already baptized). This stage involves regular sessions covering Scripture, Church teaching, prayer, and the sacraments, alongside the support of a sponsor from our parish.",
  },
  {
    stage: "03",
    title: "Rite of Election",
    timing: "First Sunday of Lent",
    description:
      "Those preparing for Baptism are formally presented to the Archbishop, usually at the Cathedral, and their names are entered into the Book of the Elect — marking the beginning of the final stage of preparation.",
  },
  {
    stage: "04",
    title: "Purification & Enlightenment",
    timing: "Throughout Lent",
    description:
      "A season of deeper prayer, reflection and preparation during Lent, walking alongside the whole parish through this penitential season towards Easter.",
  },
  {
    stage: "05",
    title: "Easter Vigil",
    timing: "Holy Saturday",
    description:
      "The joyful culmination of the journey. At the Easter Vigil, you receive the Sacraments of Initiation — Baptism, Confirmation and First Holy Communion — and are fully welcomed into the Catholic Church.",
  },
  {
    stage: "06",
    title: "Mystagogy",
    timing: "The Easter season and beyond",
    description:
      "The journey doesn't end at the Easter Vigil. This final period is about living out your new life in Christ, deepening your understanding of the sacraments you've received, and settling into parish life as a full member of the community.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Do I have to commit to becoming Catholic straight away?",
    answer:
      "Not at all. The Inquiry stage is designed for exploring, asking honest questions, and discerning whether this is the right path for you — with no pressure or obligation to continue.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most parishes run a yearly cycle, typically starting in the autumn and culminating at the Easter Vigil the following spring — though the exact pace can vary depending on each person's background and needs.",
  },
  {
    question: "What if I was baptized as a baby but never confirmed?",
    answer:
      "You're very welcome to join. Many participants are already baptized Catholics who simply never completed Confirmation or First Holy Communion, and the process can be adapted to focus on what you still need.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "No — this is a ministry of the parish, offered freely to anyone who is interested, regardless of background or circumstances.",
  },
  {
    question: "What is a sponsor, and do I need one?",
    answer:
      "A sponsor is a practising Catholic from our parish who walks alongside you throughout the process, offering friendship, encouragement and a living example of the faith. We can help match you with a sponsor if you don't already have someone in mind.",
  },
];
