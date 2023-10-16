import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { Button } from '@/elements/UI/Button/Button';

const Custom404 = () => (
  <section className="h-[92vh] relative bg-white">
    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p className="text-base font-semibold leading-8 text-gray-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Συνέβη κάτι μαγικό</h1>
      <p className="mt-4 text-base text-gray-600/70 sm:mt-6">
        Κάποιο πλασματάκι έφαγε την συγκεκριμένη σελίδα.
      </p>
      <div className="mt-10 flex justify-center">
        <Button size="lg">
          <Link className="flex items-center justify-start gap-2" href="/">
            <ArrowLeftIcon className="w-6 h-6" />
            <span>Επιστροφή</span>
          </Link>
        </Button>
      </div>
    </div>
    <figure className="w-screen absolute bottom-0 h-[20rem]">
      <Image
        src="/codeweek-background.png"
        alt="Codeweek Banner"
        style={{ objectFit: 'cover', backgroundRepeat: 'no-repeat' }}
        fill
      />
    </figure>
  </section>
);

export default Custom404;
