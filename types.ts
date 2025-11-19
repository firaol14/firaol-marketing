import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glow: string;
  delay: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

export interface ComparisonRow {
  label: string;
  alone: boolean;
  us: boolean;
  other: boolean | 'warn';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SuccessStory {
  name: string;
  result: string;
}
