import type { MassScheduleGroup } from "../Masses.types";

export const MASS_SCHEDULE: MassScheduleGroup[] = [
  {
    id: "sunday",
    entries: [
      {
        days: "Sunday",
        location: "Parish - Rosary",
        time: "9:00am",
      },
      {
        days: "Sunday",
        location: "Parish",
        time: "9:30am",
      },
    ],
  },
  {
    id: "tuesday-novena",
    entries: [
      {
        days: "Tuesday",
        location: "Parish",
        time: "10:00am",
      },
      {
        days: "Tuesday",
        location: "Parish - St Anthony Novena",
        time: "6:30pm",
      },
      {
        days: "Tuesday",
        location: "Parish",
        time: "7:00am",
      },
    ],
  },
  {
    id: "weekday",
    entries: [
      {
        days: "Wednesday, Friday, Saturday",
        location: "Side chapel",
        time: "10:00am",
      },
    ],
  },
  {
    id: "school",
    entries: [
      {
        days: "Thursday",
        location: "School",
        time: "10:00am",
      },
    ],
  },
];
