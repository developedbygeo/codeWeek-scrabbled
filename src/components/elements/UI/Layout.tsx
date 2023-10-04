import { Roboto, Open_Sans } from 'next/font/google';
import { cn } from '@/libs/cn';

const RobotoFont = Roboto({ subsets: ['greek'], variable: '--font-roboto', weight: ['400', '500', '700'] });
const OpenSansFont = Open_Sans({ subsets: ['greek'], variable: '--font-open-sans', weight: '400' });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={cn('relative h-full w-full bg-blue-100', RobotoFont.className, OpenSansFont.className)}>
        {/* <Header /> */}
        <main className="relative">
          <div className="overflow-hidden">{children}</div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
