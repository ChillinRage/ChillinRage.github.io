import Head from 'next/head';
import { useState } from 'react';

import ProjectCard from '../components/projectCard';
import SideLabel from '../components/sideLabel';
import InTransition from '../components/inTransitionLayer';
import OutTransition from '../components/outTransitionLayer';
import styles from '../styles/Project.module.css';

const UP_ARROW = <>&#x25B2;</>;
const DOWN_ARROW = <>&#x25BC;</>;

export default function Project() {
  const projects = getProjects();

  const [displaySchool, setSchool] = useState(false);
  const [displayOpenSource, setOpenSource] = useState(false);
  const [displaySide, setSide] = useState(false);

  const [displayOut, setOut] = useState(false);

  return (
    <div>
      <Head>
        <title>Chong Chan How (Project)</title>
        <link rel="icon" href="/HowLogo.ico" />
      </Head>

      {loadInTransition()}
      {displayOut ? loadOutTransition('/') : null}

      <div className={styles.sidebar}>
        <a href='#' onClick={reloadPage} className={styles.sidebarTitle}>Projects</a>

        <a href='#schoolProject' className={styles.sidebarLink}>School Projects</a>
        {projects.filter(p => p.type == 'SCHOOL').map(p => <SideLabel label={p.title}/>)}
        <a href='#openSource' className={styles.sidebarLink}>Open-Source</a>
        {projects.filter(p => p.type == 'OPENSOURCE').map(p => <SideLabel label={p.title}/>)}
        <a href='#sideProject' className={styles.sidebarLink}>Side Projects</a>
        {projects.filter(p => p.type == 'SIDE').map(p => <SideLabel label={p.title}/>)}

        <div className={styles.homeWrapper}>
          <a className={styles.homeButton} onClick={() => setOut(true)}>&#9664; Return to Home Page</a>
        </div>
      </div>

      <main className={styles.mainContent}>
        <div id='schoolProject' onClick={() => setSchool(!displaySchool)}className={styles.projectSection}>
          <h2 className={styles.leftArrow}>{displaySchool ? DOWN_ARROW : UP_ARROW}</h2>
          <h2>School Projects</h2>
          <h2 className={styles.rightArrow}>{displaySchool ? DOWN_ARROW : UP_ARROW}</h2>
        </div>

        <div id='schoolProjectContainer' className={displaySchool ? styles.projects : styles.projectsHidden}>
        <div className={styles.inner}>{projects.filter(p => p.type == 'SCHOOL').map(p => <ProjectCard project={p}/>)}</div>
        </div>

        <div id='openProject' onClick={() => setOpenSource(!displayOpenSource)} className={styles.projectSection}>
          <h2 className={styles.leftArrow}>{displayOpenSource ? DOWN_ARROW : UP_ARROW}</h2>
          <h2>Open Source</h2>
          <h2 className={styles.rightArrow}>{displayOpenSource ? DOWN_ARROW : UP_ARROW}</h2>
        </div>

        <div id='openProjectContainer' className={displayOpenSource ? styles.projects : styles.projectsHidden}>
        <div className={styles.inner}>{projects.filter(p => p.type == 'OPENSOURCE').map(p => <ProjectCard project={p}/>)}</div>
        </div>

        <div id='sideProject' onClick={() => setSide(!displaySide)} className={styles.projectSection}>
          <h2 className={styles.leftArrow}>{displaySide ? DOWN_ARROW : UP_ARROW}</h2>
          <h2>Side Projects</h2>
          <h2 className={styles.rightArrow}>{displaySide ? DOWN_ARROW : UP_ARROW}</h2>
        </div>

        <div id='sideProjectContainer' className={displaySide ? styles.projects : styles.projectsHidden}>
          <div className={styles.inner}>{projects.filter(p => p.type == 'SIDE').map(p => <ProjectCard project={p}/>)}</div>
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          padding: 2em 12% 2em 25%;
          vertical-align: center;
        }
        h2 {
          display: inline;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
          background-color: rgb(255, 239, 239);
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        #__next {
          width: 100%;
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  );
}

/**
 * 
 * @returns An array where each element is a "Project" Object.
 */
