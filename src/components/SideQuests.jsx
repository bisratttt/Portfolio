import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import styles from './SideQuests.module.css';

const quests = [
  {
    name: 'build-mcp',
    tagline: 'any API → MCP server, zero context bloat',
    description:
      'CLI tool that converts OpenAPI specs, GraphQL schemas, Postman collections, and HAR files into production-ready MCP servers. Instead of one tool per endpoint (which wrecks agent context), it generates exactly two tools — search_docs (semantic vector search via Qwen3 embeddings) and call_api — so context stays clean whether the API has 10 endpoints or 10,000.',
    tech: ['typescript', 'mcp', 'cli', 'embeddings', 'sqlite'],
    github: 'https://github.com/bisratttt/build-mcp/tree/main',
    live: 'https://bisratttt.github.io/build-mcp/',
  },
];

function QuestCard({ quest }) {
  return (
    <motion.div className={styles.card} whileHover="hover">
      <div className={styles.header}>
        <motion.h3 className={styles.name}>
          <a
            href={quest.live || quest.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.nameLink}
          >
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
              {quest.name}
            </motion.span>
            <motion.span
              className={styles.arrow}
              variants={{ hover: { x: 6, opacity: 1 } }}
              transition={{ duration: 0.2 }}
            >
              {' ->'}
            </motion.span>
          </a>
        </motion.h3>
        <a
          href={quest.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
          onClick={(e) => e.stopPropagation()}
          aria-label="GitHub"
        >
          <FaGithub className={styles.githubIcon} />
          github
        </a>
      </div>
      <p className={styles.tagline}>{quest.tagline}</p>
      <p className={styles.description}>{quest.description}</p>
      <div className={styles.tech}>
        {quest.tech.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

function SideQuests() {
  return (
    <section id="side-quests">
      <SectionHeading>side quests</SectionHeading>
      <p className={styles.explainer}>stuff i'm building outside the 9-5</p>
      <div className={styles.grid}>
        {quests.map((quest) => (
          <QuestCard key={quest.name} quest={quest} />
        ))}
      </div>
    </section>
  );
}

export default SideQuests;
