# 📚 Système de Gestion des Projets par Formation

## 🎯 Objectif

Ce système organise automatiquement les projets par formation et par module, offrant une vue claire de la progression pédagogique.

## 🏗️ Architecture

### Structure des Métadonnées
Chaque projet doit avoir un `metadata.json` avec cette structure :

```json
{
  "title": "Nom du Projet",
  "formation": "codecademy-fullstack|freecodecamp",
  "formationName": "Codecademy Full-Stack Engineer|FreeCodeCamp",
  "module": "Web Development Foundations|Responsive Web Design",
  "moduleOrder": 1,
  "projectOrder": 2,
  "technologies": ["HTML5", "CSS3", "JavaScript"],
  "status": "completed|in-progress|planned|archived",
  "difficulty": "beginner|intermediate|advanced",
  "type": "formation-project|personal-project",
  "description": "Description du projet",
  "features": ["Feature 1", "Feature 2"],
  "learningObjectives": ["Objectif 1", "Objectif 2"],
  "dateCreated": "2025-08-25",
  "dateUpdated": "2025-08-25",
  "demoUrl": "index.html"
}
```

### Organisation Visuelle

```
📚 Formation Codecademy Full-Stack Engineer
├── 📖 Module 1: Web Development Foundations
│   ├── ✅ Company Homepage with Flexbox (Débutant)
│   └── 🔄 Personal Portfolio Site (Intermédiaire)
├── 📖 Module 2: Building Interactive Websites  
│   ├── ✅ CSS Grid Guide (Intermédiaire)
│   └── 📋 Interactive JavaScript Game (Avancé)
└── 📖 Module 3: Frontend Development
    ├── 📋 React Component Library (Avancé)
    └── 📋 E-commerce Frontend (Avancé)

📚 Formation FreeCodeCamp
├── 📖 Certification 1: Responsive Web Design
│   ├── ⏳ Survey Form (Débutant)
│   ├── ⏳ Tribute Page (Débutant)
│   ├── ⏳ Technical Documentation (Intermédiaire)
│   ├── ⏳ Product Landing Page (Intermédiaire)
│   └── ⏳ Personal Portfolio (Intermédiaire)
├── 📖 Certification 2: JavaScript Algorithms and Data Structures
│   └── ⏳ Projets algorithmiques (Avancé)
└── 📖 Certification 3: Front End Development Libraries
    └── ⏳ Projets React/Redux (Avancé)
```

## 🎓 Formations Disponibles

### Codecademy Full-Stack Engineer
**Clé:** `codecademy-fullstack`

Modules disponibles :
1. Web Development Foundations (moduleOrder: 1)
2. Building Interactive Websites (moduleOrder: 2)
3. Frontend Development (moduleOrder: 3)
4. Backend Development (moduleOrder: 4)
5. Full-Stack Development (moduleOrder: 5)
6. Portfolio & Career Prep (moduleOrder: 6)

### FreeCodeCamp
**Clé:** `freecodecamp`

Certifications disponibles :
1. Responsive Web Design (moduleOrder: 1)
2. JavaScript Algorithms and Data Structures (moduleOrder: 2)
3. Front End Development Libraries (moduleOrder: 3)
4. Data Visualization (moduleOrder: 4)
5. Back End Development and APIs (moduleOrder: 5)

## 🔧 Utilisation

### 1. Ajouter un Nouveau Projet

1. **Créer le dossier projet** dans `/projets/`
2. **Créer le `metadata.json`** avec les bonnes informations
3. **Mettre à jour** le script `/assets/js/formation-projects.js` :

```javascript
const projectPaths = [
    'projets/css-grid-guide/metadata.json',
    'projets/company-homepage-flexbox/metadata.json',
    'projets/nouveau-projet/metadata.json'  // Ajouter ici
];
```

### 2. Intégrer dans une Page de Formation

