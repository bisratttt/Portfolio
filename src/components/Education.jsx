import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Education.module.css';

const VT_PATH = "M55.21,15.07c-4.56,0-8.75,2.5-10.91,6.5l-2.67,4.93l-0.31,0.57l-0.3,0.56v0l-8.06,14.9l-13.16-24.6h5.85l4.71,8.76l2.47,4.6l2.55-4.56l4.94-8.81h4.27c1.03-1.15,2.24-2.11,3.56-2.87h-9.51l-5.76,10.27l-5.53-10.27H15.01L32.94,48.6l9.98-18.45l1.66-3.06l0.31-0.57l1.92-3.55c0.1-0.19,0.22-0.38,0.33-0.57c1.28-2.02,3.26-3.48,5.53-4.11c0.62-0.17,1.26-0.28,1.91-0.33c0.22-0.01,0.44-0.02,0.66-0.02h26.14l-2.64,4.92H66.64l-0.81,1.52L54.64,45.4h-5.93l9.81-18.23l2.28-4.23H49.02c-0.67,1.06-1.64,2.87-1.64,2.87H56L43.9,48.27h12.46l12-22.55h12.09l5.72-10.65H55.21z";

function VTLogo({ isActive }) {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        pathLength: [0, 1],
        opacity: [0.6, 1],
        transition: { duration: 0.6, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }
  }, [isActive]);

  return (
    <div className={styles.turkey}>
      <svg
        width="26"
        height="13"
        viewBox="12 12 78 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        {/* Filled shape, dims when inactive */}
        <path
          d={VT_PATH}
          fill={isActive ? '#861F41' : 'var(--icon-dim)'}
          style={{ transition: 'fill 0.4s' }}
        />
        {/* Stroke that draws itself on hover, layered on top */}
        <motion.path
          d={VT_PATH}
          fill="none"
          stroke="#861F41"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
        />
      </svg>
    </div>
  );
}

function Education() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="education">
      <SectionHeading>education</SectionHeading>
      <motion.div
        className={styles.card}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className={styles.header}>
          <div className={styles.schoolRow}>
            <VTLogo isActive={hovered} />
            <h3 className={styles.school}>Virginia Tech</h3>
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
