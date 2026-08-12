import type { TimelineEvent, ValueCard, FactItem } from "../About.types";

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1863",
    title: "A Parish is Founded",
    description:
      "Fr. Edward Caswall of the Birmingham Oratory — a noted hymn-writer and convert — began the mission in Smethwick, opening a small school-chapel that served the area's growing Catholic community.",
  },
  {
    year: "1882",
    title: "Fr. Charles Ryder Arrives",
    description:
      "Fr. Ryder, grandson of the Bishop of Lichfield and Coventry, became parish priest and dedicated much of his own means and thirty years of ministry to building the church we know today.",
  },
  {
    year: "1893",
    title: "The Church Opens",
    description:
      "The foundation stone, laid by Bishop Ilsley in 1892, gave rise to a nave completed and opened within a year — supported by generous subscribers including Cardinal Newman himself.",
  },
  {
    year: "1904 – 1908",
    title: "The Chapels Are Completed",
    description:
      "The Lady Chapel and sacristies were added in 1904, followed by the Sacred Heart Chapel in 1908, enriching the sanctuary with the marble, stone and mosaic work still visible today.",
  },
  {
    year: "1936",
    title: "Consecration",
    description:
      "Archbishop Thomas Williams formally consecrated the completed church on 25th June 1936, marking the culmination of decades of parish devotion and sacrifice.",
  },
  {
    year: "2007 – Today",
    title: "In the Care of the Spiritans",
    description:
      "Since 2007, the parish has been administered by the Congregation of the Holy Spirit (Spiritans), continuing a tradition of missionary zeal and warm, welcoming community life.",
  },
];

export const VALUES: ValueCard[] = [
  {
    icon: "🙏",
    title: "Faith",
    description:
      "Rooted in the Sacraments and the Mass, our parish family gathers each week to worship, pray and grow together in Christ.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "From our primary school to our parish groups, we are a diverse, welcoming family that reflects the many cultures and stories of Smethwick.",
  },
  {
    icon: "🕊️",
    title: "Service",
    description:
      "Following the example of St. Philip Neri, we seek to serve our neighbours — especially the newest and most vulnerable members of our community.",
  },
  {
    icon: "🏛️",
    title: "Heritage",
    description:
      "Our church stands as a testament to the sacrifice of generations before us, and we are committed stewards of this beautiful, historic place of worship.",
  },
];

export const QUICK_FACTS: FactItem[] = [
  { icon: "📅", label: "Founded", value: "1863" },
  { icon: "⛪", label: "Church Opened", value: "1893" },
  { icon: "🕯️", label: "Consecrated", value: "1936" },
  { icon: "🌍", label: "Cared for by", value: "The Spiritans" },
];
