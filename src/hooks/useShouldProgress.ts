import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { removeUrlParams } from '@/libs/general';

const useShouldProgress = (currentGuess: string, resetDisplay: () => void) => {
  const [shouldProgress, setShouldProgress] = useState(false);
  const {
    asPath,
    replace,
    query: { wordFound },
  } = useRouter();

  useEffect(() => {
    if (!wordFound) {
      setShouldProgress(false);
      resetDisplay();
    } else if (wordFound && currentGuess.includes('_')) {
      replace(removeUrlParams(asPath));
      setShouldProgress(false);
    } else {
      setShouldProgress(true);
    }
  }, [asPath, wordFound]);

  return shouldProgress;
};

export default useShouldProgress;
