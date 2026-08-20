export interface QuickFact {
    icon: string;
    label: string;
    value: string;
  }
  
  export interface Amenity {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface PricingTier {
    name: string;
    price: string;
    unit: string;
    description: string;
  }
  
  export interface BookingStep {
    title: string;
    description: string;
  }
  
  export interface FaqItem {
    question: string;
    answer: string;
  }
  
  export interface HallManagerContact {
    role: string;
    name: string;
    email: string;
    phone: string;
  }