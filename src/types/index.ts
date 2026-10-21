export type CategoryType = 'all' | 'family' | 'temple' | 'divination' | 'healing';

export type ClassificationType = 'belief' | 'borderline' | 'superstition';

export interface ComparisonCriterion {
  id: string;
  order: string;
  title: string;
  dimension: string;
  belief: {
    title: string;
    description: string;
    characteristics: string[];
    example: string;
  };
  superstition: {
    title: string;
    description: string;
    characteristics: string[];
    example: string;
  };
  keyTakeaway: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: CategoryType;
  classification: ClassificationType;
  summary: string;
  manifestation: string;
  culturalValue: string;
  deviationRisk: string;
  civilRecommendation: string;
  legalBasis?: string;
  isPopular?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    id: string;
    text: string;
    score: number; // 2: rất thấu suốt, 1: có phần băn khoăn, 0: mê tín
    feedback: string;
  }[];
}

export interface LegalArticle {
  code: string;
  name: string;
  article: string;
  title: string;
  quote: string;
  penalty: string;
  application: string;
}
