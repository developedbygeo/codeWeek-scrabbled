import { TypeAnimation } from 'react-type-animation';
import FadeInParagraph from '@/components/elements/UI/Animated/FadeInParagraph';
import { CommonProps } from '@/types/general';
import { cn } from '@/libs/cn';

// TODO add TypeAnimation with framer motion
const HomeTitle = ({ className }: CommonProps) => {
  return (
    <article className={cn('flex justify-center items-center flex-col gap-1', className)}>
      <h1>
        <TypeAnimation
          className="text-4xl text-shadow-sm"
          wrapper="span"
          speed={25}
          sequence={['Καλωσήρθατε στο ScrabbleEd.']}
        />
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
