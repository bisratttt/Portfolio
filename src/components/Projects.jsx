import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'Disc.',
    description:
      'A web app that brings music discovery and community to the forefront. It has a BeReal vibe where users send their "Song of the day" to others while the team curates daily picks.',
    tech: ['react', 'mongodb'],
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover="hover"
    >
      <motion.h3 className={styles.name}>
        <motion.span
          className={styles.nameText}
          variants={{
            hover: {
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              fontWeight: 700,
            },
          }}
        >
          {project.name}
        </motion.span>
        <motion.span
          className={styles.arrow}
          variants={{ hover: { x: 6, opacity: 1 } }}
          transition={{ duration: 0.2 }}
        >
          {' ->'}
        </motion.span>
      </motion.h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionHeading>projects</SectionHeading>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
