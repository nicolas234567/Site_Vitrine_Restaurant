'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/Menu.module.css';

const MENU = [
  {
    category: 'Entrées',
    items: [
      { name: 'Gyoza vapeur', desc: 'Raviolis japonais au porc & gingembre', price: '8 €' },
      { name: 'Nems croustillants', desc: 'Porc, crevettes, vermicelles', price: '7 €' },
      { name: 'Edamame', desc: 'Fèves de soja salées au gros sel', price: '5 €' },
      { name: 'Soupe Tom Yum', desc: 'Bouillon lemongrass, crevettes, champignons', price: '9 €' },
    ],
  },
  {
    category: 'Plats principaux',
    items: [
      { name: 'Ramen Tonkotsu', desc: 'Bouillon de porc 12h, œuf mollet, chashu', price: '16 €' },
      { name: 'Bœuf Thaï Basilic', desc: 'Wok de bœuf, basilic thaï, piment', price: '15 €' },
      { name: 'Pho bœuf', desc: 'Bouillon parfumé, bœuf tranché, herbes fraîches', price: '14 €' },
      { name: 'Curry vert crevettes', desc: 'Lait de coco, aubergines, riz jasmin', price: '15 €' },
    ],
  },
  {
    category: 'Sushis & Makis',
    items: [
      { name: 'Sashimi saumon (8 pcs)', desc: 'Saumon de Norvège, sauce soja', price: '14 €' },
      { name: 'California Roll (6 pcs)', desc: 'Avocat, crabe, concombre', price: '10 €' },
      { name: 'Spicy Tuna (6 pcs)', desc: 'Thon, mayo épicée, sésame', price: '12 €' },
      { name: 'Plateau Découverte', desc: '30 pièces assorties', price: '38 €' },
    ],
  },
  {
    category: 'Desserts & Boissons',
    items: [
      { name: 'Mochi glacé (3 pcs)', desc: 'Fraise, matcha, mangue', price: '7 €' },
      { name: 'Crème de mangue', desc: 'Mangue fraîche, lait de coco', price: '6 €' },
      { name: 'Thé vert Sencha', desc: 'Importé du Japon', price: '4 €' },
      { name: 'Sake chaud ou froid', desc: 'Sake Junmai traditionnel', price: '7 €' },
    ],
  },
];

function CategoryBlock({ cat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={styles.category}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className={styles.categoryTitle}>{cat.category}</h3>
      <div className={styles.items}>
        {cat.items.map((item, j) => (
          <motion.div
            key={item.name}
            className={styles.item}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + j * 0.07 + 0.2 }}
          >
            <div className={styles.itemLeft}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
            <span className={styles.itemPrice}>{item.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="menu" className={styles.section}>
      <div className="container">
        <motion.div
          ref={titleRef}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Notre sélection</span>
          <h2 className={styles.title}>Le Menu</h2>
          <div className={styles.divider} />
        </motion.div>

        <div className={styles.categories}>
          {MENU.map((cat, i) => (
            <CategoryBlock key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
