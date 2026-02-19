'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/InfoSection.module.css';

const HOURS = [
  { day: 'Lundi', time: null },
  { day: 'Mardi – Vendredi', time: '12h00 – 14h30  ·  19h00 – 22h30' },
  { day: 'Samedi', time: '12h00 – 15h00  ·  19h00 – 23h00' },
  { day: 'Dimanche', time: '12h00 – 15h30' },
];

export default function InfoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="horaires" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* ---- Horaires ---- */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.eyebrow}>Quand nous trouver</span>
            <h2 className={styles.title}>Horaires<br />d'ouverture</h2>

            <div className={styles.hoursList}>
              {HOURS.map((row, i) => (
                <motion.div
                  key={row.day}
                  className={styles.hoursRow}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                >
                  <span className={styles.day}>{row.day}</span>
                  {row.time
                    ? <span className={styles.time}>{row.time}</span>
                    : <span className={styles.closed}>Fermé</span>
                  }
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <div className={styles.sep} />

          {/* ---- Adresse ---- */}
          <motion.div
            id="adresse"
            className={styles.block}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.eyebrow}>Nous rendre visite</span>
            <h2 className={styles.title}>Adresse &<br />Contact</h2>

            <div className={styles.addressBlock}>
              <div className={styles.addressItem}>
                <span className={styles.addressLabel}>Adresse</span>
                <p className={styles.addressText}>
                  42 Rue du Temple<br />
                  75004 Paris, France
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  Voir sur Google Maps →
                </a>
              </div>

              <div className={styles.addressItem}>
                <span className={styles.addressLabel}>Téléphone</span>
                <p className={styles.addressText}>+33 (0)1 42 71 00 22</p>
              </div>

              <div className={styles.addressItem}>
                <span className={styles.addressLabel}>Email</span>
                <p className={styles.addressText}>reservation@sakuramaison.fr</p>
              </div>

              {/* Map placeholder */}
              <motion.div
                className={styles.mapPlaceholder}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className={styles.mapPin}>
                  <div className={styles.mapPinIcon} />
                  <span className={styles.mapPinLabel}>Sakura Maison</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
