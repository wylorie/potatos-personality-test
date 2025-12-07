export type AnswerValue = 'Very Likely' | 'Likely' | 'Average' | 'Unlikely' | 'Very Unlikely';

export type Domain = 'BigFive' | 'CognitiveFunction' | 'EnneagramCore' | 'EnneagramSubtype' | 'EnneagramWingTritype';

export type BigFiveTrait = 'Openness' | 'Conscientiousness' | 'Extraversion' | 'Agreeableness' | 'Neuroticism';

export type CognitiveFunction = 'Ni' | 'Ne' | 'Si' | 'Se' | 'Ti' | 'Te' | 'Fi' | 'Fe';

export type EnneagramType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type EnneagramSubtype = 'SP' | 'SO' | 'SX';

export interface Question {
  id: number;
  question: string;
  domain: Domain;
  target: string;
  scale: {
    'Very Likely': number;
    'Likely': number;
    'Average': number;
    'Unlikely': number;
    'Very Unlikely': number;
  };
}

export interface Answer {
  questionId: number;
  value: AnswerValue;
}

export interface BigFiveScores {
  Openness: number;
  Conscientiousness: number;
  Extraversion: number;
  Agreeableness: number;
  Neuroticism: number;
}

export interface CognitiveFunctionScores {
  Ni: number;
  Ne: number;
  Si: number;
  Se: number;
  Ti: number;
  Te: number;
  Fi: number;
  Fe: number;
}

export interface EnneagramScores {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
}

export interface EnneagramSubtypeScores {
  SP: number;
  SO: number;
  SX: number;
}

export interface PersonalityResults {
  bigFive: BigFiveScores;
  cognitiveFunctions: CognitiveFunctionScores;
  mbtiType: string;
  cognitiveStack: string[];
  enneagramType: EnneagramType;
  enneagramWing: EnneagramType | null;
  enneagramSubtype: EnneagramSubtype;
  tritype: string;
  sloan: string;
  rcoei: string;
}

