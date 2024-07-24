import styles from '../../styles/components/sideLabel.module.css';

export default function SideLabel({label}) {
    return (
        <a href={'#' + label} className={styles.label}>{label}</a>
    );
}
