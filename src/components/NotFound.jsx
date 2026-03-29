import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.code}>404</div>
        <p className={styles.message}>page not found</p>
        <div className={styles.divider} style={{ margin: '1.5rem auto' }} />
        <Link to="/" className={styles.home}>
          back to home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
