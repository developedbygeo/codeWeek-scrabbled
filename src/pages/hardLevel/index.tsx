import path from 'path';
import fs from 'fs';
import { GetServerSideProps } from 'next';

import FadeInParagraph from '@/elements/UI/Animated/FadeInParagraph';
import WordGuess from '@/elements/WordGuess';
import NextChallengeButton from '@/elements/NextChallengeButton';
import AnimatedMinions from '@/elements/UI/Animated/AnimatedMinions';

const EasyLevel = ({ title, question, level, maxLevel }: Level) => {
  return (
    <>
      <div className="flex row-start-2  flex-col col-span-12 items-center justify-center">
        <h1 className="z-10 relative">{title}</h1>
        <FadeInParagraph delay={0.5} text={`Επίπεδο ${level}`} />
      </div>
      <WordGuess
        className="col-span-12 row-start-4 justify-self-center flex justify-center flex-col items-center"
        word={question.word}
        hint={question.hint}
      />
      <NextChallengeButton
        className="xl:col-span-2 lg:col-span-4 lg:col-start-5  xl:col-start-6 row-start-6"
        level={level}
        maxLevel={maxLevel}
      />
      <AnimatedMinions className="absolute bottom-0 right-0 h-60 lg:h-52 xl:h-60 2xl:h-[20rem] 3xl:h-[23rem] 4xl:h-[30rem]" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jsonPath = path.join(process.cwd(), 'src/data', 'hardQuestions.json');
  const fileContent = fs.readFileSync(jsonPath, 'utf8');
  const data: Question[] = JSON.parse(fileContent);
  const parsedLevel = Number(context.query.level);
  const maxLevel = data.length;

  const levelQuestion = data.find((question: Question) => question.level === parsedLevel);

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
      maxLevel,
    },
  };
};

EasyLevel.isLevel = true;

export default EasyLevel;
