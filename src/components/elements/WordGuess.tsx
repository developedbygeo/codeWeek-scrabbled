import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useGuessWord from '@/hooks/useGuessWord';
import { CommonProps } from '@/types/general';

import WordDisplay from '@/elements/WordDisplay';

type WordGuessProps = CommonProps & {
  word: string;
  hint: string;
};

const WordGuess = ({ className, word, hint }: WordGuessProps) => {
  const [displayState, message, handleReset] = useGuessWord(word);
  const {
    pathname,
    query: { wordFound },
  } = useRouter();

  useEffect(() => {
    if (!wordFound) {
      handleReset();
    }
  }, [pathname, wordFound]);

  return (
    <div className={className}>
      <h1>Guess the word!</h1>
      <p>Συμβουλή: {hint}</p>
      <WordDisplay word={displayState} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default WordGuess;
