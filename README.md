# Sakura Maison — Site Vitrine Restaurant Asiatique 

## Installation & lancement

```bash
cd "c:/emplacementdudossier"
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)
## Stack technique
- **Next.js 14** (App Router)
- **Framer Motion** — animations fluides (scroll reveal, stagger, hover)
- **CSS Modules** — styles scopés par composant, zéro conflit

## Structure des fichiers

```
sakura-restaurant/
├── src/
│   ├── app/
│   │   ├── layout.jsx        ← Metadata + import global CSS
│   │   └── page.jsx          ← Page principale (composition)
│   ├── components/
│   │   ├── Navbar.jsx        ← Navigation fixe avec animation slide-down
│   │   ├── Hero.jsx          ← Section hero avec kanji animé + cercle rotatif
│   │   ├── Menu.jsx          ← Menu complet avec reveal au scroll
│   │   ├── InfoSection.jsx   ← Horaires + Adresse avec animations directionnelles
│   │   └── Footer.jsx        ← Pied de page
│   └── styles/
│       ├── globals.css       ← Variables CSS, reset, utilitaires
│       ├── Navbar.module.css
│       ├── Hero.module.css
│       ├── Menu.module.css
│       ├── InfoSection.module.css
│       └── Footer.module.css
└── preview.html              ← Aperçu standalone (sans Next.js)
```

## Animations (Framer Motion)

| Composant | Animation |
|-----------|-----------|
| Navbar | `slideDown` à l'entrée, stagger sur les liens |
| Hero | `fadeUp` en cascade (eyebrow → titre → desc → CTA), kanji fade, cercle scale |
| Menu | `fadeUp` au scroll via `useInView` + stagger sur chaque plat |
| InfoSection | Slide depuis gauche (horaires) et droite (adresse) |
| Footer | Fade simple au scroll |

## Personnalisation rapide

Modifier le contenu dans les composants :
- **Menu** : tableau `MENU` dans `Menu.jsx`
- **Horaires** : tableau `HOURS` dans `InfoSection.jsx`
- **Adresse / tél / email** : JSX dans `InfoSection.jsx`
- **Couleurs** : variables dans `globals.css`
