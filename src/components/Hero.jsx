'use client';

import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const PETALS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  angle: (360 / 8) * i,
}));

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Big background kanji */}
      <motion.div
        className={styles.kanji}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        aria-hidden
      >
        桜
      </motion.div>

      {/* Text content */}
      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
        >
          Depuis 2008 · Paris, France
        </motion.span>

        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="show"
          custom={0.25}
          variants={fadeUp}
        >
          桜 Maison
          <em className={styles.subtitle}>L'art de la table asiatique</em>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
        >
          Un voyage culinaire entre le Japon, la Thaïlande et le Vietnam.
          Des saveurs authentiques, des produits frais, dans une atmosphère
          douce et apaisante.
        </motion.p>

        <motion.a
          href="#menu"
          className={styles.cta}
          initial="hidden"
          animate="show"
          custom={0.55}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Découvrir le menu
        </motion.a>
      </div>

      {/* Decorative visual */}
      <div className={styles.visual}>
        <div className={styles.visualInner}>
          <motion.div
            className={styles.circle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {PETALS.map((p) => (
              <motion.div
                key={p.id}
                className={styles.petal}
                style={{ rotate: p.angle }}
                animate={{ rotate: [p.angle, p.angle + 360] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: p.id * 0.2,
                }}
                aria-hidden
              />
            ))}
            <span className={styles.circleText}>桜</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
