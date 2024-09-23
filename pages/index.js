import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
import { useState } from 'react';

import About from '../components/about';
import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [outHome, setOutHome] = useState(false);
  const [outProject, setOutProject] = useState(false);
  //const [outEducation, setOutEducation] = useState(false);
  const [outExperience, setOutExperience] = useState(false);
  const [outTechnology, setOutTechnology] = useState(false);
  
  const ACADEMIC_RECORD_LINK = "https://chillinrage.github.io/Academic-Results";

  return (
    <div className={styles.container}>
      <Head>
        <title>Chong Chan How</title>
        <link rel="icon" href="/HowLogo.ico" />
        <GoogleTagManager gtmId="GTM-NLXPRMVV"/>
      </Head>

      { loadInTransition() }
      { outHome && loadOutTransition('/') }
      { outProject && loadOutTransition('/project') }
      { outExperience && loadOutTransition('/404') }
      { outTechnology && loadOutTransition('/404') }

      <main>
        <div className={styles.tabColumn}>
          <a className={styles.navImage} onClick={() => setOutHome(true)}>
            <img className={styles.logo} src='/HowLogo.ico'/>
          </a>
          <a className={styles.navButton} onClick={() => setOutProject(true)}>Projects</a>
          <a className={styles.navButton} onClick={() => setOutExperience(true)}>Experience</a>
          <a className={styles.navButton} onClick={() => setOutTechnology(true)}>Technology</a>
          <a className={styles.navButton} target='_blank' href={ACADEMIC_RECORD_LINK}>Academics</a>
        </div>

        <div className={styles.mainContent}>
          <About />
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          height: 100%;
          padding: 3em;
          display: flex;
          flex-direction: row;
          background-color: rgb(245, 248, 255);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100vh;
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
        #__next {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

function loadInTransition() {
  const [layer, setLayer] = useState(<InTransition message='Arriving at "Home"...' isSafe={true}/>);
  setTimeout(() => setLayer(null), 1500);
  return layer;
}

function loadOutTransition(url) {
  const layer = <OutTransition message='Leaving "Home"...' isSafe={true}/>
  setTimeout(() => window.location.href = url, 1000);
  return layer;
}
