'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import Confetti from 'react-confetti';

const ConfettiShower = () => {
  const { width, height } = useWindowSize();

  return <Confetti numberOfPieces={500} gravity={0.05} width={width || 300} height={height || 300} />;
};

export default ConfettiShower;
