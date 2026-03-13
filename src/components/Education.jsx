import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Education.module.css';

function HokieTurkey({ isActive }) {
  return (
    <motion.div
      className={styles.turkey}
      animate={
        isActive
          ? { rotate: [0, -8, 8, -5, 5, 0], y: [0, -4, 0] }
          : {}
      }
      transition={{ duration: 0.6 }}
    >
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <path
          d="M12 30 L12 24 L8 22 L10 18 L8 14 L12 12 L14 8 L18 10 L22 6 L24 10 L28 8 L30 12 L34 14 L32 18 L34 22 L30 24 L30 30 Z"
          fill="none"
          stroke={isActive ? '#861F41' : 'var(--icon-dim)'}
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s' }}
        />
        <circle
          cx="22"
          cy="14"
          r="1.5"
          fill={isActive ? '#861F41' : 'var(--icon-dim)'}
          style={{ transition: 'fill 0.3s' }}
        />
        <path
          d="M26 15 L30 16 L26 17"
          fill="none"
          stroke={isActive ? '#861F41' : 'var(--icon-dim)'}
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.3s' }}
        />
        <path
          d="M24 17 Q26 20 23 22"
          fill="none"
          stroke={isActive ? '#C64F73' : 'var(--icon-dim)'}
          strokeWidth="1.5"
          style={{ transition: 'stroke 0.3s' }}
        />
      </svg>
    </motion.div>
  );
}

function Education() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="education">
      <SectionHeading>education</SectionHeading>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className={styles.header}>
          <div className={styles.schoolRow}>
            <h3 className={styles.school}>Virginia Tech</h3>
            <HokieTurkey isActive={hovered} />
          </div>
          <span className={styles.period}>May 2023</span>
        </div>
        <p className={styles.degree}>B.S. Computer Science</p>
        <p className={styles.minor}>Minor in Mathematics, Philosophy</p>
        <p className={styles.honors}>Magna Cum Laude</p>

        <motion.div
          className={styles.courses}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.coursesLabel}>courses: </span>
          {[
            'Data Structures & Algorithms',
            'Software Design',
            'Computer Organization',
            'Computer Systems',
            'Combinatorics',
            'Linear Algebra',
            'Cryptography',
          ].map((c) => (
            <span key={c} className={styles.course}>{c}</span>
          ))}
        </motion.div>

        <motion.p
          className={styles.motto}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ut prosim ~ that i may serve
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Education;
