export interface QuickFact {
    icon: string;
    label: string;
    value: string;
  }
  
  export interface AgeGroup {
    name: string;
    ageRange: string;
    description: string;
  }
  
  export interface ActivityItem {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface UpcomingEvent {
    date: string;
    title: string;
    description: string;
  }
  
  export interface LeaderContact {
    name: string;
    role: string;
    email: string;
  }
  
  export interface FaqItem {
    question: string;
    answer: string;
  }