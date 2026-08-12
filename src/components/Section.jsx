import { motion } from 'framer-motion';
import styles from './Section.module.css';

/** A resume section: ruled uppercase label, then content. Fades up once on entry. */
function Section({ title, children }) {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </motion.section>
  );
}

export default Section;
