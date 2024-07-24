import Head from 'next/head';
import { useState } from 'react';

import InTransition from './components/inTransitionLayer';
import OutTransition from './components/outTransitionLayer';

import styles from '../styles/Technology.module.css';

const LANGUAGE = ['CSS', 'HTML', 'Java', 'JavaScript', 'Python'];
const FRONT_END = ['Next.js', 'React.js'];
const BACK_END = ['Node.js'];
const TOOL = ['Git'];

export default function Hobby() {
  const [displayOut, setOut] = useState(false);

  return (
    <div>
      <Head>
        <title>Chong Chan How</title>
        <link rel="icon" href="/HowLogo.ico" />
      </Head>

      {loadInTransition()}
      {displayOut ? loadOutTransition('/') : null}

      <main>
        <div>LANGUAGE</div>
        <div>FRONT-END</div>
        <div>BACK-END</div>
        <div>TOOLS</div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

function loadInTransition() {
  const [layer, setLayer] = useState(<InTransition message='Arriving at "Technology"...' isSafe={true}/>);
  setTimeout(() => setLayer(null), 1500);
  return layer;
}

function loadOutTransition(url) {
  const layer = <OutTransition message='Leaving "Technology"...' isSafe={true}/>
  setTimeout(() => window.open(url, "_self"), 1000);
  return layer;
}