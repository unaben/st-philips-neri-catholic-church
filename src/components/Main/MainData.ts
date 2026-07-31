import type { MainSectionProps } from "./Main.types";

export const churchData: MainSectionProps = {
  churchName: "Welcome to St. Philip Neri Catholic Church, Smethwick",
  tagline: `St Philip Neri is the Roman Catholic parish of Smethwick, in the Archdiocese of Birmingham. 
    By the grace of God our parish is busy and diverse and engages in many different activities. 
    We hope you will find our parish to be a place of welcome and peace, all to the greater glory of God.`,

  priests: [
    {
      role: "Parish Priest",
      name: "Fr. Gerald Bonaventure Peter C.S.Sp",
      email: "stphilip.smethwick@rcaob.org.uk",
      dayOff: "Monday",
      phone: "0121 558 1065 | 07799 829 640",
    },
  ],

  staff: [
    {
      role: "Hall Manager",
      name: "Mr Eddy",
      email: "stphilips.smethwick@rcaob.org.uk",
      phone: "07443 492 963",
    },
    {
      role: "Legion Of Mary",
      name: "Elisabete Capela",
      email: "stphilips.smethwick@rcaob.org.uk",
      phone: "0121 558 1065",
    }
  ],

  safeguardingReps: [
    { name: "Wendell Gopaul",
      email: "safeguarding@rcaob.org.uk",
      phone: "0121 533 9382 | 0121 234 6240", },
  ],

  privacyPolicyUrl: "/about/privacy-policy",

  address: {
    street: "Messenger Road",
    city: "Birmingham",
    postcode: "B66 3DU",
    tel: "0121 558 1065 | 07799 829 640",
  },

  officeHours: {
    label: "Parish Office Hours: Friday 10:30AM – 2:30PM",
  },

  social: {
    email: "stphilip.smethwick@rcaob.org.uk",
    facebook: "Coming soon",
    twitter: "Coming soon",
  },
};
