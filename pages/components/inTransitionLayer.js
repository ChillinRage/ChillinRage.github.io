import { useState } from 'react';
import styles from '../../styles/components/inTransitionLayer.module.css';

const POMPOM_SAFE_PICS = [
  'ok',
  'rush',
  'shine',
  'wave',
];

const POMPOM_DANGER_PICS = [
  'cry',
  'curious',
  'shock',
];

export default function InTransition({message, isSafe}) {
  const [isActive, setActive] = useState(true);
  setTimeout(() => setActive(false), 1000);

  const image = '/pompom/'
    + (isSafe ? getRandomPic(POMPOM_SAFE_PICS) : getRandomPic(POMPOM_DANGER_PICS))
    + '.png';

  return (
    <div className={isActive ? styles.page : styles.page_vanish}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image}/>
        <h1 className={styles.message}>{message}</h1>
      </div>
    </div>
  );
}

function getRandomPic(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}