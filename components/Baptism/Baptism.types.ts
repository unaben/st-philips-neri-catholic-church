export interface BaptismRequirement {
  icon: string;
  title: string;
  description: string;
}

export interface BaptismStep {
  stage: number;
  title: string;
  timing: string;
  description: string;
}

export interface BaptismFaq {
  question: string;
  answer: string;
}
