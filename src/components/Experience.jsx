import { useRef, useState, useEffect, useId } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform, animate as fmAnimate } from 'framer-motion';
import Section from './Section';
import { Entry, TitleRow, RoleRow, NextRole, Bullets, B } from './Entry';
import { TechLine } from './TechLine';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Atlassian',
    location: 'San Francisco, CA',
    animation: 'atlassian',
    roles: [
      {
        title: 'Software Engineer II',
        period: '2024 — Present',
        tech: ['TypeScript', 'Python', 'Kubernetes', 'GCP', 'Terraform', 'Docker', 'Knative'],
        bullets: [
          <>Designed an <B>abstraction layer</B> for Atlassian Guard Premium features, ensuring feature isolation and scaled to <B>1M+ customers</B>.</>,
          <>Designed and developed <B>data security policies</B> and their testing framework, enabling enterprise compliance with <B>HIPAA and GDPR</B>.</>,
          <>Architected and led the migration of microservices from <B>AWS to GKE</B>, implementing automated deployment pipelines and <B>Knative serverless</B> infrastructure.</>,
          <>Developed <B>AI-powered automation agents</B> using Chain-of-Thought reasoning and tool-calling to migrate legacy serverless functions to Knative, scaling across <B>400+ microservices</B>.</>,
          <>Reduced deployment time by <B>95%</B> (1hr to 3min) by implementing <B>custom resource definitions</B> and serverless compute patterns.</>,
        ],
      },
      {
        title: 'Software Engineer',
        period: '2023 — 2024',
        tech: ['TypeScript', 'Java', 'GraphQL', 'Splunk', 'Bitbucket Pipelines'],
        bullets: [
          <>Designed and implemented admin-facing <B>data classification tools</B> for Confluence, empowering organization admins to manage data governance for <B>2M+ users</B>.</>,
          <>Built and owned a <B>real-time monitoring framework</B> for 300+ public APIs, implementing app access permission validation that secured a <B>platform-wide security rollout</B>.</>,
          <>Reduced implementation time by <B>60%</B> (5 weeks to 2 weeks) by building a data classification onboarding framework for enterprise customers.</>,
          <>Decreased average PR cycle time by <B>83%</B> (3 days to 18 hours) through a <B>distributed code review system</B> and automated notification workflows.</>,
          <>Designed and implemented client-facing <B>REST and GraphQL APIs</B> for data classification features in Confluence.</>,
        ],
      },
    ],
  },
  {
    company: 'Meta',
    location: 'Washington, DC',
    animation: 'meta',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: '2022',
        tech: ['PHP', 'React.js', 'GraphQL', 'Node.js'],
        bullets: [
          <>Engineered <B>full-stack correspondence platform</B> enabling communication between external users and employees, scaling to process <B>100,000+ requests</B> at launch.</>,
          <>Designed and implemented <B>configurable user preferences system</B>, improving user satisfaction metrics through personalized experience customization.</>,
          <>Presented technical documentation on new internal frameworks to <B>40+ engineers</B>, facilitating knowledge transfer and adoption.</>,
        ],
      },
    ],
  },
];

/**
 * Wraps a logo with an effects layer behind it. `.aura` is a zero-size anchor
 * pinned to the logo's center, so aura pieces can overflow the 20px logo box
 * without disturbing the text baseline they sit on.
 */
function LogoBadge({ children, aura }) {
  return (
    <span className={styles.badge}>
      <span className={styles.aura}>{aura}</span>
      {children}
    </span>
  );
}

const ORBS = [
  { color: '#0082FB', x: -18, y: -11 },
  { color: '#A033FF', x: 17, y: -13 },
  { color: '#FF5C87', x: 14, y: 12 },
  { color: '#0064E0', x: -15, y: 12 },
];

