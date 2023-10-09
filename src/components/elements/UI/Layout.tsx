import { Roboto, Open_Sans } from 'next/font/google';
import { cn } from '@/libs/cn';

import Header from '@/components/modules/UI/Header';

const RobotoFont = Roboto({ subsets: ['greek'], variable: '--font-roboto', weight: ['400', '500', '700'] });
const OpenSansFont = Open_Sans({ subsets: ['greek'], variable: '--font-open-sans', weight: '400' });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={cn('relative', RobotoFont.className, OpenSansFont.className)}>{children}</main>
    </>
  );
};

export default Layout;
