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
  return (
    <motion.div
      className={styles.atlassianLogo}
      animate={isHovered ? { rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.5 }}
    >
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <path
          d="M10.5 18.2C10.3 17.9 9.9 17.9 9.7 18.2L4.1 29.1C3.9 29.4 4.1 29.8 4.5 29.8H12.5C12.7 29.8 12.9 29.7 13 29.5C15 25.6 13.4 21 10.5 18.2Z"
          fill={isHovered ? '#0052CC' : 'var(--icon-dim)'}
          style={{ transition: 'fill 0.3s' }}
        />
        <path
          d="M14.8 3.3C11.5 9.2 11.7 16.1 15.2 21.8L20.1 29.5C20.2 29.7 20.4 29.8 20.6 29.8H28.6C28.9 29.8 29.2 29.4 29 29.1L16.4 3.3C16.2 2.9 15.7 2.9 14.8 3.3Z"
          fill={isHovered ? '#2684FF' : 'var(--icon-dim)'}
          style={{ transition: 'fill 0.3s' }}
        />
      </svg>
    </motion.div>
  );
}

function MetaLike({ hovered, onClick, showBurst }) {
  return (
    <div className={styles.metaReaction}>
      <ThumbsUpBurst isActive={showBurst} />
      <motion.span
        className={styles.likeIcon}
        animate={hovered ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.4 }}
        onClick={onClick}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
            fill={hovered ? '#1877F2' : 'none'}
            stroke={hovered ? '#1877F2' : 'var(--icon-dim)'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'stroke 0.2s, fill 0.2s' }}
          />
        </svg>
      </motion.span>
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const bulletVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

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

      <motion.ul
        className={styles.bullets}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
      >
        {exp.bullets.map((bullet, i) => (
          <motion.li key={i} className={styles.bullet} variants={bulletVariant}>
            {bullet}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className={styles.hoverLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
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
