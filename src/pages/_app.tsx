import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Layout from '@/elements/UI/Layout';
import LevelLayout from '@/elements/UI/LevelLayout';

export default function App({ Component, pageProps }: AppProps) {
  if ('isLevel' in Component && Component.isLevel) {
    return (
      <>
        <Head>
          <title>ScrabbleEd</title>
        </Head>
        <LevelLayout>
          <Component {...pageProps} />
        </LevelLayout>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>ScrabbleEd</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
