import React, { useState, useEffect, ReactElement, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TypewriterProps = MotionProps & {
  text: string;
  as?: React.ElementType;
  children?: ReactNode;
};

const Typewriter = ({ text, children, as: Component = 'div', ...motionProps }: TypewriterProps) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypewriterText(text.substring(0, index + 1));
        index += 1;
      } else {
        setTypingCompleted(true);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <motion.div {...motionProps}>
      <Component className="font-sans">
        {typewriterText}
        {!typingCompleted && <span className="text-opacity-50 animate-blink">_</span>}
        {children}
      </Component>
    </motion.div>
  );
};

export default Typewriter;
