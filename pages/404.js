import Head from 'next/head';
import { useState } from 'react';

import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';

import styles from '../styles/404.module.css';

export default function NotFound() {
  const [outHome, setOutHome] = useState(false);

  return (
    <div>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/bongocat.ico" />
      </Head>

      {loadInTransition()}
      {outHome ? loadOutTransition('/') : null}

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
  const [layer, setLayer] = useState(<InTransition message='VEERING OFF COURSE...!' isSafe={false}/>);
  setTimeout(() => setLayer(null), 1500);
  return layer;
}

function loadOutTransition(url) {
  const layer = <OutTransition message='Getting back on track...' isSafe={false}/>
  setTimeout(() => window.open(url, "_self"), 1000);
  return layer;
}