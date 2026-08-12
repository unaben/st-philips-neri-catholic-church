export interface MembershipType {
  icon: string;
  title: string;
  description: string;
}

export interface ApostolicWork {
  icon: string;
  title: string;
  description: string;
}

export interface LegionFaq {
  question: string;
  answer: string;
}

export interface MeetingDetails {
  weekday: number;
  weekdayLabel: string;
  time: string;
  location: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}
