import Head from 'next/head';
import { useEffect, useState } from 'react';

import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';

import styles from '../styles/Home.module.css';

const EMAIL_ARRAY = [
  '\u{0063}', 'h', 'a', '\u{006E}', 'h', 'o', '\u{0077}', '1', '\u{0040}', // chanhow1@
  'g', '\u{006D}', 'a', '\u{0069}', 'l', '\u{002E}', 'c', 'o', 'm'  // gmail.com
];

const TELEGRAM_ARRAY = [
  '\u{0040}', 'c', '\u{0068}', 'a', '\u{006E}', 'h', 'o', '\u{0077}', // @chanhow
  '2', '\u{0030}', '0', '\u{0031}'  // 2001
];

export default function Home() {
  const LINKEDIN_URL = 'https://sg.linkedin.com/in/chan-how-chong-a8a2b6213';
  const GITHUB_URL = 'https://github.com/ChillinRage';

  const [outHome, setOutHome] = useState(false);
  const [outTechnology, setOutTechnology] = useState(false);
  const [outProject, setOutProject] = useState(false);
  const [outEducation, setOutEducation] = useState(false);

  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');

  const typeEmail = () => {
    if (email == '') {
      typeCharacter(EMAIL_ARRAY, 0, email, setEmail);
    } else if (email.length == EMAIL_ARRAY.length) {
      untypeCharacter(EMAIL_ARRAY, EMAIL_ARRAY.length - 1, email, setEmail);
    }
  };

  const typeTelegram = () => {
    if (telegram == '') {
      typeCharacter(TELEGRAM_ARRAY, 0, telegram, setTelegram);
    } else if (telegram.length == TELEGRAM_ARRAY.length) {
      untypeCharacter(TELEGRAM_ARRAY, TELEGRAM_ARRAY.length - 1, telegram, setTelegram);
    }
  };

  const [blinkColor, setBlinkColor] = useState('rgb(116, 127, 224)');
  useEffect(
    () => {setTimeout(() => setBlinkColor(blinkColor == 'inherit' ? 'rgb(116, 127, 224)' : 'inherit'), 600);},
    [blinkColor]
  );
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Chong Chan How</title>
        <link rel="icon" href="/HowLogo.ico" />
      </Head>

      {loadInTransition()}
      {outHome ? loadOutTransition('/') : null}
      {outProject ? loadOutTransition('/project') : null}
      {outEducation ? loadOutTransition('/404') : null}
      {outTechnology ? loadOutTransition('/404') : null}

      <main>
        <div className={styles.tabColumn}>
          <a className={styles.navImage} onClick={() => setOutHome(true)}>
            <img className={styles.logo} src='/HowLogo.ico'/>
          </a>
          <a className={styles.navButton} onClick={() => setOutProject(true)}>Projects</a>
          <a className={styles.navButton} onClick={() => setOutEducation(true)}>Education</a>
          <a className={styles.navButton} onClick={() => setOutTechnology(true)}>Technology</a>
        </div>

        <div className={styles.mainContent}>
          <img className={styles.myImage} src='/myImage.jpg'/>
          <div className={styles.myDetails}>
            <h1 className={styles.myName}>Chong Chan How</h1>
            <h2 className={styles.myTitle}>Junior Developer</h2>
            <p className={styles.myIntro}>Idk. Type something else here later.</p>

            <h2 className={styles.boldHeader}>Follow me on: </h2>
            <div>
              <a href={LINKEDIN_URL} target='_blank'>
                <img className={styles.followLogo} src='/linkedin.png'/>
              </a>
              <a href={GITHUB_URL} target='_blank'>
                <img className={styles.followLogo} src='/github.png'/>
              </a>
            </div>

            

            <h2 className={styles.boldHeader}>
              Contact me here: <p className={styles.smallNote}> (Click button to reveal)</p>
            </h2>
            <div className={styles.emailLabel}>
              <button className={styles.email} onClick={typeEmail}>Email</button>
              <h3 className={styles.textArea}>
                {'> '}{email}<span style={{backgroundColor: blinkColor}}>&nbsp;</span>
              </h3>
            </div>
            <div className={styles.telegramLabel}>
              <button className={styles.telegram} onClick={typeTelegram}>Telegram</button>
              <h3 className={styles.textArea}>
                {'> '}{telegram}<span style={{backgroundColor: blinkColor}}>&nbsp;</span>
              </h3>
            </div>
              
          </div>
          
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


function typeCharacter(array, index, currentText, setText) {
  if (index < array.length) {
    setText(currentText + array[index]);
    setTimeout(() => typeCharacter(array, index + 1, currentText + array[index], setText), 120);
  };
}

function untypeCharacter(array, index, currentText, setText) {
  if (index >= 0) {
    const newText = currentText.slice(0, currentText.length - array[index].length);
    setText(newText);
    setTimeout(() => untypeCharacter(array, index - 1, newText, setText), 120);
  };
}