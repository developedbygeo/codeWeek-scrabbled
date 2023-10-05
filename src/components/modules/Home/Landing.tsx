import { cn } from '@/libs/cn';
import { CommonProps } from '@/types/general';

import Typewriter from '@/elements/UI/Animated/Typewriter';
import FadeInParagraph from '@/elements/UI/Animated/FadeInParagraph';

// TODO add TypeAnimation with framer motion
const HomeTitle = ({ className }: CommonProps) => {
  return (
    <article className={cn('flex justify-center items-center flex-col gap-1', className)}>
      <h1>
        <Typewriter text="Καλωσήρθατε στο ScrabbleEd." />
      </h1>
      <FadeInParagraph
        className="font-light mt-2"
        delay={3}
        text="Μια πρωτοβουλία στο πλαίσιο του CodeWeek"
      />
    </article>
  );
};

export default HomeTitle;
