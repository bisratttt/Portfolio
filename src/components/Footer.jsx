import { motion } from 'framer-motion';
import { FiPrinter, FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      data-print-hide
    >
      <p className={styles.note}>bisrat zerihun · san francisco, ca</p>

      <div className={styles.actions}>
        <button className={styles.action} onClick={() => window.print()}>
          <FiPrinter className={styles.icon} />
          print
        </button>
        <button
          className={styles.action}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FiArrowUp className={styles.icon} />
          top
        </button>
      </div>
    </motion.footer>
  );
}

export default Footer;
