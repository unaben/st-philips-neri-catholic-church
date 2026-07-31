export interface VisitAddress {
    street: string;
    city: string;
    postcode: string;
    tel: string;
  }
  
  export interface VisitOfficeHours {
    label: string;
    note?: string;
  }
  
  export interface VisitSocial {
    email?: string;
    facebook?: string;
    twitter?: string;
  }
  
  export interface VisitSectionProps {
    heading?: string;
    address: VisitAddress;
    officeHours: VisitOfficeHours;
    social: VisitSocial;
  }