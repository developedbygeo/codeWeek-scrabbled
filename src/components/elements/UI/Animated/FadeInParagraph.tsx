import { motion } from 'framer-motion';
import { fadeInVariant } from '@/libs/animations';
import { Prettify } from '@/types/general';
import { CommonProps } from '@/types/general';

type FadeInParagraphProps = Prettify<
  CommonProps & {
    text: string;
    delay?: number;
  }
>;

const FadeInParagraph = ({ className, text, delay = 2 }: FadeInParagraphProps) => {
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.5 }}
      className={className}
      variants={fadeInVariant}
    >
      {text}
    </motion.p>
  );
};

export default FadeInParagraph;
