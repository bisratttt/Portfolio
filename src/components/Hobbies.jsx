import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Hobbies.module.css';

// ── B: Succulent Bloom ────────────────────────────────────────────────────────
function PlantDoodle({ isHovered }) {
  const green = isHovered ? '#4CAF50' : 'var(--icon-dim)';
  const lightGreen = isHovered ? '#81C784' : 'var(--icon-dim)';
  const pot = isHovered ? '#8D6E63' : 'var(--icon-dim)';
  const potRim = isHovered ? '#A1887F' : 'var(--icon-dim)';
  const petalColor = isHovered ? '#F06292' : 'var(--icon-dim)';
  const petalInner = isHovered ? '#F8BBD0' : 'var(--icon-dim)';
  const stemColor = isHovered ? '#66BB6A' : 'var(--icon-dim)';

  // 8 petals radiating from center when hovered
  const petalCount = 6;
  const petalAngles = Array.from({ length: petalCount }, (_, i) => (i * 360) / petalCount);

  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      {/* Pot body */}
      <path
        d="M16 34 L17 44 L31 44 L32 34 Z"
        fill="none"
        stroke={pot}
        strokeWidth="1.4"
        strokeLinejoin="round"
        style={{ transition: 'stroke 0.3s' }}
      />
      {/* Pot rim */}
      <path
        d="M14 34 L34 34"
        stroke={potRim}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: 'stroke 0.3s' }}
      />
      {/* Soil line */}
      <path
        d="M17 35 Q24 33 31 35"
        fill="none"
        stroke={pot}
        strokeWidth="1"
        strokeLinecap="round"
        style={{ transition: 'stroke 0.3s' }}
      />

      {/* Outer succulent leaves — 5 chunky leaves around the base */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const cx = 24, cy = 30;
        const r = isHovered ? 6 : 5;
        const lx = cx + Math.cos(rad) * r;
        const ly = cy + Math.sin(rad) * r;
        return (
          <motion.ellipse
            key={`leaf-outer-${i}`}
            cx={lx}
            cy={ly}
            rx="3.5"
            ry="5.5"
            transform={`rotate(${angle}, ${lx}, ${ly})`}
            fill="none"
            stroke={green}
            strokeWidth="1.3"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            style={{ transformOrigin: `${lx}px ${ly}px`, transition: 'stroke 0.3s' }}
          />
        );
      })}

      {/* Inner leaves — smaller ring */}
      {[36, 108, 180, 252, 324].map((angle, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const cx = 24, cy = 29;
        const r = 3;
        const lx = cx + Math.cos(rad) * r;
        const ly = cy + Math.sin(rad) * r;
        return (
          <motion.ellipse
            key={`leaf-inner-${i}`}
            cx={lx}
            cy={ly}
            rx="2.2"
            ry="3.5"
            transform={`rotate(${angle}, ${lx}, ${ly})`}
            fill="none"
            stroke={lightGreen}
            strokeWidth="1.2"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
            style={{ transition: 'stroke 0.3s' }}
          />
        );
      })}

      {/* Flower stem — grows up on hover */}
      <motion.line
        x1="24" y1="28"
        x2="24"
        y2={isHovered ? 14 : 24}
        stroke={stemColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        animate={{ y2: isHovered ? 14 : 24 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{ transition: 'stroke 0.3s' }}
      />

      {/* Flower petals — fan out on hover */}
      {petalAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const pr = isHovered ? 5 : 0;
        const px = 24 + Math.cos(rad) * pr;
        const py = 14 + Math.sin(rad) * pr;
        return (
          <motion.ellipse
            key={`petal-${i}`}
            cx={px}
            cy={py}
            rx="2.5"
            ry="3.5"
            transform={`rotate(${angle + 90}, ${px}, ${py})`}
            fill="none"
            stroke={petalColor}
            strokeWidth="1.2"
            animate={{
              cx: px,
              cy: py,
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.35, delay: 0.3 + i * 0.04, ease: 'backOut' }}
            style={{ transformOrigin: `${px}px ${py}px`, transition: 'stroke 0.3s' }}
          />
        );
      })}

      {/* Flower center */}
      <motion.circle
        cx="24" cy="14" r="2.5"
        fill="none"
        stroke={petalInner}
        strokeWidth="1.2"
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.55 }}
        style={{ transformOrigin: '24px 14px', transition: 'stroke 0.3s' }}
      />

      {/* Water drops falling on hover */}
      {isHovered && [0, 1, 2].map((i) => (
        <motion.circle
          key={`drop-${i}`}
          cx={18 + i * 6}
          cy={6}
          r={1}
          fill={lightGreen}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 8, 16], opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.9, delay: i * 0.2, repeat: Infinity, repeatDelay: 0.4 }}
        />
      ))}
    </svg>
  );
}

