import { useEffect, useState } from "react";

import styles from '../styles/components/about.module.css';

export default function About() {
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

  return (<>
    <img className={styles.myImage} src='/myImage.jpg'/>
    <div className={styles.myDetails}>
      <h1 className={styles.myName}>Chong Chan How</h1>
      <h2 className={styles.myTitle}>Junior Developer</h2>
      <p className={styles.myIntro}>
        3rd year Computer Science undergrad @ NUS. I specialize in <b>Software Engeering</b>,
        <b> Networking</b> and <b>Distributed Systems</b>. My experience in <b>Data Analysis </b>
        should not be under-estimated either. Click on the tabs on the right to see projects I
        have worked on (or am currently working on).
        <br /><br />
        My hobbies include weekly <b><i>Chunithm</i></b> and occasionally <b><i>Maimai</i></b>.
        Otherwise, the time is spent working on personal or open-source projects.
      </p>

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
</>);
}

// encrypted to prevent email bot scrapers.
const EMAIL_ARRAY = [
  '\u{0063}', 'h', 'a', '\u{006E}', 'h', 'o', '\u{0077}', 'i', '\u{006F}', 's',
  '\u{0040}', 'g', '\u{006D}', 'a', '\u{0069}', 'l', '\u{002E}', 'c', 'o', 'm'
];
  
const TELEGRAM_ARRAY = [
  '\u{0040}', 'c', '\u{0068}', 'a', '\u{006E}', 'h', 'o', '\u{0077}',
  '2', '\u{0030}', '0', '\u{0031}'
];

const LINKEDIN_URL = 'https://sg.linkedin.com/in/chan-how-chong-a8a2b6213';
const GITHUB_URL = 'https://github.com/ChillinRage';


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
