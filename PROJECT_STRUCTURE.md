# 📐 Structure du Projet Portfolio

Documentation de l'organisation des fichiers et dossiers du portfolio.

## 🗂️ Arborescence Globale

```
portfolio/
├── index.html                          # Page d'accueil principale du portfolio
├── README.md                           # Documentation du projet
├── NAVIGATION_FORMATIONS.md            # Guide de navigation entre formations
├── RECAPITULATIF_FREECODECAMP.md      # Récapitulatif des projets FreeCodeCamp
├── PROJECT_STRUCTURE.md               # Ce fichier - Documentation de la structure
│
├── assets/                             # Ressources globales partagées
│   ├── css/
│   │   ├── portfolio.css              # Styles globaux du portfolio (variables CSS, layout général)
│   │   ├── formation-projects.css     # Styles pour les pages de formations individuelles
│   │   └── all-projects.css           # Styles pour la page "Tous mes projets" (séparé du HTML)
│   │
│   └── js/
│       ├── portfolio.js               # Scripts globaux du portfolio
│       └── formation-projects.js      # Scripts pour affichage dynamique des projets
│
├── formations/                         # Section formations
│   ├── index.html                     # Page d'accueil des formations
│   ├── codecademy-fullstack.html      # Page de la formation Codecademy
│   ├── freecodecamp.html             # Page de la formation FreeCodeCamp
│   ├── GUIDE_FORMATIONS.md           # Guide pour ajouter des formations
│   ├── README.md                     # Documentation de la section formations
│   └── TEMPLATE_PROJET_FREECODECAMP.md # Template pour projets FreeCodeCamp
│
└── projets/                            # Section projets
    ├── index.html                     # Page "Tous mes projets" (CSS séparé dans assets/css/all-projects.css)
    ├── TEMPLATE_PROJET.md             # Template pour nouveaux projets
    │
    ├── _sandbox/                      # Espace de tests et expérimentation
    │   ├── react-test/               # Tests React (Vite)
    │   └── vanilla/                  # Tests HTML/CSS/JS vanilla
    │
    ├── [nom-du-projet]/              # Structure standardisée d'un projet
    │   ├── index.html                # Page principale du projet
    │   ├── README.md                 # Documentation du projet
    │   ├── metadata.json             # Métadonnées pour affichage dynamique
    │   ├── styles.css                # Styles du projet (ou style.css selon le projet)
    │   ├── script.js                 # JavaScript du projet (si applicable)
    │   └── images/                   # Images du projet (si applicable)
    │
    ├── css-layouts-guide/            # Guide CSS Flexbox + Grid unifié
    ├── company-homepage-flexbox/     # Site vitrine Flexbox (Golden Hive)
    ├── responsive-website/           # Site responsive (Pages Turners)
    ├── number-guesser/              # Jeu de devinettes
    ├── piano-player/                # Piano virtuel interactif
    ├── fcc-bookmark-manager/        # Gestionnaire de favoris FreeCodeCamp
    ├── fcc-drum-machine/            # Machine à beats FreeCodeCamp
    ├── fcc-forum-leaderboard/       # Tableau des scores FreeCodeCamp
    ├── fcc-sorting-visualizer/      # Visualiseur de tri FreeCodeCamp
    ├── fcc-survey-form/             # Formulaire d'enquête FreeCodeCamp
    └── fcc-weather-app/             # Application météo FreeCodeCamp
```

## 📋 Standards de Structure

### Page Principale des Projets (projets/index.html)

**Architecture :**
- HTML uniquement dans `projets/index.html`
- CSS séparé dans `assets/css/all-projects.css`
- JavaScript inline pour la logique de filtres et affichage dynamique

**Avantages de cette structure :**
- ✅ Séparation des préoccupations (HTML/CSS)
- ✅ Meilleure maintenabilité du code
- ✅ Cache navigateur optimisé pour le CSS
- ✅ Réutilisabilité des styles

### Fichiers CSS Globaux

#### `assets/css/portfolio.css`
Variables CSS globales et styles de base utilisés dans tout le portfolio :
```css
/* Variables de couleurs, typographie, espacements */
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --text-primary: #1e293b;
  /* ... */
}
```

#### `assets/css/formation-projects.css`
Styles pour les pages de formations individuelles (codecademy-fullstack.html, freecodecamp.html) :
- Layout des pages de formation
- Cartes de projets
- Modules et sections
- Navigation entre projets

