import WordDisplay from '@/elements/WordDisplay';
import useGuessWord from '@/hooks/useGuessWord';

type WordGuessProps = {
  word: string;
  hint: string;
};

const WordGuess = ({ word, hint }: WordGuessProps) => {
  const [displayState, message] = useGuessWord(word);

  return (
    <div>
      <h1>Guess the word!</h1>
      <p>Συμβουλή: {hint}</p>
      <WordDisplay word={displayState} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default WordGuess;
