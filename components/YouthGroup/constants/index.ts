import type {
  QuickFact,
  AgeGroup,
  ActivityItem,
  UpcomingEvent,
  LeaderContact,
  FaqItem,
} from "../YouthGroup.types";

export const QUICK_FACTS: QuickFact[] = [
  { icon: "🗓️", label: "Meets", value: "Fridays, 6:30–8:00pm" },
  { icon: "📍", label: "Location", value: "Parish Hall" },
  { icon: "🎂", label: "Ages", value: "8–17" },
  { icon: "💷", label: "Cost", value: "Free to join" },
];

export const AGE_GROUPS: AgeGroup[] = [
  {
    name: "Juniors",
    ageRange: "Ages 8–11",
    description:
      "Games, crafts and simple Bible stories that introduce younger children to their faith in a fun, welcoming setting.",
  },
  {
    name: "Seniors",
    ageRange: "Ages 12–17",
    description:
      "Discussion-led sessions on faith and life, service projects, and trips that help teenagers grow in confidence and community.",
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    icon: "🎲",
    title: "Games & Socials",
    description:
      "Team games, quiz nights and social evenings that build friendships across the parish.",
  },
  {
    icon: "📖",
    title: "Faith & Discussion",
    description:
      "Guided conversations about scripture, the sacraments and everyday questions of faith.",
  },
  {
    icon: "🤝",
    title: "Service Projects",
    description:
      "Food bank collections, care home visits and community clean-ups that put faith into action.",
  },
  {
    icon: "🏕️",
    title: "Trips & Retreats",
    description:
      "Day trips and an annual residential retreat, run alongside the wider Archdiocese youth programme.",
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    date: "5 Sep 2026",
    title: "Welcome Back Games Night",
    description:
      "Kick off the new term with pizza, games and a chance to meet new members.",
  },
  {
    date: "19 Sep 2026",
    title: "Food Bank Collection",
    description:
      "Sorting and packing donations for the Smethwick food bank after the 6:30pm session.",
  },
  {
    date: "10 Oct 2026",
    title: "Quiz Night Fundraiser",
    description:
      "Family quiz night in the parish hall to raise funds for the autumn retreat.",
  },
];

export const LEADERS: LeaderContact[] = [
  {
    name: "Fr. Gerald Bonaventure Peter C.S.Sp",
    role: "Parish Priest",
    email: "stphilip.smethwick@rcaob.org.uk",
  },
  {
    name: "Youth Ministry Team",
    role: "Youth Group Leaders",
    email: "stphilip.smethwick@rcaob.org.uk",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Does my child need to be Catholic to join?",
    answer:
      "No. Young people of any background or none are welcome. We simply ask that everyone respects the group\u2019s Catholic ethos.",
  },
  {
    question: "Do I need to book a place in advance?",
    answer:
      "No booking is needed for regular Friday sessions. For trips and retreats, places are confirmed through the leaders in advance.",
  },
  {
    question: "Are the leaders DBS checked?",
    answer:
      "Yes. All adult volunteers complete a DBS check and Archdiocesan safeguarding training before working with young people.",
  },
  {
    question: "How do I get involved as a volunteer?",
    answer:
      "Email the youth ministry team below. We welcome parents and parishioners who\u2019d like to support sessions, trips or fundraising.",
  },
];
