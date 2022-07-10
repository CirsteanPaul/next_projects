import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Header from '../modules/header';
import { useAppDispatch } from '../store'
import { setLoading } from '../store/actions/example-actions';

const Home: NextPage = (): JSX.Element => {

  return (
    <div>
    <Head>
      <title>Facebook</title>
    </Head>
    <Header />
    <main>
    </main>
   </div>
  )
}

export default Home
