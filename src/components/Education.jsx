import { useRef, useState, useEffect, useId } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from './Section';
import { Entry, TitleRow, RoleRow } from './Entry';
import styles from './Education.module.css';

const VT_PATH = "M55.21,15.07c-4.56,0-8.75,2.5-10.91,6.5l-2.67,4.93l-0.31,0.57l-0.3,0.56v0l-8.06,14.9l-13.16-24.6h5.85l4.71,8.76l2.47,4.6l2.55-4.56l4.94-8.81h4.27c1.03-1.15,2.24-2.11,3.56-2.87h-9.51l-5.76,10.27l-5.53-10.27H15.01L32.94,48.6l9.98-18.45l1.66-3.06l0.31-0.57l1.92-3.55c0.1-0.19,0.22-0.38,0.33-0.57c1.28-2.02,3.26-3.48,5.53-4.11c0.62-0.17,1.26-0.28,1.91-0.33c0.22-0.01,0.44-0.02,0.66-0.02h26.14l-2.64,4.92H66.64l-0.81,1.52L54.64,45.4h-5.93l9.81-18.23l2.28-4.23H49.02c-0.67,1.06-1.64,2.87-1.64,2.87H56L43.9,48.27h12.46l12-22.55h12.09l5.72-10.65H55.21z";

const COURSES = [
  'Data Structures & Algorithms',
  'Software Design',
  'Computer Organization',
  'Computer Systems',
  'Combinatorics',
  'Linear Algebra',
  'Cryptography',
];

/**
 * The lettermark renders at 26x13px from a 78x40 viewBox, so anything
 * fine-grained (a traced outline, particles) lands sub-pixel and reads as
 * mush. A large-area colour change is the only thing legible at this size,
 * so the school colours sweep across the mark on hover — the same idea as
 * Atlassian's flood, rotated 90 degrees, and contained entirely within the
 * logo box so nothing spills over the "Virginia Tech" text beside it.
 */
function VTLogo({ isActive }) {
  const uid = useId();
  const gradId = `vt-grad-${uid}`;
  const maskId = `vt-mask-${uid}`;

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
        <defs>
          {/* Chicago Maroon -> Burnt Orange, VT's two official colours */}
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#861F41" />
            <stop offset="100%" stopColor="#E5751F" />
          </linearGradient>

          {/* Wipe: a rect that grows left-to-right, revealing the colour layer */}
          <mask id={maskId}>
            <motion.rect
              x="10"
              y="10"
              height="44"
              fill="#fff"
              initial={false}
              animate={{ width: isActive ? 82 : 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            />
          </mask>
        </defs>

        {/* Base. The mark is a thin lettermark, so it stays full-contrast at
            rest rather than dimming like the chunkier company logos. */}
        <path d={VT_PATH} fill="var(--icon-bright)" />

        {/* Colour layer, revealed by the wipe */}
        <g mask={`url(#${maskId})`}>
          <path d={VT_PATH} fill={`url(#${gradId})`} />
        </g>
      </svg>
    </div>
  );
}

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-80px' });
  const [hovered, setHovered] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    if (canHover) return;
    let timer;
    if (inView) {
      timer = setTimeout(() => setMobileActive(true), 400);
    } else {
      setMobileActive(false);
    }
    return () => clearTimeout(timer);
  }, [inView]);

  const isActive = canHover ? hovered : mobileActive;

  return (
    <Section title="Education">
      <Entry
        ref={ref}
        onHoverStart={canHover ? () => setHovered(true) : undefined}
        onHoverEnd={canHover ? () => setHovered(false) : undefined}
      >
        <TitleRow right="Blacksburg, VA">
          <VTLogo isActive={isActive} />
          Virginia Tech
        </TitleRow>

        <RoleRow right="2023">
          B.S. Computer Science
          <span className={styles.normal}>
            {' · '}Minor in Mathematics &amp; Philosophy{' · '}Magna Cum Laude
          </span>
        </RoleRow>

        <p className={styles.courses}>
          <span className={styles.coursesLabel}>Courses: </span>
          {COURSES.join(', ')}
        </p>

        <motion.p
          className={styles.motto}
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 0.55 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden={!isActive}
        >
          ut prosim ~ that i may serve
        </motion.p>
      </Entry>
    </Section>
  );
}

export default Education;
