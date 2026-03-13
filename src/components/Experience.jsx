import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Experience.module.css';

function B({ children }) {
  return <strong className={styles.bold}>{children}</strong>;
}

const experiences = [
  {
    company: 'Atlassian',
    role: 'Software Engineer II',
    location: 'San Francisco, CA',
    period: 'Aug 2024 - Present',
    animation: 'atlassian',
    bullets: [
      <>Designed an <B>abstraction layer</B> for Atlassian Guard Premium features, ensuring feature isolation and scaled to <B>1M+ customers</B>.</>,
      <>Designed and developed <B>data security policies</B> and their testing framework, enabling enterprise compliance with <B>HIPAA and GDPR</B>.</>,
      <>Architected and led the migration of microservices from <B>AWS to GKE</B>, implementing automated deployment pipelines and <B>Knative serverless</B> infrastructure.</>,
      <>Developed <B>AI-powered automation agents</B> using Chain-of-Thought reasoning and tool-calling to migrate legacy serverless functions to Knative, scaling across <B>400+ microservices</B>.</>,
      <>Reduced deployment time by <B>95%</B> (1hr to 3min) by implementing <B>custom resource definitions</B> and serverless compute patterns.</>,
    ],
  },
  {
    company: 'Atlassian',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    period: 'Jul 2023 - Aug 2024',
    animation: 'atlassian',
    bullets: [
      <>Designed and implemented admin-facing <B>data classification tools</B> for Confluence, empowering organization admins to manage data governance for <B>2M+ users</B>.</>,
      <>Built and owned a <B>real-time monitoring framework</B> for 300+ public APIs, implementing app access permission validation that secured a <B>platform-wide security rollout</B>.</>,
      <>Reduced implementation time by <B>60%</B> (5 weeks to 2 weeks) by building a data classification onboarding framework for enterprise customers.</>,
      <>Decreased average PR cycle time by <B>83%</B> (3 days to 18 hours) through a <B>distributed code review system</B> and automated notification workflows.</>,
      <>Designed and implemented client-facing <B>REST and GraphQL APIs</B> for data classification features in Confluence.</>,
    ],
  },
  {
    company: 'Meta',
    role: 'Software Engineer Intern',
    location: 'Washington, DC',
    period: 'May 2022 - Aug 2022',
    animation: 'meta',
    bullets: [
      <>Engineered <B>full-stack correspondence platform</B> enabling communication between external users and employees, scaling to process <B>100,000+ requests</B> at launch.</>,
      <>Designed and implemented <B>configurable user preferences system</B>, improving user satisfaction metrics through personalized experience customization.</>,
      <>Presented technical documentation on new internal frameworks to <B>40+ engineers</B>, facilitating knowledge transfer and adoption.</>,
    ],
  },
];

