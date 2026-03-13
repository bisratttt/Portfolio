import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Skills.module.css';

// ── Mini SVG icons for key skills ────────────────────────────────────────────

function IconJava({ active }) {
  // Coffee cup
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M2 4 L2 12 Q2 14 4 14 L9 14 Q11 14 11 12 L11 4 Z" stroke={active ? '#E76F00' : 'currentColor'} strokeWidth="1.2" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M11 6 Q14 6 14 8 Q14 10 11 10" stroke={active ? '#E76F00' : 'currentColor'} strokeWidth="1.2" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M5 2 Q5 1 6 2 Q6 3 7 2" stroke={active ? '#E76F00' : 'currentColor'} strokeWidth="1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconPython({ active }) {
  // Snake coil
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M8 2 Q4 2 4 5 L4 7 Q4 8 5 8 L11 8 Q12 8 12 9 L12 11 Q12 14 8 14" stroke={active ? '#3572A5' : 'currentColor'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <circle cx="6" cy="5" r="0.8" fill={active ? '#FFD43B' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="10" cy="11" r="0.8" fill={active ? '#3572A5' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
    </svg>
  );
}

function IconJS({ active }) {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="2" fill={active ? '#F7DF1E' : 'none'} stroke={active ? '#F7DF1E' : 'currentColor'} strokeWidth="1.2" style={{ transition: 'all 0.2s' }} />
      <path d="M6 11 Q6 13 4.5 13" stroke={active ? '#222' : 'currentColor'} strokeWidth="1.2" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M10 7 L10 13 Q10 13.5 11.5 13" stroke={active ? '#222' : 'currentColor'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconTS({ active }) {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="2" fill={active ? '#3178C6' : 'none'} stroke={active ? '#3178C6' : 'currentColor'} strokeWidth="1.2" style={{ transition: 'all 0.2s' }} />
      <path d="M3 6 L13 6" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.2" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M8 6 L8 13" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.2" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconReact({ active }) {
  // Atom / orbit rings
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <ellipse cx="8" cy="8" rx="7" ry="3" stroke={active ? '#61DAFB' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <ellipse cx="8" cy="8" rx="7" ry="3" stroke={active ? '#61DAFB' : 'currentColor'} strokeWidth="1.1" transform="rotate(60 8 8)" style={{ transition: 'stroke 0.2s' }} />
      <ellipse cx="8" cy="8" rx="7" ry="3" stroke={active ? '#61DAFB' : 'currentColor'} strokeWidth="1.1" transform="rotate(120 8 8)" style={{ transition: 'stroke 0.2s' }} />
      <circle cx="8" cy="8" r="1.5" fill={active ? '#61DAFB' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
    </svg>
  );
}

function IconNode({ active }) {
  // Hexagon
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M8 1 L14 4.5 L14 11.5 L8 15 L2 11.5 L2 4.5 Z" stroke={active ? '#539E43' : 'currentColor'} strokeWidth="1.2" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M5 10 Q5 7 8 7 Q11 7 11 10" stroke={active ? '#539E43' : 'currentColor'} strokeWidth="1.1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconGraphQL({ active }) {
  // 6-point star / graph nodes
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="1.5" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="14" cy="5" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="14" cy="11" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="8" cy="14.5" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="2" cy="11" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <circle cx="2" cy="5" r="1.2" fill={active ? '#E10098' : 'currentColor'} style={{ transition: 'fill 0.2s' }} />
      <path d="M8 1.5 L14 5 L14 11 L8 14.5 L2 11 L2 5 Z" stroke={active ? '#E10098' : 'currentColor'} strokeWidth="0.8" style={{ transition: 'stroke 0.2s' }} />
      <path d="M8 1.5 L8 14.5 M2 5 L14 11 M14 5 L2 11" stroke={active ? '#E10098' : 'currentColor'} strokeWidth="0.6" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconKubernetes({ active }) {
  // Helm wheel with 7 spokes
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke={active ? '#326CE5' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      <circle cx="8" cy="8" r="2" stroke={active ? '#326CE5' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      {[0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={8 + Math.cos(rad) * 2} y1={8 + Math.sin(rad) * 2}
            x2={8 + Math.cos(rad) * 6.5} y2={8 + Math.sin(rad) * 6.5}
            stroke={active ? '#326CE5' : 'currentColor'} strokeWidth="1"
            style={{ transition: 'stroke 0.2s' }}
          />
        );
      })}
    </svg>
  );
}

function IconDocker({ active }) {
  // Whale with container stack
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      {/* Containers */}
      <rect x="2" y="5" width="3" height="2.5" rx="0.5" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      <rect x="6" y="5" width="3" height="2.5" rx="0.5" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      <rect x="10" y="5" width="3" height="2.5" rx="0.5" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      <rect x="6" y="2" width="3" height="2.5" rx="0.5" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" style={{ transition: 'stroke 0.2s' }} />
      {/* Whale body */}
      <path d="M1 9 Q8 8 15 9 Q15 12 8 13 Q4 13 2 12 Z" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      {/* Water spout */}
      <path d="M13 9 Q14 7 15 6" stroke={active ? '#2496ED' : 'currentColor'} strokeWidth="1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconGit({ active }) {
  // Branch fork
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="3" r="1.8" stroke={active ? '#F05032' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <circle cx="4" cy="13" r="1.8" stroke={active ? '#F05032' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <circle cx="12" cy="6" r="1.8" stroke={active ? '#F05032' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <path d="M4 5 L4 11" stroke={active ? '#F05032' : 'currentColor'} strokeWidth="1.1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M4 5 Q4 3 8 4 L10.2 4.8" stroke={active ? '#F05032' : 'currentColor'} strokeWidth="1.1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconGCP({ active }) {
  // Cloud with sun rays (GCP logo feel)
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M3 10 Q2 10 2 8 Q2 5 5 5 Q5.5 3 8 3 Q11 3 11 6 Q13 6 13 8 Q13 10 11 10 Z" stroke={active ? '#4285F4' : 'currentColor'} strokeWidth="1.1" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M6 10 L6 13 M8 10 L8 14 M10 10 L10 13" stroke={active ? '#EA4335' : 'currentColor'} strokeWidth="1" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconTerraform({ active }) {
  // Diamond / mountain
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M8 2 L14 8 L8 14 L2 8 Z" stroke={active ? '#7B42BC' : 'currentColor'} strokeWidth="1.2" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M5 8 L8 5 L11 8" stroke={active ? '#7B42BC' : 'currentColor'} strokeWidth="1" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconSwift({ active }) {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <path d="M13 3 Q14 8 8 11 Q12 11 13 13 Q9 15 4 12 Q2 11 2 9 Q5 11 9 9 Q4 6 4 3 Q7 6 10 5 Q11 4 13 3Z" stroke={active ? '#FA7343' : 'currentColor'} strokeWidth="1.1" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

function IconREST({ active }) {
  // Arrow between two rectangles
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="5" width="4" height="6" rx="1" stroke={active ? '#00BFA5' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <rect x="11" y="5" width="4" height="6" rx="1" stroke={active ? '#00BFA5' : 'currentColor'} strokeWidth="1.1" style={{ transition: 'stroke 0.2s' }} />
      <path d="M5 7 L11 7 M9 5.5 L11 7 L9 8.5" stroke={active ? '#00BFA5' : 'currentColor'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
      <path d="M11 9 L5 9 M7 7.5 L5 9 L7 10.5" stroke={active ? '#00BFA5' : 'currentColor'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s' }} />
    </svg>
  );
}

// Map skill names to icon components
const iconMap = {
  'Java': IconJava,
  'Python': IconPython,
  'JavaScript': IconJS,
  'TypeScript': IconTS,
  'React.js': IconReact,
  'Node.js': IconNode,
  'GraphQL': IconGraphQL,
  'Kubernetes': IconKubernetes,
  'Docker': IconDocker,
  'Git': IconGit,
  'GCP': IconGCP,
  'Terraform': IconTerraform,
  'Swift': IconSwift,
  'REST': IconREST,
};

// ── Data ─────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    category: 'languages',
    proficient: ['Java', 'Python', 'C', 'PHP', 'JavaScript', 'TypeScript', 'YAML'],
    familiar: ['HTML/CSS', 'Swift', 'MATLAB'],
  },
  {
    category: 'frameworks',
    proficient: ['GraphQL', 'React.js', 'Node.js', 'REST', 'Terraform', 'Kubernetes', 'Knative'],
    familiar: ['Express.js', 'Apollo', 'Relay', 'Bootstrap'],
  },
  {
    category: 'tools',
    proficient: ['Git', 'Mercurial', 'Docker', 'GCP', 'Splunk', 'SignalFX', 'Bitbucket Pipelines', 'k9s'],
    familiar: ['Webpack', 'AWS', 'Firebase', 'Heroku'],
  },
];

// ── Components ────────────────────────────────────────────────────────────────


function SkillPill({ name, familiar }) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[name];

  return (
    <motion.span
      className={`${styles.pill} ${familiar ? styles.familiar : ''}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
    >
      {Icon && (
        <motion.span
          className={styles.pillIcon}
          animate={{ opacity: hovered ? 1 : 0.5, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <Icon active={hovered} />
        </motion.span>
      )}
      {name}
    </motion.span>
  );
}

function SkillGroup({ group }) {
  return (
    <div className={styles.group}>
      <h4 className={styles.category}>{group.category}</h4>
      <div className={styles.pills}>
        {group.proficient.map((skill) => (
          <SkillPill key={skill} name={skill} familiar={false} />
        ))}
        {group.familiar.map((skill) => (
          <SkillPill key={skill} name={skill} familiar={true} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionHeading>skills</SectionHeading>
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
