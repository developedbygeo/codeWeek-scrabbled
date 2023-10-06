import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '@/elements/UI/Layout';
import LevelLayout from '@/elements/UI/LevelLayout';

export default function App({ Component, pageProps }: AppProps) {
  if ('isLevel' in Component && Component.isLevel) {
    return (
      <LevelLayout>
        <Component {...pageProps} />
      </LevelLayout>
    );
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
