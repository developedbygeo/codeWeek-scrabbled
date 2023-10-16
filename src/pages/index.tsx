import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Waves from '@/assets/layered-waves.svg';

import StaggeredFadeIn from '@/elements/UI/Animated/StaggeredFadeIn';
import { Button } from '@/elements/UI/Button/Button';
import Landing from '@/modules/Home/Landing';
import MobileAlertMessage from '@/components/modules/Home/MobileAlertMessage';
import { useEffect, useState } from 'react';

type HomepageProps = {
  isMobile: boolean;
};

const Homepage = ({ isMobile }: HomepageProps) => {
  const [showMobileAlert, setShowMobileAlert] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setShowMobileAlert(true);
    }
  }, [isMobile]);

  return (
    <div className="relative h-[92vh] w-screen flex flex-col items-center justify-center">
      <section className="mb-60">
        {showMobileAlert ? <MobileAlertMessage /> : <Landing />}
        <StaggeredFadeIn
          delay={3.5}
          className="flex flex-col items-center mt-12 gap-4"
          wrapperClassName="w-full lg:w-[10rem] xl:w-[15rem]"
        >
          <Button asChild variant="default" size="lg" className="w-full bg-[#fa7268]">
            <Link href="/easyLevel?level=1">Easy</Link>
          </Button>
          <Button asChild variant="default" size="lg" className="w-full bg-[#e34c67] hover:bg-[#9F1931]">
            <Link href="/mediumLevel?level=1">Medium</Link>
          </Button>
          <Button asChild variant="default" size="lg" className="w-full bg-[#c62368] hover:bg-[#9C1C51]">
            <Link href="/hardLevel?level=1">Hard</Link>
          </Button>
        </StaggeredFadeIn>
      </section>
      <Waves className="absolute bottom-0 w-screen left-0 pointer-events-none" />
    </div>
  );
};

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(
    UA && UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

  console.log(isMobile);

  return {
    props: {
      isMobile,
    },
  };
};
