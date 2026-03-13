import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

function SectionHeading({ children }) {
  return (
    <motion.h2
      className={styles.heading}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.slash}>// </span>
      {children}
    </motion.h2>
  );
}

export default SectionHeading;
