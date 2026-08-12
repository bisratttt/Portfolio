import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import Section from './Section';
import { Entry, TitleRow, Bullets } from './Entry';
import { TechLine } from './TechLine';
import styles from './SideQuests.module.css';

const quests = [
  {
    name: 'architectLLM',
    tagline: 'fine-tuned LLM for system design reasoning',
    description:
      'A LoRA fine-tune of GPT-OSS 20B trained on system design and software architecture reasoning. Built a data generation pipeline that produced 1,787 training conversations covering distributed systems, scaling patterns, and infrastructure trade-offs.',
    tech: ['Python', 'HuggingFace', 'Transformers', 'LoRA', 'LLM', 'Google Colab'],
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

function QuestLinks({ quest }) {
  return (
    <span className={styles.links} data-print-hide>
      {quest.huggingface && (
        <motion.a
          href={quest.huggingface}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="HuggingFace"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.15 }}
        >
          <SiHuggingface className={styles.icon} />
          huggingface
        </motion.a>
      )}
      <motion.a
        href={quest.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="GitHub"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15 }}
      >
        <FaGithub className={styles.icon} />
        github
      </motion.a>
    </span>
  );
}

function QuestEntry({ quest }) {
  return (
    <Entry whileHover="hover" initial="rest" animate="rest">
      <TitleRow right={<QuestLinks quest={quest} />}>
        <a
          href={quest.live || quest.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.nameLink}
        >
          <motion.span
            variants={{
              rest: { textDecorationColor: 'transparent' },
              hover: { textDecorationColor: 'currentColor' },
            }}
            style={{
              textDecorationLine: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'transparent',
            }}
            transition={{ duration: 0.2 }}
          >
            {quest.name}
          </motion.span>
          <motion.span
            className={styles.arrow}
            variants={{ rest: { x: 0, opacity: 0.35 }, hover: { x: 5, opacity: 1 } }}
            transition={{ duration: 0.2 }}
          >
            {' ->'}
          </motion.span>
        </a>
      </TitleRow>

      <p className={styles.tagline}>{quest.tagline}</p>
      <Bullets items={[quest.description]} />
      <TechLine items={quest.tech} />
    </Entry>
  );
}

function SideQuests() {
  return (
    <Section title="Side Quests">
      <p className={styles.explainer}>stuff i'm building outside the 9-5</p>
      {quests.map((quest) => (
        <QuestEntry key={quest.name} quest={quest} />
      ))}
    </Section>
  );
}

export default SideQuests;
