import { ReactNode } from 'react';

type LevelLayoutProps = {
  children: ReactNode;
};

const LevelLayout = ({ children }: LevelLayoutProps) => {
  return (
    <div className="bg-notebook h-screen w-screen bg-no-repeat bg-cover items-center grid grid-cols-12 grid-rows-6">
      {children}
    </div>
  );
};

export default LevelLayout;
