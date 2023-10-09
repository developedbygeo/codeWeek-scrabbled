import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/elements/UI/Button/Button';
import { CommonProps } from '@/types/general';

type HeaderProps = CommonProps & {
  shouldRenderHomeLink?: boolean;
};

const Header = ({ className, shouldRenderHomeLink }: HeaderProps) => {
  return (
    <header className={`${className} w-screen flex justify-between items-center h-[8vh] px-10 py-5`}>
      <div className="flex gap-4 items-center">
        <div className="relative h-[5vh] aspect-square w-60">
          <Image
            src="/codeweek-logo.png"
            alt="Codeweek logo"
            style={{ objectFit: 'contain', backgroundRepeat: 'no-repeat' }}
            fill
          />
        </div>
        <p className="font-light  text-gray-500 font-sans text-xs">Created by: K. Vgena & G. Anagnostou</p>
      </div>
      {shouldRenderHomeLink && (
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      )}
    </header>
  );
};

export default Header;
