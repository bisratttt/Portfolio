import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiOpenjdk, SiPython, SiC, SiPhp, SiJavascript, SiTypescript,
  SiHtml5, SiSwift, SiGraphql, SiReact, SiNodedotjs,
  SiTerraform, SiKubernetes, SiExpress, SiApollographql,
  SiBootstrap, SiGit, SiMercurial, SiDocker, SiGooglecloud,
  SiSplunk, SiBitbucket, SiWebpack, SiFirebase, SiHeroku, SiSqlite,
  SiHuggingface, SiGooglecolab, SiKnative,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import styles from './TechLine.module.css';

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
  'Knative':              { Icon: SiKnative,            color: '#0865AD' },
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

function TechItem({ name }) {
  const [hovered, setHovered] = useState(false);
  const entry = iconMap[name];

  return (
    <motion.span
      className={styles.item}
      onHoverStart={canHover ? () => setHovered(true) : undefined}
      onHoverEnd={canHover ? () => setHovered(false) : undefined}
    >
      {entry && (
        <motion.span
          className={styles.icon}
          animate={{ opacity: hovered ? 1 : 0.55, scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.15 }}
          style={{
            color: hovered ? entry.color : 'var(--icon-mid)',
            transition: 'color 0.2s',
          }}
        >
          <entry.Icon size={11} />
        </motion.span>
      )}
      {name}
    </motion.span>
  );
}

/** Dot-separated tech run, like \techstack{} in the LaTeX resume. */
export function TechLine({ items }) {
  return (
    <motion.div
      className={styles.line}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {items.map((name, i) => (
        <span key={name} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          {i > 0 && <span className={styles.sep}>·</span>}
          <TechItem name={name} />
        </span>
      ))}
    </motion.div>
  );
}

export default TechLine;