function ThumbsUpBurst({ isActive }) {
  if (!isActive) return null;

  return (
    <div className={styles.burstContainer}>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className={styles.thumbsUp}
          initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
          animate={{
            opacity: [1, 1, 0],
            scale: [0.5, 1.2, 0.8],
            x: Math.cos((i * Math.PI * 2) / 8) * 60,
            y: Math.sin((i * Math.PI * 2) / 8) * 60 - 20,
          }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
              stroke="#1877F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      ))}
    </div>
  );
}

function AtlassianLogo({ isHovered }) {
  // The Atlassian logo is a mountain/chevron shape split into two pieces.
  // On hover: left piece slides down-left slightly, right piece goes up-right,
  // then both snap back — like a deploy completing.
  return (
    <div className={styles.atlassianLogo}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="atl-grad-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#0065FF" />
          </linearGradient>
          <linearGradient id="atl-grad-right" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2684FF" />
            <stop offset="100%" stopColor="#4C9AFF" />
          </linearGradient>
        </defs>

        {/* Left lower chevron piece */}
        <motion.path
          d="M10.5 18.2C10.3 17.9 9.9 17.9 9.7 18.2L4.1 29.1C3.9 29.4 4.1 29.8 4.5 29.8H12.5C12.7 29.8 12.9 29.7 13 29.5C15 25.6 13.4 21 10.5 18.2Z"
          fill={isHovered ? 'url(#atl-grad-left)' : 'var(--icon-dim)'}
          animate={isHovered ? { x: [-2, 0], y: [2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ transition: 'fill 0.3s' }}
        />

        {/* Right tall chevron piece */}
        <motion.path
          d="M14.8 3.3C11.5 9.2 11.7 16.1 15.2 21.8L20.1 29.5C20.2 29.7 20.4 29.8 20.6 29.8H28.6C28.9 29.8 29.2 29.4 29 29.1L16.4 3.3C16.2 2.9 15.7 2.9 14.8 3.3Z"
          fill={isHovered ? 'url(#atl-grad-right)' : 'var(--icon-dim)'}
          animate={isHovered ? { x: [2, 0], y: [-2, 0] } : { x: 0, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ transition: 'fill 0.3s' }}
        />
      </svg>
    </div>
  );
}

function MetaLike({ hovered, onClick, showBurst }) {
  // Facebook-style like button: circle pill with thumbs up icon inside.
  // On hover: circle fills blue, thumb animates up, label "Like" fades in.
  return (
    <div className={styles.metaReaction}>
      <ThumbsUpBurst isActive={showBurst} />
      <motion.button
        className={styles.likeButton}
        onClick={onClick}
        animate={hovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        aria-label="Like"
      >
        {/* Pill background */}
        <motion.div
          className={styles.likePill}
          animate={{
            backgroundColor: hovered ? '#1877F2' : 'transparent',
            borderColor: hovered ? '#1877F2' : 'var(--icon-dim)',
          }}
          transition={{ duration: 0.25 }}
        >
          {/* Thumb icon */}
          <motion.svg
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            animate={hovered ? { y: [0, -2, 0] } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M7 22H4C3.47 22 2.96 21.79 2.59 21.41C2.21 21.04 2 20.53 2 20V13C2 12.47 2.21 11.96 2.59 11.59C2.96 11.21 3.47 11 4 11H7M14 9V5C14 4.2 13.68 3.44 13.12 2.88C12.56 2.32 11.8 2 11 2L7 11V22H18.28C18.76 22 19.23 21.84 19.6 21.52C19.97 21.21 20.21 20.78 20.28 20.3L21.66 11.3C21.7 11.01 21.68 10.72 21.6 10.44C21.52 10.16 21.38 9.91 21.19 9.69C21 9.47 20.77 9.29 20.5 9.18C20.24 9.06 19.95 9 19.66 9H14Z"
              fill={hovered ? 'white' : 'none'}
              stroke={hovered ? 'white' : 'var(--icon-dim)'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'stroke 0.25s, fill 0.25s' }}
            />
          </motion.svg>

          {/* "Like" label that appears on hover */}
          <motion.span
            className={styles.likeLabel}
            animate={{ opacity: hovered ? 1 : 0, width: hovered ? 'auto' : 0, marginLeft: hovered ? '3px' : 0 }}
            transition={{ duration: 0.2 }}
          >
            Like
          </motion.span>
        </motion.div>
      </motion.button>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const [hovered, setHovered] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  const handleMetaClick = (e) => {
    e.stopPropagation();
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 900);
  };

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className={styles.cardHeader}>
        <div className={styles.companyRow}>
          {exp.animation === 'atlassian' && <AtlassianLogo isHovered={hovered} />}
          <h3 className={styles.company}>{exp.company}</h3>
          {exp.animation === 'meta' && (
            <MetaLike hovered={hovered} onClick={handleMetaClick} showBurst={showBurst} />
          )}
        </div>
        <span className={styles.period}>{exp.period}</span>
      </div>

      <p className={styles.role}>{exp.role}</p>
      <p className={styles.location}>{exp.location}</p>

      <ul className={styles.bullets}>
        {exp.bullets.map((bullet, i) => (
          <li key={i} className={styles.bullet}>{bullet}</li>
        ))}
      </ul>

    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience">
      <SectionHeading>experience</SectionHeading>
      <div className={styles.list}>
        {experiences.map((exp, i) => (
          <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
