import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { SkillPill } from './SkillPill';
import styles from './SideQuests.module.css';

const quests = [
  {
    name: 'architectLLM',
    tagline: 'fine-tuned LLM for system design reasoning',
    description:
      'A LoRA fine-tune of GPT-OSS 20B trained on system design and software architecture reasoning. Built a data generation pipeline that produced 1,787 training conversations covering distributed systems, scaling patterns, and infrastructure trade-offs.',
    tech: ['Python', 'HuggingFace', 'LoRA'],
    github: 'https://github.com/bisratttt/architectLLM',
    live: 'https://bisratttt.github.io/architectLLM/',
    huggingface: 'https://huggingface.co/bisratz/architectLLM-lora',
  },
  {
    name: 'build-mcp',
    tagline: 'any API → MCP server, zero context bloat',
    description:
      'CLI tool that converts OpenAPI specs, GraphQL schemas, Postman collections, and HAR files into production-ready MCP servers. Instead of one tool per endpoint (which wrecks agent context), it generates exactly two tools — search_docs (semantic vector search via Qwen3 embeddings) and call_api — so context stays clean whether the API has 10 endpoints or 10,000.',
    tech: ['TypeScript', 'SQLite', 'mcp', 'cli', 'embeddings'],
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
        <div className={styles.headerLinks}>
          {quest.huggingface && (
            <a
              href={quest.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              onClick={(e) => e.stopPropagation()}
              aria-label="HuggingFace"
            >
              <SiHuggingface className={styles.githubIcon} />
              huggingface
            </a>
          )}
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
      </div>
      <p className={styles.tagline}>{quest.tagline}</p>
      <p className={styles.description}>{quest.description}</p>
      <div className={styles.tech}>
        {quest.tech.map((t, i) => <SkillPill key={t} name={t} index={i} />)}
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
