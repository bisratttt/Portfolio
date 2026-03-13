import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Education.module.css';

function HokieTurkey({ isActive }) {
  const maroon = '#861F41';
  const maroonLight = '#C05070';
  const orange = '#E87722'; // VT orange for beak/feet
  const dim = 'var(--icon-dim)';

  // Tail feather angles — fan out on hover
  const featherAngles = [-50, -30, -10, 10, 30, 50];

  return (
    <motion.div
      className={styles.turkey}
      animate={isActive ? { y: [0, -3, 0, -2, 0] } : {}}
      transition={{ duration: 0.7 }}
    >
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        {/* Tail feathers — fan out on hover */}
        {featherAngles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 24, cy = 28;
          const len = isActive ? 14 : 9;
          const x2 = cx + Math.sin(rad) * len;
          const y2 = cy - Math.cos(rad) * len;
          return (
            <motion.line
              key={i}
              x1={cx} y1={cy}
              x2={x2} y2={y2}
              stroke={isActive ? (i % 2 === 0 ? maroon : maroonLight) : dim}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ x2, y2 }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: 'easeOut' }}
              style={{ transition: 'stroke 0.3s' }}
            />
          );
        })}

        {/* Body */}
        <motion.ellipse
          cx="24" cy="32" rx="7" ry="6"
          fill="none"
          stroke={isActive ? maroon : dim}
          strokeWidth="1.5"
          animate={isActive ? { ry: [6, 6.5, 6] } : {}}
          transition={{ duration: 0.5 }}
          style={{ transition: 'stroke 0.3s' }}
        />

        {/* Neck */}
        <motion.path
          d="M22 27 Q21 22 23 19"
          fill="none"
          stroke={isActive ? maroon : dim}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />

        {/* Head */}
        <motion.circle
          cx="24" cy="17" r="4"
          fill="none"
          stroke={isActive ? maroon : dim}
          strokeWidth="1.5"
          animate={isActive ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: '24px 17px', transition: 'stroke 0.3s' }}
        />

        {/* Eye */}
        <circle
          cx="25.5" cy="16"
          r={isActive ? 1.2 : 0.8}
          fill={isActive ? maroon : dim}
          style={{ transition: 'fill 0.3s, r 0.3s' }}
        />

        {/* Beak */}
        <motion.path
          d="M28 17 L32 16.5 L28 18"
          fill="none"
          stroke={isActive ? orange : dim}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          animate={isActive ? { d: 'M28 17 L33 16 L28 18.5' } : { d: 'M28 17 L32 16.5 L28 18' }}
          transition={{ duration: 0.4 }}
          style={{ transition: 'stroke 0.3s' }}
        />

        {/* Wattle (snood) */}
        <motion.path
          d="M27 18 Q30 21 27 24"
          fill="none"
          stroke={isActive ? maroonLight : dim}
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={isActive ? { d: 'M27 18 Q32 22 27 26' } : { d: 'M27 18 Q30 21 27 24' }}
          transition={{ duration: 0.5 }}
          style={{ transition: 'stroke 0.3s' }}
        />

        {/* Feet */}
        <motion.path
          d="M20 37 L18 42 M20 37 L20 42 M20 37 L22 42"
          stroke={isActive ? orange : dim}
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />
        <motion.path
          d="M28 37 L26 42 M28 37 L28 42 M28 37 L30 42"
          stroke={isActive ? orange : dim}
          strokeWidth="1.2"
          strokeLinecap="round"
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