/** Meta: brand-gradient orbs blooming and drifting outward. */
function OrbAura({ isActive }) {
  if (!isActive) return null;

  return ORBS.map((orb, i) => (
    <motion.span
      key={i}
      className={styles.orb}
      style={{ background: orb.color }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={{ x: orb.x, y: orb.y, scale: [0, 1, 0.5], opacity: [0, 0.6, 0] }}
      transition={{ duration: 1.9, delay: i * 0.28, repeat: Infinity, ease: 'easeOut' }}
    />
  ));
}

function AtlassianLogo({ isActive }) {
  const uid = useId();
  const gradLeftId = `atl-gl-${uid}`;
  const gradRightId = `atl-gr-${uid}`;
  const clipId = `atl-clip-${uid}`;

  // Water level: springs from bottom (32) to top (0)
  const level = useSpring(32, { stiffness: 55, damping: 14 });
  // Wave phase: oscillates continuously while active
  const wavePhase = useMotionValue(0);

  // Clip shape: quadratic-bezier wave top + solid bottom rectangle
  const wavePath = useTransform([level, wavePhase], ([y, p]) => {
    // Amplitude peaks mid-fill, zero when empty or full
    const progress = (32 - y) / 32;
    const amp = 3.5 * Math.sin(progress * Math.PI);
    const w1 = amp * Math.sin(p);
    const w2 = amp * Math.sin(p + Math.PI);
    return `M 0,${y} Q 8,${y + w1} 16,${y} Q 24,${y + w2} 32,${y} L 32,32 L 0,32 Z`;
  });

  useEffect(() => {
    level.set(isActive ? 0 : 32);

    if (isActive) {
      const ctrl = fmAnimate(wavePhase, Math.PI * 8, {
        duration: 2.5,
        ease: 'linear',
        repeat: Infinity,
      });
      return () => ctrl.stop();
    } else {
      wavePhase.set(0);
    }
  }, [isActive]);

  return (
    <div className={styles.atlassianLogo}>
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id={gradLeftId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#0065FF" />
          </linearGradient>
          <linearGradient id={gradRightId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2684FF" />
            <stop offset="100%" stopColor="#4C9AFF" />
          </linearGradient>
          <clipPath id={clipId}>
            <motion.path d={wavePath} />
          </clipPath>
        </defs>

        {/* Gray base — always visible */}
        <path
          d="M10.5 18.2C10.3 17.9 9.9 17.9 9.7 18.2L4.1 29.1C3.9 29.4 4.1 29.8 4.5 29.8H12.5C12.7 29.8 12.9 29.7 13 29.5C15 25.6 13.4 21 10.5 18.2Z"
          fill="var(--icon-dim)"
        />
        <path
          d="M14.8 3.3C11.5 9.2 11.7 16.1 15.2 21.8L20.1 29.5C20.2 29.7 20.4 29.8 20.6 29.8H28.6C28.9 29.8 29.2 29.4 29 29.1L16.4 3.3C16.2 2.9 15.7 2.9 14.8 3.3Z"
          fill="var(--icon-dim)"
        />

        {/* Colored flood layer — clipped by the rising wave */}
        <g clipPath={`url(#${clipId})`}>
          <path
            d="M10.5 18.2C10.3 17.9 9.9 17.9 9.7 18.2L4.1 29.1C3.9 29.4 4.1 29.8 4.5 29.8H12.5C12.7 29.8 12.9 29.7 13 29.5C15 25.6 13.4 21 10.5 18.2Z"
            fill={`url(#${gradLeftId})`}
          />
          <path
            d="M14.8 3.3C11.5 9.2 11.7 16.1 15.2 21.8L20.1 29.5C20.2 29.7 20.4 29.8 20.6 29.8H28.6C28.9 29.8 29.2 29.4 29 29.1L16.4 3.3C16.2 2.9 15.7 2.9 14.8 3.3Z"
            fill={`url(#${gradRightId})`}
          />
        </g>
      </svg>
    </div>
  );
}

const META_PATH = "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z";

// The mark is three subpaths (outer contour + two counters). Trace only the
// outer one so the light runs a single clean lap instead of hopping between them.
const META_OUTLINE = `${META_PATH.split('z')[0]}z`;

function MetaLogo({ isActive }) {
  const uid = useId();
  const gradId = `meta-g-${uid}`;

  return (
    <div className={styles.metaLogo}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0064E0" />
            <stop offset="40%" stopColor="#0082FB" />
            <stop offset="75%" stopColor="#A033FF" />
            <stop offset="100%" stopColor="#FF5C87" />
          </linearGradient>
        </defs>

        {/* Gray base — always visible */}
        <path d={META_PATH} fill="var(--icon-dim)" />

        {/* Brand gradient washes in on hover */}
        <motion.path
          d={META_PATH}
          fill={`url(#${gradId})`}
          initial={false}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* A light runs the loop — it is an infinity mark, so it never finishes */}
        {isActive && (
          <motion.path
            d={META_OUTLINE}
            fill="none"
            stroke="#fff"
            strokeWidth="0.9"
            strokeLinecap="round"
            initial={{ pathLength: 0.14, pathOffset: 0, opacity: 0 }}
            animate={{ pathOffset: [0, 1], opacity: [0, 0.95, 0.95, 0] }}
            transition={{
              pathOffset: { duration: 2, repeat: Infinity, ease: 'linear' },
              opacity: { duration: 2, repeat: Infinity, times: [0, 0.12, 0.88, 1] },
            }}
          />
        )}
      </svg>
    </div>
  );
}

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

function RoleBlock({ role }) {
  return (
    <>
      <RoleRow right={role.period}>{role.title}</RoleRow>
      <Bullets items={role.bullets} />
      <TechLine items={role.tech} />
    </>
  );
}

function ExperienceEntry({ exp }) {
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

  const [primary, ...rest] = exp.roles;

  return (
    <Entry
      ref={ref}
      onHoverStart={canHover ? () => setHovered(true) : undefined}
      onHoverEnd={canHover ? () => setHovered(false) : undefined}
    >
      <TitleRow right={exp.location}>
        {exp.animation === 'atlassian' && <AtlassianLogo isActive={isActive} />}
        {exp.animation === 'meta' && (
          <LogoBadge aura={<OrbAura isActive={isActive} />}>
            <MetaLogo isActive={isActive} />
          </LogoBadge>
        )}
        {exp.company}
      </TitleRow>

      <RoleBlock role={primary} />

      {rest.map((role) => (
        <NextRole key={role.period}>
          <RoleBlock role={role} />
        </NextRole>
      ))}
    </Entry>
  );
}

function Experience() {
  return (
    <Section title="Experience">
      {experiences.map((exp) => (
        <ExperienceEntry key={exp.company} exp={exp} />
      ))}
    </Section>
  );
}

export default Experience;
