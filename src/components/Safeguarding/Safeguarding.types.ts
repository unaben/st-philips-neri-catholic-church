export type SafeguardingContact = {
  label: string;
  value: string;
  href?: string;
};

export type SafeguardingPrinciple = {
  icon: string;
  title: string;
  description: string;
};

export type ReportingStep = {
  step: number;
  title: string;
  description: string;
};

export type ExternalResource = {
  name: string;
  description: string;
  href: string;
};
