import styles from './SectionHeading.module.css';

function SectionHeading({ children }) {
  return (
    <h2 className={styles.heading}>
      <span className={styles.slash}>// </span>
      {children}
    </h2>
  );
}

export default SectionHeading;
