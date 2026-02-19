'use client';

import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Horaires', href: '#horaires' },
  { label: 'Adresse', href: '#adresse' },
];

export default function Navbar() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.logo}>
        <span className={styles.logoMain}>桜 Sakura</span>
        <span className={styles.logoSub}>Cuisine Asiatique</span>
      </div>

      <ul className={styles.links}>
        {links.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          >
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
