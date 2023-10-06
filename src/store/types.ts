export type GuessWordState = {
  displayState: string;
  currentIndex: number;
  message: string | null;
};
export type GuessWordAction =
  | { type: 'ADD_LETTER'; payload: { letter: string; word: string } }
  | { type: 'UPDATE_DISPLAY'; payload: { letter: string } }
  | { type: 'BACKSPACE' }
  | { type: 'RESET'; payload: { word: string } }
  | { type: 'COMPLETE_WORD'; payload: { word: string } };
