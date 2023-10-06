import Link from 'next/link';
import { useRouter } from 'next/router';

import { CommonProps } from '@/types/general';

import { Button } from '@/elements/UI/Button/Button';

type NextChallengeButtonProps = CommonProps & {
  level: number;
  maxLevel: number;
};

const NextChallengeButton = ({ className, level, maxLevel }: NextChallengeButtonProps) => {
  const { pathname, asPath, query } = useRouter();
  const shouldRenderNextLevel = level < maxLevel && query.wordFound === 'true';
  const currentLevel = query.level;
  const isCurrentLevelValid = !isNaN(Number(currentLevel)) && Number(currentLevel) > 0;
  const nextLevel = Number(currentLevel) + 1;

  return shouldRenderNextLevel && isCurrentLevelValid ? (
    <Button className={className} size="lg" asChild>
      <Link href={`${pathname}?level=${nextLevel}`}>Επόμενο επίπεδο</Link>
    </Button>
  ) : null;
};

export default NextChallengeButton;
