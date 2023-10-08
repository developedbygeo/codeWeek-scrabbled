import { useRef } from 'react';

import DonutLove from '@/assets/donut_love.svg';

import useFollowMouse from '@/hooks/useFollowMouse';
import { CommonProps } from '@/types/general';

const AnimatedMinions = ({ className }: CommonProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useFollowMouse({ containerRef, eyeRadius: 5 });

  return (
    <div className={className} ref={containerRef}>
      <DonutLove className="w-full h-full" />
    </div>
  );
};

export default AnimatedMinions;
