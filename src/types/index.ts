export type GradeLevel = 'all' | 'std6' | 'std7' | 'std8';

export type TabType = 
  | 'charts' 
  | 'quiz' 
  | 'article-game' 
  | 'plural-game' 
  | 'sentence-game' 
  | 'noun-bank';

export interface ChartTopic {
  id: string;
  titleGujarati: string;
  titleEnglish: string;
  badge: string;
  ruleGujarati: string;
  summaryGujarati?: string;
  memoryBox?: {
    title: string;
    points: string[];
  };
  examples: {
    id: string;
    english: string;
    gujarati: string;
    icon?: string;
    highlightWord?: string;
    note?: string;
  }[];
  practiceTips?: string[];
  gradeLevel: ('std6' | 'std7' | 'std8')[];
}

export interface NounItem {
  id: number;
  english: string;
  pronunciationGujarati: string;
  meaningGujarati: string;
  category: 'people' | 'home_school' | 'nature' | 'animals' | 'vehicles' | 'objects';
  icon: string;
}

export interface QuizQuestion {
  id: string;
  category: 'pronouns' | 'this_that' | 'have_has' | 'articles' | 'plurals';
  questionEnglish: string;
  questionGujarati: string;
  blankWord: string;
  options: string[];
  correctAnswer: string;
  explanationGujarati: string;
  visualHint?: string;
  grade: 'std6' | 'std7' | 'std8';
}

export interface PluralPair {
  id: string;
  singular: string;
  plural: string;
  gujarati: string;
  ruleExplanation: string;
  icon: string;
}

export interface SentencePuzzle {
  id: string;
  gujarati: string;
  englishFull: string;
  scrambledWords: string[];
  correctOrder: string[];
  grammarTip: string;
}
