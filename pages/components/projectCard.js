import styles from '../../styles/components/projectCard.module.css';

export default function ProjectCard({project}) {
  const skillCards = parseSkills(project.skillset);

  return (
    <div id={project.title} className={styles.card}>
      <div className={styles.previewContainer}>
        <img className={styles.previewImage} src={project.preview}></img>
      </div>
      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.projectDetail}>{project.description}</p>
        <div className={styles.skillset}>{skillCards}</div>
        <div className={styles.projectLink}>
          <a className={styles.linkLabel} href={project.mainLink} target='_blank'>Main Page</a>
          <a className={styles.linkLabelFlip} href={project.sourceLink} target='_blank'>View source</a>
        </div>
      </div>
    </div>);
}

function SkillCard({label}) {
    return <span className={styles.skillCard}>{label}</span>
}

function parseSkills(skillset) {
  const skills = skillset.split(',');
  return skills.map(skill => <SkillCard label={skill.trim()}/>);
}
