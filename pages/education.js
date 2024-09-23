import Head from 'next/head';
import { useEffect, useState } from 'react';
import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Chong Chan How</title>
        <link rel="icon" href="/HowLogo.ico" />
      </Head>

      { loadInTransition() }

      <main>
        EDUCATION
      </main>
    </div>
  );
}

function loadInTransition() {
  const [layer, setLayer] = useState(<InTransition message='Arriving at "Education"...' isSafe={true}/>);
  setTimeout(() => setLayer(null), 1500);
  return layer;
}

function loadOutTransition(url) {
  const layer = <OutTransition message='Leaving "Education"...' isSafe={true}/>
  setTimeout(() => window.location.href = url, 1000);
  return layer;
}