#### `assets/css/all-projects.css`
Styles spécifiques à la page "Tous mes projets" (`projets/index.html`) :
- Hero section avec gradient
- Statistiques overview
- Filtres de projets (formation, statut, difficulté)
- Grille de projets responsive
- Previews interactives (Flexbox/Grid demos, iframes)
- Badges et statuts de projets

### Structure Standardisée d'un Projet

Chaque projet suit cette structure :

```
nom-du-projet/
├── index.html           # Page principale
├── README.md            # Documentation complète
├── metadata.json        # Métadonnées pour affichage dynamique
├── styles.css          # Styles du projet
├── script.js           # JavaScript (si applicable)
└── images/             # Ressources visuelles (si applicable)
```

### Fichier metadata.json

Format standardisé pour tous les projets :

```json
{
  "title": "Titre du Projet",
  "formation": "codecademy-fullstack",
  "module": "Module ou Section",
  "status": "completed",
  "difficulty": "intermediate",
  "technologies": ["HTML5", "CSS3", "JavaScript"],
  "description": "Description courte du projet",
  "featured": true
}
```

**Champs disponibles :**
- `formation` : `codecademy-fullstack`, `freecodecamp`, `personal`
- `status` : `completed`, `in-progress`, `planned`
- `difficulty` : `beginner`, `intermediate`, `advanced`
- `featured` : `true` / `false` (projet mis en avant)

## 🎨 Conventions de Nommage

### Fichiers CSS
- `kebab-case.css` pour tous les fichiers CSS
- Nom descriptif de la fonction/page (`all-projects.css`, `formation-projects.css`)

### Dossiers de Projets
- `kebab-case` obligatoire
- Préfixe `fcc-` pour les projets FreeCodeCamp
- Nom descriptif du contenu (`css-layouts-guide`, `company-homepage-flexbox`)

### Fichiers HTML
- `index.html` pour la page principale de chaque projet/section
- Nom descriptif en `kebab-case` pour les sous-pages

## 📦 Système de Métadonnées

Le fichier `assets/js/formation-projects.js` charge dynamiquement les projets via leurs `metadata.json`.

**Avantages :**
- Affichage automatique des projets sur les pages de formation
- Filtrage dynamique par formation/statut/difficulté
- Statistiques générées automatiquement
- Maintenance simplifiée (ajout d'un projet = ajout du metadata.json)

## 🔄 Workflow d'Ajout de Projet

1. **Créer le dossier** : `projets/nouveau-projet/`
2. **Créer les fichiers** : `index.html`, `README.md`, `metadata.json`
3. **Développer le projet** : HTML/CSS/JS dans le dossier
4. **Mettre à jour metadata.json** : formation, statut, technologies
5. **Le projet apparaît automatiquement** sur les pages concernées

## 📱 Responsive Design

Tous les fichiers CSS suivent une approche mobile-first avec breakpoints standardisés :

```css
/* Mobile : < 768px (par défaut) */

/* Tablet : 768px - 1024px */
@media (max-width: 1024px) { }

/* Desktop : > 1024px */
@media (min-width: 1024px) { }
```

## 🔗 Liens Relatifs

### Depuis la racine (`index.html`)
```html
<link rel="stylesheet" href="assets/css/portfolio.css">
<a href="projets/index.html">Voir les projets</a>
```

### Depuis projets (`projets/index.html`)
```html
<link rel="stylesheet" href="../assets/css/portfolio.css">
<link rel="stylesheet" href="../assets/css/all-projects.css">
<a href="css-layouts-guide/index.html">Voir le guide</a>
```

### Depuis un projet (`projets/mon-projet/index.html`)
```html
<link rel="stylesheet" href="../../assets/css/portfolio.css">
<a href="../index.html">Retour aux projets</a>
```

## 🚀 Prochaines Améliorations

- [ ] Séparer le CSS inline des autres pages HTML
- [ ] Créer un système de templates réutilisables
- [ ] Implémenter un build system (Vite/Webpack)
- [ ] Ajouter des tests automatisés
- [ ] Optimiser les images (WebP, lazy loading)
- [ ] Implémenter un service worker pour le cache

---

**Dernière mise à jour :** 24 février 2026  
**Changements récents :** Séparation du CSS de `projets/index.html` vers `assets/css/all-projects.css`
