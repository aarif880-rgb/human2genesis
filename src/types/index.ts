export interface Framework {
  id:   string;
  name: string;
  desc: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer:   string;
}

export interface HowItWorksStep {
  num:   string;
  icon:  string;
  title: string;
  desc:  string;
}
