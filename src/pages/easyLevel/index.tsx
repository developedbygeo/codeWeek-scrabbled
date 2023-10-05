import path from 'path';
import fs from 'fs';
import { GetServerSideProps } from 'next';
import { motion } from 'framer-motion';

import FadeInParagraph from '@/elements/UI/Animated/FadeInParagraph';
import { fadeInVariant } from '@/libs/animations';
import WordGuess from '@/components/elements/WordGuess';

const EasyLevel = ({ title, question, level }: Level) => {
  return (
    <div className="h-screen w-screen bg-paper-pattern">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          variants={fadeInVariant}
          transition={{ delay: 1, duration: 0.5 }}
          initial="hidden"
          animate="visible"
          className="z-10 relative"
        >
          {title}
        </motion.h1>
        <FadeInParagraph text={`Επίπεδο ${level}`} />
      </div>
      <WordGuess word={question.word} hint={question.hint} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jsonPath = path.join(process.cwd(), 'src/data', 'easyQuestions.json');
  const fileContent = fs.readFileSync(jsonPath, 'utf8');
  const data: Question[] = JSON.parse(fileContent);
  const parsedLevel = Number(context.query.level);

  const levelQuestion = data.find((question: Question) => question.level === parsedLevel);

  console.log(levelQuestion);

  if (!levelQuestion) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: 'Ας παίξουμε ScrabbleEd!',
      question: levelQuestion,
      level: parsedLevel,
    },
  };
};

export default EasyLevel;
