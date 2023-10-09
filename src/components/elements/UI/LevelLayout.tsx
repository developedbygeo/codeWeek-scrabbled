import { ReactNode } from 'react';
import Header from '@/modules/UI/Header';

type LevelLayoutProps = {
  children: ReactNode;
};

const LevelLayout = ({ children }: LevelLayoutProps) => {
  return (
    <>
      <Header className="absolute top-0 bg-white" shouldRenderHomeLink />
      <div className="bg-notebook h-screen w-screen bg-no-repeat bg-cover items-center grid grid-cols-12 grid-rows-6">
        {children}
      </div>
    </>
  );
};

export default LevelLayout;
