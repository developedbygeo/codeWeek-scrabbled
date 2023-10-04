import { Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerFadeInVariant, fadeInVariant } from '@/libs/animations';
import { CommonProps } from '@/types/general';

type StaggeredFadeInProps = CommonProps & {
  delay?: number;
  children: React.ReactNode;
};

const StaggeredFadeIn = ({ className, children, delay = 1 }: StaggeredFadeInProps) => {
  return (
    <motion.div
      className={className}
      variants={staggerFadeInVariant}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {Children.map(children, (child) => (
        <motion.div variants={fadeInVariant}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredFadeIn;