// ── A: Spinning Tennis Ball with seams ────────────────────────────────────────
function TennisDoodle({ isHovered }) {
  const ballControls = useAnimation();
  const shadowControls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      ballControls.start({
        y: [-9, 0, -9],
        transition: { duration: 0.55, repeat: Infinity, ease: 'easeInOut' },
      });
      shadowControls.start({
        rx: [4, 7, 4],
        opacity: [0.25, 0.55, 0.25],
        transition: { duration: 0.55, repeat: Infinity, ease: 'easeInOut' },
      });
    } else {
      ballControls.stop();
      ballControls.start({ y: 0, transition: { duration: 0.25, ease: 'easeOut' } });
      shadowControls.stop();
      shadowControls.start({ rx: 0, opacity: 0, transition: { duration: 0.25 } });
    }
  }, [isHovered, ballControls, shadowControls]);

  const ballYellow = isHovered ? '#CDDC39' : 'var(--icon-dim)';
  const seamColor  = isHovered ? '#8BC34A' : 'var(--icon-dim)';

  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      {/* Ground shadow */}
      <motion.ellipse
        cx="24" cy="44"
        rx={0} ry={1.5}
        fill="rgba(100,120,0,0.25)"
        animate={shadowControls}
      />

      {/* Ball group — bounces via controls */}
      <motion.g animate={ballControls}>
        <circle
          cx="24" cy="26" r="11"
          fill="none"
          stroke={ballYellow}
          strokeWidth="2"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* S-curve seams */}
        <path
          d="M14 22 Q18 26 14 30"
          fill="none" stroke={seamColor}
          strokeWidth="1.5" strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />
        <path
          d="M34 22 Q30 26 34 30"
          fill="none" stroke={seamColor}
          strokeWidth="1.5" strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />
      </motion.g>

      {/* Speed lines — only rendered when hovered so no leftover animation */}
      {isHovered && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1={37} y1={17 + i * 4}
              x2={43} y2={16 + i * 4}
              stroke={ballYellow}
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ x1: [37, 40], x2: [43, 46], opacity: [0, 1, 0] }}
              transition={{ duration: 0.35, delay: i * 0.1, repeat: Infinity, repeatDelay: 0.3 }}
            />
          ))}
        </motion.g>
      )}
    </svg>
  );
}

// ── A: Vinyl Record ───────────────────────────────────────────────────────────
function ThriftDoodle({ isHovered }) {
  const recordColor = isHovered ? '#1a1a2e' : 'var(--icon-dim)';
  const grooveColor = isHovered ? '#2d2d4e' : 'var(--icon-dim)';
  const labelColor = isHovered ? '#E53935' : 'var(--icon-dim)';
  const labelInner = isHovered ? '#EF9A9A' : 'var(--icon-dim)';
  const needleColor = isHovered ? '#9E9E9E' : 'var(--icon-dim)';
  const shineColor = isHovered ? 'rgba(255,255,255,0.15)' : 'transparent';

  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      {/* Record body — spins on hover */}
      <motion.g
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={isHovered ? { duration: 3, repeat: Infinity, ease: 'linear' } : { duration: 0.5 }}
        style={{ transformOrigin: '24px 26px' }}
      >
        {/* Outer edge */}
        <circle
          cx="24" cy="26" r="16"
          fill="none"
          stroke={recordColor}
          strokeWidth="2"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* Grooves — concentric rings */}
        {[13, 11, 9, 7].map((r, i) => (
          <circle
            key={`groove-${i}`}
            cx="24" cy="26" r={r}
            fill="none"
            stroke={grooveColor}
            strokeWidth="0.7"
            style={{ transition: 'stroke 0.3s' }}
          />
        ))}
        {/* Label circle */}
        <circle
          cx="24" cy="26" r="5.5"
          fill="none"
          stroke={labelColor}
          strokeWidth="3"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* Center hole */}
        <circle
          cx="24" cy="26" r="1.5"
          fill="none"
          stroke={labelInner}
          strokeWidth="1"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* Shine highlight */}
        <path
          d="M14 16 Q18 13 22 15"
          fill="none"
          stroke={shineColor}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />
      </motion.g>

      {/* Needle arm — drops down on hover */}
      <motion.g
        animate={isHovered ? { rotate: 18 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: '38px 8px' }}
      >
        <line
          x1="38" y1="8"
          x2="34" y2="22"
          stroke={needleColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* Needle head */}
        <circle
          cx="34" cy="22" r="1.5"
          fill="none"
          stroke={needleColor}
          strokeWidth="1.2"
          style={{ transition: 'stroke 0.3s' }}
        />
        {/* Pivot */}
        <circle
          cx="38" cy="8" r="2"
          fill="none"
          stroke={needleColor}
          strokeWidth="1.2"
          style={{ transition: 'stroke 0.3s' }}
        />
      </motion.g>

      {/* Sound waves emanating when playing */}
      {isHovered && [1, 2, 3].map((i) => (
        <motion.path
          key={`wave-${i}`}
          d={`M ${10 - i * 2} ${26 - i * 3} Q ${6 - i * 2} 26 ${10 - i * 2} ${26 + i * 3}`}
          fill="none"
          stroke={labelColor}
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 0.7, 0], x: [-4, -8] }}
          transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

