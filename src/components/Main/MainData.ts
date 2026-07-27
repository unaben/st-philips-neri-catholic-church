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
      phone: "0121 558 1065",
      ext: 3,
    },
  ],

  staff: [
    {
      role: "Parish Administrator",
      name: "Priya Joseph",
      email: "priyajoseph@rcdow.org.uk",
      hours: "Working days: Monday – Thursday 9:30am to 1pm",
      ext: 2,
    },
    {
      role: "Parish Catechist",
      name: "Lionel Pereira",
      email: "hounslowcat@rcdow.org.uk",
      dayOff: "Fri & Sat or Thu in lieu of Sat on FHC weekends",
      ext: 6,
    },
    {
      role: "Parish Youth Worker",
      name: "Ivan Čižmárik",
      email: "ivancizmarik@rcdow.org.uk",
      hours: "Working days: Sunday & Wednesday",
    },
    {
      role: "Parish Centre Manager",
      name: "Senorita Evans",
      email: "senoritaevans@rcdow.org.uk",
      hours: "MON, THU & FRI 7:00AM–8:30AM; TUE & WED 4:00PM–5:00PM",
    },
  ],

  safeguardingReps: [
    { email: "hounslowsg@safeguardrcdow.org.uk", name: "Lorna – Admin" },
    { email: "hounslowsg1@safeguardrcdow.org.uk", name: "Chinyere" },
  ],

  privacyPolicyUrl: "https://rcdow.org.uk/diocese/privacy-policy",

  address: {
    street: "Messenger Road",
    city: "Birmingham",
    postcode: "B66 3DU",
    tel: "0121 558 1065",
  },

  officeHours: {
    label: "Parish Office Hours: Monday – Thursday 9:30AM – 1PM",
    note: "(Friday the office is closed)",
  },

  social: {
    email: "stphilip.smethwick@rcaob.org.uk",
    facebook: "/ssmmhounslow",
    twitter: "@ssmmhounslow",
  },
};
