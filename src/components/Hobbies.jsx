import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Hobbies.module.css';

function PlantDoodle({ isHovered }) {
  const active = isHovered ? '#4CAF50' : 'var(--icon-dim)';
  const leaf = isHovered ? '#66BB6A' : 'var(--icon-dim)';
  const pot = isHovered ? '#8D6E63' : 'var(--icon-dim)';

  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <path
        d="M14 28 L16 36 L24 36 L26 28 Z"
        fill="none"
        stroke={pot}
        strokeWidth="1.5"
        style={{ transition: 'stroke 0.3s' }}
      />
      <motion.path
        d="M20 28 Q20 20 20 16"
        fill="none"
        stroke={active}
        strokeWidth="1.5"
        animate={isHovered ? { d: 'M20 28 Q22 20 20 16' } : { d: 'M20 28 Q20 20 20 16' }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M20 22 Q14 18 16 14"
        fill="none"
        stroke={active}
        strokeWidth="1.5"
        animate={isHovered ? { d: 'M20 22 Q12 16 14 12' } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M20 18 Q26 14 24 10"
        fill="none"
        stroke={active}
        strokeWidth="1.5"
        animate={isHovered ? { d: 'M20 18 Q28 12 26 8' } : {}}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M20 16 Q16 12 18 8"
        fill="none"
        stroke={leaf}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={isHovered ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
    </svg>
  );
}

function TennisDoodle({ isHovered }) {
  const frame = isHovered ? '#4CAF50' : 'var(--icon-dim)';
  const strings = isHovered ? '#388E3C' : 'var(--icon-dim)';
  const ball = isHovered ? '#CDDC39' : 'var(--icon-dim)';
  const handle = isHovered ? '#795548' : 'var(--icon-dim)';

  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <motion.ellipse
        cx="18" cy="14" rx="10" ry="12"
        fill="none"
        stroke={frame}
        strokeWidth="1.5"
        animate={isHovered ? { rotate: [0, -15, 15, 0] } : {}}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: '18px 14px', transition: 'stroke 0.3s' }}
      />
      <line x1="18" y1="4" x2="18" y2="24" stroke={strings} strokeWidth="0.8" style={{ transition: 'stroke 0.3s' }} />
      <line x1="10" y1="14" x2="26" y2="14" stroke={strings} strokeWidth="0.8" style={{ transition: 'stroke 0.3s' }} />
      <line
        x1="24" y1="24" x2="32" y2="36"
        stroke={handle}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: 'stroke 0.3s' }}
      />
      <motion.circle
        cx="34" cy="8" r="3"
        fill={isHovered ? '#CDDC39' : 'none'}
        stroke={ball}
        strokeWidth="1.5"
        animate={isHovered ? { y: [0, -6, 0, -3, 0], x: [0, -2, 0] } : {}}
        transition={{ duration: 0.6 }}
        style={{ transition: 'stroke 0.3s, fill 0.3s' }}
      />
    </svg>
  );
}

function ThriftDoodle({ isHovered }) {
  const hanger = isHovered ? '#FF7043' : 'var(--icon-dim)';
  const shirt = isHovered ? '#FF8A65' : 'var(--icon-dim)';
  const tag = isHovered ? '#FFB74D' : 'var(--icon-dim)';

  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <motion.path
        d="M20 8 L20 12 L10 22 L30 22 L20 12"
        fill="none"
        stroke={hanger}
        strokeWidth="1.5"
        strokeLinejoin="round"
        animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: '20px 8px', transition: 'stroke 0.3s' }}
      />
      <path
        d="M20 8 Q22 4 20 2"
        fill="none"
        stroke={hanger}
        strokeWidth="1.5"
        style={{ transition: 'stroke 0.3s' }}
      />
      <motion.path
        d="M10 22 L10 34 L30 34 L30 22"
        fill="none"
        stroke={shirt}
        strokeWidth="1.5"
        style={{ transition: 'stroke 0.3s' }}
      />
      <motion.g
        animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: '30px 22px' }}
      >
        <rect
          x="30" y="20" width="8" height="6" rx="1"
          fill="none"
          stroke={tag}
          strokeWidth="1"
          style={{ transition: 'stroke 0.3s' }}
        />
        <circle
          cx="32" cy="22" r="0.8"
          fill={tag}
          style={{ transition: 'fill 0.3s' }}
        />
      </motion.g>
    </svg>
  );
}

function LanguageDoodle({ isHovered }) {
  const bubble = isHovered ? '#7C4DFF' : 'var(--icon-dim)';
  const textColor = isHovered ? '#B388FF' : 'var(--icon-dim)';

  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
      <motion.path
        d="M4 6 L36 6 L36 26 L22 26 L16 32 L16 26 L4 26 Z"
        fill="none"
        stroke={bubble}
        strokeWidth="1.5"
        strokeLinejoin="round"
        style={{ transition: 'stroke 0.3s' }}
      />
      <motion.text
        x="20" y="19"
        textAnchor="middle"
        fontSize="10"
        fill={textColor}
        fontFamily="var(--font-mono)"
        animate={isHovered ? { opacity: [1, 0, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ transition: 'fill 0.3s' }}
      >
        {isHovered ? 'hola' : 'hello'}
      </motion.text>
    </svg>
  );
}

const hobbies = [
  {
    label: 'growing plants',
    detail: 'expanding my collection one leaf at a time',
    Doodle: PlantDoodle,
  },
  {
    label: 'playing tennis',
    detail: 'recently picked up, still chasing the ball',
    Doodle: TennisDoodle,
  },
  {
    label: 'thrifting',
    detail: 'hunting for hidden gems in second-hand shops',
    Doodle: ThriftDoodle,
  },
  {
    label: 'learning languages',
    detail: 'goal: pick up a language or two this year',
    Doodle: LanguageDoodle,
  },
];

function HobbyCard({ hobby, index }) {
  const [hovered, setHovered] = useState(false);
  const { Doodle } = hobby;

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className={styles.doodle}>
        <Doodle isHovered={hovered} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.label}>{hobby.label}</h4>
        <p className={styles.detail}>{hobby.detail}</p>
      </div>
    </motion.div>
  );
}

function Hobbies() {
  return (
    <section id="hobbies">
      <SectionHeading>hobbies</SectionHeading>
      <div className={styles.grid}>
        {hobbies.map((hobby, i) => (
          <HobbyCard key={hobby.label} hobby={hobby} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
