import { useState, useRef, useEffect } from 'react';
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
  const scrollIconRef = useRef(null);
  const tRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rafRef = useRef(null);
  const scrollHoveredRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tick = (time) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        const speed = scrollHoveredRef.current ? 1.2 : 0.65;
        tRef.current += dt * speed;
        const y = 4 * (1 - Math.cos(tRef.current * Math.PI * 2));
        if (scrollIconRef.current) {
          scrollIconRef.current.style.transform = `translateY(${y}px)`;
        }
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, []);

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

      <div className={styles.greetingSlot}>
        <AnimatePresence mode="sync">
          {greeting && (
            <motion.p
              key={greetKey}
              className={styles.greeting}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)', transition: { duration: 0.15, ease: 'easeIn' } }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {`> ${greeting}`}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

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
        transition={{ delay: 0.8 }}
        onMouseEnter={() => { scrollHoveredRef.current = true; }}
        onMouseLeave={() => { scrollHoveredRef.current = false; }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span ref={scrollIconRef} style={{ display: 'inline-block' }}>v</span>
      </motion.div>
    </section>
  );
}

export default Hero;
