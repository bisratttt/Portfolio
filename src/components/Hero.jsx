import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

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

function Hero() {
  const [greeting, setGreeting] = useState(null);
  const [greetKey, setGreetKey] = useState(0);

  const handleNameClick = () => {
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(msg);
    setGreetKey((k) => k + 1);
  };

  return (
    <section id="hero" className={styles.hero}>
      <motion.p
        className={styles.pre}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        hi, i'm
      </motion.p>

      <motion.h1
        className={styles.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={handleNameClick}
        whileTap={{ scale: 0.97 }}
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

      <AnimatePresence mode="wait">
        {greeting && (
          <motion.p
            key={greetKey}
            className={styles.greeting}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.3 }}
          >
            {`> ${greeting}`}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        software engineer / san francisco, ca
      </motion.p>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          v
        </motion.span>
      </motion.div>
    </section>
  );
}

export default Hero;
