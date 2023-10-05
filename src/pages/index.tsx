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
        <StaggeredFadeIn delay={3.5} className="flex flex-col items-center mt-12 gap-4">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="/easyLevel?level=1">Easy Level</Link>
          </Button>
          <Button variant="default" size="lg" className="w-fit">
            New Game
          </Button>
          <Button variant="outline" size="lg" className="w-fit">
            New Game
          </Button>
        </StaggeredFadeIn>
      </section>
      <Waves className="absolute bottom-0 w-screen pointer-events-none" />
    </div>
  );
}
