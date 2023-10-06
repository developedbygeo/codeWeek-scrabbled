import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';

import guessWordReducer from '@/store/guessWordReducer';

const useGuessWord = (word: string) => {
  const { push, asPath } = useRouter();
  const [state, dispatch] = useReducer(guessWordReducer, {
    displayState: '_'.repeat(word.length),
    currentIndex: 0,
    message: null,
  });

  const handleReset = () => {
    dispatch({ type: 'RESET', payload: { word } });
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    const character = e.key;

    // Check if the key pressed is a letter
    if (character.length === 1 && /[a-zA-Z]/.test(character)) {
      if (state.currentIndex < word.length) {
        dispatch({ type: 'ADD_LETTER', payload: { letter: character, word } });

        // Check for word completion
        if (state.currentIndex === word.length - 1) {
          const completedWord = state.displayState.replace(/_/g, '') + character;

          if (completedWord.toLowerCase() === word.toLowerCase()) {
            dispatch({ type: 'COMPLETE_WORD', payload: { word } });
            push(`${asPath}&wordFound=true`);
          } else {
            dispatch({ type: 'RESET', payload: { word, message: 'Oops, try again!' } });
          }
        }
      }
    } else if (e.key === 'Backspace' && state.currentIndex > 0) {
      dispatch({ type: 'BACKSPACE' });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [word, state]);

  return [state.displayState, state.message, handleReset] as const;
};

export default useGuessWord;
