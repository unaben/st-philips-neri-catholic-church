export interface ConfessionReason {
  icon: string;
  title: string;
  description: string;
}

export interface ConfessionStep {
  step: number;
  title: string;
  description: string;
}

export interface ConfessionFaq {
  question: string;
  answer: string;
}

export interface ConfessionSlot {
  day: string;
  time: string;
  note?: string;
}