// ── A: Scrolling language train ───────────────────────────────────────────────
// Characters scroll left continuously. Hover speeds them up.
// useMotionValue keeps position across hover state changes.
const LANG_CHARS = [
  { char: 'A',  color: '#4FC3F7' },  // English
  { char: 'α',  color: '#CE93D8' },  // Greek
  { char: 'あ', color: '#F48FB1' },  // Japanese
  { char: 'ب',  color: '#80CBC4' },  // Arabic
  { char: '가', color: '#FFCC02' },  // Korean
  { char: 'ñ',  color: '#A5D6A7' },  // Spanish
  { char: 'β',  color: '#CE93D8' },
  { char: 'い', color: '#F48FB1' },
  { char: 'ت',  color: '#80CBC4' },
  { char: '나', color: '#FFCC02' },
  { char: 'é',  color: '#A5D6A7' },
  { char: '你', color: '#FF8A65' },  // Chinese
];
// Duplicate for seamless loop
const TRAIN = [...LANG_CHARS, ...LANG_CHARS];
const CHAR_W = 14;        // px spacing per character in SVG units
const TOTAL_W = LANG_CHARS.length * CHAR_W; // loop resets after this

function LanguageDoodle({ isHovered }) {
  const x = useMotionValue(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const speed = isHovered ? 28 : 10; // SVG units per second

    const tick = (time) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        let next = x.get() - speed * dt;
        if (next < -TOTAL_W) next += TOTAL_W; // seamless loop
        x.set(next);
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [isHovered, x]);

  const frameColor = isHovered ? '#7C4DFF' : 'var(--icon-dim)';

  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <clipPath id="train-clip">
          <rect x="2" y="14" width="44" height="20" rx="3" />
        </clipPath>
      </defs>

      {/* Display frame */}
      <rect
        x="2" y="14" width="44" height="20" rx="3"
        fill="none"
        stroke={frameColor}
        strokeWidth="1.3"
        style={{ transition: 'stroke 0.3s' }}
      />

      {/* Fade masks on left/right edges */}
      <defs>
        <linearGradient id="fade-l" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stopColor="var(--bg)" stopOpacity="1" />
          <stop offset="25%"  stopColor="var(--bg)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fade-r" x1="0" x2="1" y1="0" y2="0">
          <stop offset="75%"  stopColor="var(--bg)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Scrolling characters */}
      <g clipPath="url(#train-clip)">
        <motion.g style={{ x }}>
          {TRAIN.map(({ char, color }, i) => (
            <text
              key={i}
              x={i * CHAR_W + 10}
              y="27"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="9"
              fill={isHovered ? color : 'var(--icon-dim)'}
              fontFamily="var(--font-mono)"
              style={{ transition: 'fill 0.4s' }}
            >
              {char}
            </text>
          ))}
        </motion.g>
      </g>

      {/* Edge fades so characters slip in/out cleanly */}
      <rect x="2" y="14" width="10" height="20" fill="url(#fade-l)" />
      <rect x="36" y="14" width="10" height="20" fill="url(#fade-r)" />

      {/* Small label underneath */}
      <text
        x="24" y="41"
        textAnchor="middle"
        fontSize="5.5"
        fill={isHovered ? '#B39DDB' : 'var(--icon-dim)'}
        fontFamily="var(--font-mono)"
        style={{ transition: 'fill 0.3s' }}
      >
        hello · hola · こんにちは
      </text>
    </svg>
  );
}

// ── Hobbies data & layout ─────────────────────────────────────────────────────

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

function HobbyCard({ hobby }) {
  const [hovered, setHovered] = useState(false);
  const { Doodle } = hobby;

  return (
    <motion.div
      className={styles.card}
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
          <HobbyCard key={hobby.label} hobby={hobby} />
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
