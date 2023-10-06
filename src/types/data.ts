type Question = {
  level: number;
  id: string;
  hint: string;
  word: string;
};

type Level = {
  title: string;
  question: Question;
  level: number;
  maxLevel: number;
};
