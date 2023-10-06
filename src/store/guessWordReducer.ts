import { GuessWordAction, GuessWordState } from '@/store/types';

function guessWordReducer(state: GuessWordState, action: GuessWordAction): GuessWordState {
  switch (action.type) {
    case 'ADD_LETTER': {
      const { word } = action.payload;
      const letterToAdd = action.payload.letter;
      const newDisplayStateArray = state.displayState.split('');

      // Only update if the currentIndex is still valid
      if (state.currentIndex < newDisplayStateArray.length) {
        newDisplayStateArray[state.currentIndex] = letterToAdd;
      }

      const updatedDisplayState = newDisplayStateArray.join('');

      // Check for a completed word
      if (state.currentIndex === word.length - 1) {
        const completedWord = updatedDisplayState.replace(/_/g, '');

        if (completedWord === word) {
          return {
            ...state,
            displayState: completedWord,
            currentIndex: state.currentIndex + 1,
            message: 'Congratulations! You guessed the word!',
          };
        } else {
          return {
            ...state,
            displayState: '_'.repeat(word.length),
            currentIndex: 0,
            message: 'Oops! Try again.',
          };
        }
      }

      return {
        ...state,
        displayState: updatedDisplayState,
        currentIndex: state.currentIndex + 1,
        message: null,
      };
    }

    case 'RESET':
      return {
        ...state,
        displayState: '_'.repeat(action.payload.word.length),
        currentIndex: 0,
        message: 'Please try again.',
      };

    case 'COMPLETE_WORD':
      return {
        ...state,
        message: state.displayState === action.payload.word ? 'Congratulations! You guessed the word!' : null,
      };

    default:
      return state;
  }
}

export default guessWordReducer;
