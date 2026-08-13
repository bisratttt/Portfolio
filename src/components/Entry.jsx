import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Entry.module.css';

/**
 * Typographic primitives for a resume entry, mirroring the LaTeX source:
 *   Entry      -> \resumeSubHeadingListStart item
 *   TitleRow   -> \resumeSubheading  (bold left, location right)
 *   RoleRow    -> \resumeSubSubheading (italic role left, dates right)
 *   Bullets    -> \resumeItem list
 */

export const Entry = forwardRef(function Entry({ children, className = '', ...rest }, ref) {
  return (
    <motion.div ref={ref} className={`${styles.entry} ${className}`} {...rest}>
      {children}
    </motion.div>
  );
});

export function TitleRow({ children, right }) {
  return (
    <div className={styles.row}>
      <span className={styles.left}>{children}</span>
      {right && <span className={styles.right}>{right}</span>}
    </div>
  );
}

export function RoleRow({ children, right }) {
  return (
    <div className={styles.subRow}>
      <span className={styles.subLeft}>{children}</span>
      {right && <span className={styles.subRight}>{right}</span>}
    </div>
  );
}

/** A second role at the same employer, under the shared company heading. */
export function NextRole({ children }) {
  return <div className={styles.nextRole}>{children}</div>;
}

export function Bullets({ items }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item, i) => (
        <li key={i} className={styles.bullet}>{item}</li>
      ))}
    </ul>
  );
}

/** Bold run inside a bullet. */
export function B({ children }) {
  return <strong className={styles.bold}>{children}</strong>;
}
