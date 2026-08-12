export interface CcpPriestContact {
  role: string;
  name: string;
  email: string;
  phone: string;
  dayOff: string;
}

export interface CcpRequirement {
  icon: string;
  title: string;
  description: string;
}

export interface CcpApplicationType {
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
}

export interface CcpFaq {
  question: string;
  answer: string;
}
