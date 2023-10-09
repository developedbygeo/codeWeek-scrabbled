import { motion } from 'framer-motion';

import useShouldProgress from '@/hooks/useShouldProgress';
import useGuessWord from '@/hooks/useGuessWord';
import { fadeInVariant } from '@/libs/animations';
import { CommonProps } from '@/types/general';

import WordDisplay from '@/elements/WordDisplay';

type WordGuessProps = CommonProps & {
  word: string;
  hint: string;
};

const WordGuess = ({ className, word, hint }: WordGuessProps) => {
  const [displayState, message, handleReset] = useGuessWord(word);
  const _ = useShouldProgress(displayState, handleReset);

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.15, duration: 0.3 }}
      className={className}
    >
      <motion.h2
        variants={fadeInVariant}
        transition={{ delay: 1, duration: 0.5 }}
        initial="hidden"
        animate="visible"
      >
        Guess the word!
      </motion.h2>
      <motion.p
        variants={fadeInVariant}
        transition={{ delay: 1.5, duration: 0.5 }}
        initial="hidden"
        animate="visible"
      >
        Συμβουλή: {hint}
      </motion.p>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2, duration: 0.3 }}
      >
        <WordDisplay word={displayState} />
      </motion.div>
      {message && <p>{message}</p>}
    </motion.div>
  );
};

export default WordGuess;
