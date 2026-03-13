import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Skills.module.css';

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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const pill = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function SkillGroup({ group, index }) {
  return (
    <motion.div
      className={styles.group}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <h4 className={styles.category}>{group.category}</h4>
      <motion.div
        className={styles.pills}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
      >
        {group.proficient.map((skill) => (
          <motion.span key={skill} className={styles.pill} variants={pill}>
            {skill}
          </motion.span>
        ))}
        {group.familiar.map((skill) => (
          <motion.span key={skill} className={`${styles.pill} ${styles.familiar}`} variants={pill}>
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionHeading>skills</SectionHeading>
      <div className={styles.grid}>
        {skillGroups.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
