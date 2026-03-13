import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './About.module.css';

function About() {
  return (
    <section id="about">
      <SectionHeading>about</SectionHeading>
      <div className={styles.content}>
        <p className={styles.text}>
          software engineer who likes building things that feel good to use.
          currently working on data security and kubernetes infrastructure at
          Atlassian. interested in distributed systems, developer tooling, and
          making the web a little more delightful.
        </p>
        <p className={styles.text}>
          when i'm not writing code, you'll find me growing my plant collection,
          on a tennis court, thrifting for hidden gems, or attempting to learn
          a new language.
        </p>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.label}>location</span>
            <span className={styles.value}>san francisco, ca</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>focus</span>
            <span className={styles.value}>infra, back-end, UX/UI</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.label}>resume</span>
            <a
              href={`${import.meta.env.BASE_URL}bisratZerihun_Resume.docx.pdf`}
              className={styles.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              bisratZerihun_Resume.pdf
              <motion.span
                className={styles.arrow}
                whileHover={{ x: 4 }}
              >
                {' ->'}
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
