import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import styles from './Contact.module.css';

const links = [
  { label: 'email', href: 'mailto:bisrat.ad@gmail.com', display: 'bisrat.ad@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/bisratz', display: 'linkedin.com/in/bisratz' },
  { label: 'website', href: 'https://bisrat.me', display: 'bisrat.me' },
];

function Contact() {
  return (
    <section id="contact">
      <SectionHeading>contact</SectionHeading>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.text}>
          interested in working together? have a question? just want to say hi?
        </p>
        <div className={styles.links}>
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={styles.link}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.label}>{link.label}</span>
              <span className={styles.display}>{link.display}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
