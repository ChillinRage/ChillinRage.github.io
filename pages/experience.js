import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/components/technology.module.css';

import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';

export default function Experience() {
  
  const [displayOut, setOut] = useState(false);

  return (
    <div>
      <Head>
        <title>Chong Chan How (Experience)</title>
        <link rel="icon" href="/bongocat.ico" />
      </Head>

      {loadInTransition()}
      {displayOut ? loadOutTransition('/') : null}

        <main className={styles.mainContent}>
        <h1>OOPS!</h1>
        <p>Seems like the link hasn't been updated yet. Until it does, enjoy this page!</p>
        <a href='/' onClick={() => setOutHome(true)}>Or click to go back home</a>
        <br/><br/>
        <img src='/pompom/cry.png'/>
        </main>

        <style jsx>{`
        main {
            text-align: center;
            font-size: 24px;
            margin: auto;
            width: 100%;
            padding: 3em;
            vertical-align: center;
        }
        `}</style>

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
    const [layer, setLayer] = useState(<InTransition message='Arriving at "Experience"...' isSafe={true}/>);
    setTimeout(() => setLayer(null), 1500);
    return layer;
}

function loadOutTransition(url) {
    const layer = <OutTransition message='Leaving "Experience"...' isSafe={true}/>
    setTimeout(() => window.location.href = url, 1000);
    return layer;
}

function reloadPage() {
    window.location.replace('#');
    window.location.reload();
}