```html
<!-- Dans le <head> -->
<link rel="stylesheet" href="../assets/css/formation-projects.css">

<!-- Dans le <body> -->
<div id="formation-projects-container" class="formation-projects loading"></div>

<!-- Avant </body> -->
<script src="../assets/js/formation-projects.js"></script>
<script>
document.addEventListener('DOMContentLoaded', async () => {
    const manager = new FormationProjectsManager();
    // Utilisez 'codecademy-fullstack' ou 'freecodecamp'
    await manager.init('codecademy-fullstack', 'formation-projects-container');
});
</script>
```

## 🎨 Styles et Personnalisation

### Classes CSS Disponibles
- `.formation-projects` - Container principal
- `.module-section` - Section de module
- `.project-card` - Carte de projet
- `.difficulty-{level}` - Style par difficulté
- `.tech-tag` - Badge de technologie

### Statuts de Projet
- `completed` ✅ - Projet terminé
- `in-progress` 🔄 - En cours de développement
- `planned` 📋 - Planifié/À faire
- `archived` 📦 - Archivé

### Niveaux de Difficulté
- `beginner` 🟢 - Débutant (vert)
- `intermediate` 🟡 - Intermédiaire (orange)
- `advanced` 🔴 - Avancé (rouge)

## 📁 Structure des Fichiers

```
portfolio/
├── assets/
│   ├── css/
│   │   └── formation-projects.css    # Styles du système
│   └── js/
│       └── formation-projects.js     # Logique JavaScript
├── formations/
│   ├── index.html                    # Hub des formations
│   ├── codecademy-fullstack.html     # Page Codecademy
│   ├── freecodecamp.html             # Page FreeCodeCamp
│   └── README.md                     # Documentation
└── projets/
    ├── css-grid-guide/
    │   └── metadata.json             # Métadonnées du projet
    └── company-homepage-flexbox/
        └── metadata.json             # Métadonnées du projet
```

## 🚀 Avantages

1. **Organisation Claire** - Projets regroupés par contexte pédagogique
2. **Maintenance Facile** - Ajout automatique des nouveaux projets
3. **Traçabilité** - Lien direct entre projet et objectifs d'apprentissage
4. **Évolutif** - Support de plusieurs formations simultanément
5. **Responsive** - Adaptation automatique mobile/desktop

## 🔄 Évolutions Futures

- [ ] Chargement automatique des projets (scan du dossier)
- [ ] Filtres par technologie/statut/difficulté
- [ ] Statistiques de progression par module
- [ ] Export des données de formation
- [ ] Intégration avec API Codecademy

## 📖 Exemples d'Usage

### Projet Codecademy
Pour ajouter le projet "React Todo App" au module "Frontend Development" :

1. **Créer** `/projets/react-todo-app/metadata.json` avec :
```json
{
  "title": "React Todo App",
  "formation": "codecademy-fullstack",
  "formationName": "Codecademy Full-Stack Engineer",
  "module": "Frontend Development",
  "moduleOrder": 3,
  "projectOrder": 1
}
```
2. **Ajouter** le chemin dans `formation-projects.js`
3. **Actualiser** la page `codecademy-fullstack.html`

### Projet FreeCodeCamp
Pour ajouter le projet "Survey Form" à la certification "Responsive Web Design" :

1. **Créer** `/projets/fcc-survey-form/metadata.json` avec :
```json
{
  "title": "Survey Form",
  "formation": "freecodecamp",
  "formationName": "FreeCodeCamp",
  "module": "Responsive Web Design",
  "moduleOrder": 1,
  "projectOrder": 1,
  "difficulty": "beginner",
  "technologies": ["HTML5", "CSS3"],
  "features": ["Formulaire responsive", "Validation HTML5"],
  "learningObjectives": ["Formulaires HTML", "CSS responsive"]
}
```
2. **Ajouter** le chemin dans `formation-projects.js`
3. **Actualiser** la page `freecodecamp.html`

Le projet apparaîtra automatiquement dans la bonne section !

---

**Système créé pour optimiser le suivi de formations web multiples**
