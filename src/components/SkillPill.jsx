import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiOpenjdk, SiPython, SiC, SiPhp, SiJavascript, SiTypescript,
  SiHtml5, SiSwift, SiGraphql, SiReact, SiNodedotjs,
  SiTerraform, SiKubernetes, SiExpress, SiApollographql,
  SiBootstrap, SiGit, SiMercurial, SiDocker, SiGooglecloud,
  SiSplunk, SiBitbucket, SiWebpack, SiFirebase, SiHeroku, SiSqlite,
  SiHuggingface, SiGooglecolab,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import styles from './SkillPill.module.css';

const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export const iconMap = {
  'Java':                 { Icon: SiOpenjdk,            color: '#E76F00' },
  'Python':               { Icon: SiPython,             color: '#3572A5' },
  'C':                    { Icon: SiC,                  color: '#A8B9CC' },
  'PHP':                  { Icon: SiPhp,                color: '#777BB4' },
  'JavaScript':           { Icon: SiJavascript,         color: '#F7DF1E' },
  'TypeScript':           { Icon: SiTypescript,         color: '#3178C6' },
  'HTML/CSS':             { Icon: SiHtml5,              color: '#E34F26' },
  'Swift':                { Icon: SiSwift,              color: '#FA7343' },
  'GraphQL':              { Icon: SiGraphql,            color: '#E10098' },
  'React.js':             { Icon: SiReact,              color: '#61DAFB' },
  'Node.js':              { Icon: SiNodedotjs,          color: '#539E43' },
  'Terraform':            { Icon: SiTerraform,          color: '#7B42BC' },
  'Kubernetes':           { Icon: SiKubernetes,         color: '#326CE5' },
  'Express.js':           { Icon: SiExpress,            color: 'var(--icon-bright)' },
  'Apollo':               { Icon: SiApollographql,      color: '#311C87' },
  'Bootstrap':            { Icon: SiBootstrap,          color: '#7952B3' },
  'Git':                  { Icon: SiGit,                color: '#F05032' },
  'Mercurial':            { Icon: SiMercurial,          color: '#609926' },
  'Docker':               { Icon: SiDocker,             color: '#2496ED' },
  'GCP':                  { Icon: SiGooglecloud,        color: '#4285F4' },
  'Splunk':               { Icon: SiSplunk,             color: '#009BDE' },
  'Bitbucket Pipelines':  { Icon: SiBitbucket,          color: '#0052CC' },
  'Webpack':              { Icon: SiWebpack,            color: '#8DD6F9' },
  'AWS':                  { Icon: FaAws,                color: '#FF9900' },
  'Firebase':             { Icon: SiFirebase,           color: '#FFCA28' },
  'Heroku':               { Icon: SiHeroku,             color: '#430098' },
  'SQLite':               { Icon: SiSqlite,             color: '#003B57' },
  'HuggingFace':          { Icon: SiHuggingface,        color: '#FFD21E' },
  'Google Colab':         { Icon: SiGooglecolab,        color: '#F9AB00' },
};

export function SkillPill({ name, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const entry = iconMap[name];

  return (
    <motion.span
      className={styles.pill}
      onHoverStart={canHover ? () => setHovered(true) : undefined}
      onHoverEnd={canHover ? () => setHovered(false) : undefined}
      whileHover={canHover ? { y: -2 } : undefined}
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
    >
      {entry && (
        <motion.span
          className={styles.pillIcon}
          animate={{ opacity: hovered ? 1 : 0.5, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.15 }}
          style={{
            color: hovered ? entry.color : 'var(--icon-mid)',
            transition: 'color 0.2s',
            display: 'flex',
          }}
        >
          <entry.Icon size={11} />
        </motion.span>
      )}
      {name}
    </motion.span>
  );
}
