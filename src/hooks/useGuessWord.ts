import { useEffect, useState } from 'react';

const useGuessWord = (word: string) => {
  const [displayState, setDisplayState] = useState('_'.repeat(word.length));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const handleKeyPress = (e: KeyboardEvent) => {
    const character = e.key;

    // Check if the key pressed is a letter and no message is displayed
    if (
      character.length === 1 &&
      /[a-zA-Z]/.test(character) &&
      !message &&
      currentIndex < word.length &&
      !message &&
      currentIndex < word.length
    ) {
      const guessedLetter = e.key.toLowerCase();

      let newDisplayStateArray = displayState.split('');

      // Check if guessed letter matches the letter at the current index in the word
      if (word[currentIndex].toLowerCase() === guessedLetter) {
        newDisplayStateArray[currentIndex] = word[currentIndex];

        if (!newDisplayStateArray.includes('_')) {
          setMessage('Congratulations! You guessed the word!');
        }
      } else {
        newDisplayStateArray[currentIndex] = guessedLetter;
      }

      setCurrentIndex((prev) => Math.min(prev + 1, word.length - 1));
      setDisplayState(newDisplayStateArray.join(''));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [word, displayState, message, currentIndex]);

  return [displayState, message, handleKeyPress] as const;
};

export default useGuessWord;