function getProjects() {
  const NUSContactsProject = createProjectObject(
    'SCHOOL',
    'preview/nuscontacts.png',
    'NUSContacts',
    'A desktop app designed for NUS Students, offering a streamlined way '
      + 'to manage their academic contacts with ease. Whether you’re organizing peer groups, '
      + 'keeping track of tutors, or connecting with professors, NUSContacts centralizes '
      + 'the organization of contacts.',
    'Gradle, Java, JUnit',
    'https://ay2324s2-cs2103t-t11-2.github.io/tp/',
    'https://github.com/ChillinRage/tp',
  );

  const holoCureProject = createProjectObject(
    'SIDE',
    'preview/holocure.jpg',
    'HoloCure Fishing Bot',
    'A bot designed to auto-farm for fishes in the game "HoloCure". '
      + 'It utilizes Python libraries to capture screen frames in real-time to detect in-game '
      + 'fishing controls and executes the necessary keys to catch the fish. This automates the '
      + '"grindy" aspect of the game to obtain lots of in-game gold.',
    'Python',
    '404',
    'https://github.com/ChillinRage/HoloCure-Fishing-Bot',
  );

  const birthdayWishProject = createProjectObject(
    'SIDE',
    'preview/birthdayWish.png',
    'Birthday Wisher',
    'An automation tool designed to send personalized birthday emails. '
      + 'By leveraging Python libraries and windows scheduler, the bot retrieves '
      + 'contact information from a predefined file and sends birthday messages via email, '
      + 'ensuring no birthday is missed. This simplifies the process of remembering and '
      + 'celebrating important dates, making it an ideal solution for personal use.',
    'Python',
    '404',
    'https//github.com/ChillinRage/Birthday-Bot',
  );

  const screenAnnotateProject = createProjectObject(
    'SIDE',
    'preview/screenAnnotate.png',
    'Screen Annotater',
    'This is a short description of this project.',
    'Java',
    '404',
    '404',
  );

  const nusmodsProject = createProjectObject(
    'OPENSOURCE',
    'preview/nusmods.png',
    'NUSMods',
    'Contributed to "NUSMods", a comprehensive timetable planner for NUS. By '
      + 'fixing noticeable bugs and improving the user interface, my contributions '
      + 'sees tangible impacts on NUS students with a more accurate and informative planner '
      + 'to aid in their course planning.',
    'TypeScript',
    'https://nusmods.com',
    'https://github.com/ChillinRage/nusmods',
  );

  const myAcademicRecordProject = createProjectObject(
    'SIDE',
    'preview/academic.png',
    'My Academic Record',
    'This is a short description of this project.',
    'CSS, HTML, ReactJS, TypeScript',
    'https://chillinrage.github.io/Academic-Results/',
    'https://github.com/ChillinRage/Academic-Results/tree/react',
  );

  const PortfolioProject = createProjectObject(
    'SIDE',
    'preview/portfolio.png',
    'Portfolio Page',
    'This is a short description of this project.',
    'CSS, HTML, JavaScript, NextJS',
    '/',
    '404',
  );

  const SudokuProject = createProjectObject(
    'SIDE',
    'preview/sudoku.png',
    'Sudoku Solver',
    'The Sudoku Solver project is a web-based application developed using JavaScript, '
      + 'HTML, and CSS. It allows users to input Sudoku puzzles and receive instant solutions. '
      + 'The interface is designed to be user-friendly, with a clean and intuitive layout for easy puzzle entry.',
    'CSS, HTML, JavaScript',
    'https://chillinrage.github.io/Sudoku-Solver/main.html',
    'https://github.com/ChillinRage/Sudoku-Solver',
  );

  return [
    NUSContactsProject,
    holoCureProject,
    birthdayWishProject,
    screenAnnotateProject,
    nusmodsProject,
    myAcademicRecordProject,
    PortfolioProject,
    SudokuProject,
  ];
}

function createProjectObject(type, preview, title, description, skillset, mainLink, sourceLink) {
  return {
    type: type,
    preview: preview,
    title: title,
    description: description,
    skillset: skillset,
    mainLink: mainLink,
    sourceLink: sourceLink,
  };
}

function loadInTransition() {
  const [layer, setLayer] = useState(<InTransition message='Arriving at "Project"...' isSafe={true}/>);
  setTimeout(() => setLayer(null), 1500);
  return layer;
}

function loadOutTransition(url) {
  const layer = <OutTransition message='Leaving "Project"...' isSafe={true}/>
  setTimeout(() => window.open(url, "_self"), 1000);
  return layer;
}

function reloadPage() {
  window.location.replace('#');
  window.location.reload();
}
