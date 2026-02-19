'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer className={styles.footer} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.kanji}>桜</div>
          <p className={styles.name}>Sakura Maison</p>
          <p className={styles.tagline}>Cuisine asiatique — Paris, France</p>
          <div className={styles.line} />
          <p className={styles.copy}>© {new Date().getFullYear()} Sakura Maison. Tous droits réservés. Nicolas BREGEVIN</p>
        </motion.div>
      </div>
    </footer>
  );
}
