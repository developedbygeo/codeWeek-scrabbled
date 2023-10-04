export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerFadeInVariant = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delayChildren: 1 * i,
      staggerChildren: 0.25,
    },
  }),
};
