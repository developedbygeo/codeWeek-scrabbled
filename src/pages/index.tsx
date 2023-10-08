import Waves from '@/assets/layered-waves.svg';
import StaggeredFadeIn from '@/elements/UI/Animated/StaggeredFadeIn';
import { Button } from '@/components/elements/UI/Button/Button';

import Landing from '@/components/modules/Home/Landing';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <section className="mb-60">
        <Landing />
        <StaggeredFadeIn
          delay={3.5}
          className="flex flex-col items-center mt-12 gap-4"
          wrapperClassName="w-1/3"
        >
          <Button asChild variant="default" size="lg" className="w-full bg-[#fa7268]">
            <Link href="/easyLevel?level=1">Easy</Link>
          </Button>
          {/* TODO need to fix hover color */}
          <Button asChild variant="default" size="lg" className="w-full bg-[#e34c67]">
            <Link href="/mediumLevel?level=1">Medium</Link>
          </Button>
          {/* TODO need to fix hover color */}
          <Button asChild variant="default" size="lg" className="w-full bg-[#c62368]">
            <Link href="/hardLevel?level=1">Hard</Link>
          </Button>
        </StaggeredFadeIn>
      </section>
      <Waves className="absolute bottom-0 w-screen left-0 pointer-events-none" />
    </div>
  );
}
