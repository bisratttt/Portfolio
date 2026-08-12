import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './ResumeHeader.module.css';

const greetings = [
  'hey there!',
  'nice to meet you.',
  'welcome!',
  'glad you stopped by.',
  "let's build something.",
  'pull up a chair.',
  'howdy!',
  'selam!',
];

const contacts = [
  {
    label: 'bisrat.ad@gmail.com',
    href: 'mailto:bisrat.ad@gmail.com',
    Icon: HiOutlineMail,
  },
  {
    label: 'linkedin.com/in/bisratz',
    href: 'https://linkedin.com/in/bisratz',
    Icon: FaLinkedin,
  },
  {
    label: 'github.com/bisratttt',
    href: 'https://github.com/bisratttt',
    Icon: FaGithub,
  },
  {
    label: 'resume.pdf',
    href: `${import.meta.env.BASE_URL}bisratZerihunResume.pdf`,
    Icon: FaRegFilePdf,
  },
];

function ResumeHeader() {
  const [greeting, setGreeting] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleNameClick = () => {
    const next = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting({ text: next, key: Date.now() });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setGreeting(null), 2600);
  };

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.h1
          className={styles.name}
          onClick={handleNameClick}
          whileTap={{ scale: 0.985 }}
        >
          <span className={styles.nameText}>Bisrat Zerihun</span>
          <motion.span
            className={styles.cursor}
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'steps(2)' }}
          >
            _
          </motion.span>
        </motion.h1>

        <div className={styles.taglineSlot}>
          <AnimatePresence mode="wait" initial={false}>
            {greeting ? (
              <motion.p
                key={greeting.key}
                className={styles.greeting}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              >
                {`> ${greeting.text}`}
              </motion.p>
            ) : (
              <motion.p
                key="tagline"
                className={styles.tagline}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              >
                software engineer · san francisco, ca
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.contact}>
          {contacts.map(({ label, href, Icon }, i) => (
            <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {i > 0 && <span className={styles.sep}>·</span>}
              <motion.a
                href={href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                <Icon className={styles.linkIcon} />
                {label}
              </motion.a>
            </span>
          ))}
        </div>
      </motion.header>

      <motion.p
        className={styles.summary}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
      >
        software engineer who likes building things that feel good to use. currently
        working on data security and kubernetes infrastructure at Atlassian. interested
        in distributed systems, developer tooling, and making the web a little more
        delightful.
      </motion.p>
    </>
  );
}

export default ResumeHeader;
