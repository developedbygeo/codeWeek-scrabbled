import { RefObject, useEffect } from 'react';

type LeafAnimationOptions = {
  containerRef: RefObject<HTMLElement | null>;
};

const useLeafAnimation = ({ containerRef }: LeafAnimationOptions) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const leafLeftContainer = containerRef.current.querySelector('#left-leaves');
    const leafRightContainer = containerRef.current.querySelector('#right-leaves');

    const leafLeftElements = leafLeftContainer?.querySelectorAll('path') || [];
    leafLeftElements.forEach((leaf, index) => {
      leaf.classList.add('animate-sway');
    });
    const leafRightElements = leafRightContainer?.querySelectorAll('path') || [];
    leafRightElements.forEach((leaf, index) => {
      leaf.classList.add('animate-sway');
    });
  }, [containerRef.current]);
};

export default useLeafAnimation;
