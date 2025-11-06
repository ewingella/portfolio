# Template de Projet FreeCodeCamp

Ce fichier sert de template pour créer rapidement de nouveaux projets FreeCodeCamp.

## Structure de dossier recommandée

```
projets/fcc-nom-du-projet/
├── index.html          # Page principale du projet
├── styles.css          # Styles CSS
├── script.js           # JavaScript (si nécessaire)
├── metadata.json       # Métadonnées du projet
├── README.md           # Documentation du projet
└── images/             # Images (si nécessaire)
```

## Template metadata.json

```json
{
  "title": "Nom du Projet FreeCodeCamp",
  "description": "Description courte et claire du projet",
  "formation": "freecodecamp",
  "formationName": "FreeCodeCamp",
  "module": "Responsive Web Design",
  "moduleOrder": 1,
  "projectOrder": 1,
  "difficulty": "beginner",
  "status": "in-progress",
  "type": "formation-project",
  "technologies": [
    "HTML5",
    "CSS3"
  ],
  "features": [
    "Fonctionnalité principale 1",
    "Fonctionnalité principale 2",
    "Fonctionnalité principale 3"
  ],
  "learningObjectives": [
    "Objectif d'apprentissage 1",
    "Objectif d'apprentissage 2",
    "Objectif d'apprentissage 3"
  ],
  "dateCreated": "2025-11-06",
  "dateUpdated": "2025-11-06",
  "demoUrl": "index.html"
}
```

## Certifications FreeCodeCamp

### 1. Responsive Web Design (moduleOrder: 1)

Projets requis pour la certification :
1. **Survey Form** (projectOrder: 1)
   - Technologies: HTML5, CSS3
   - Difficulté: beginner
   - User Stories FreeCodeCamp à implémenter

2. **Tribute Page** (projectOrder: 2)
   - Technologies: HTML5, CSS3
   - Difficulté: beginner

3. **Technical Documentation Page** (projectOrder: 3)
   - Technologies: HTML5, CSS3
   - Difficulté: intermediate

4. **Product Landing Page** (projectOrder: 4)
   - Technologies: HTML5, CSS3
   - Difficulté: intermediate

5. **Personal Portfolio Webpage** (projectOrder: 5)
   - Technologies: HTML5, CSS3, JavaScript
   - Difficulté: intermediate

### 2. JavaScript Algorithms and Data Structures (moduleOrder: 2)

Projets requis :
1. **Palindrome Checker** (projectOrder: 1)
2. **Roman Numeral Converter** (projectOrder: 2)
3. **Caesars Cipher** (projectOrder: 3)
4. **Telephone Number Validator** (projectOrder: 4)
5. **Cash Register** (projectOrder: 5)

### 3. Front End Development Libraries (moduleOrder: 3)

Projets requis :
1. **Random Quote Machine** (projectOrder: 1) - React
2. **Markdown Previewer** (projectOrder: 2) - React
3. **Drum Machine** (projectOrder: 3) - React
4. **JavaScript Calculator** (projectOrder: 4) - React
5. **25 + 5 Clock** (projectOrder: 5) - React

### 4. Data Visualization (moduleOrder: 4)

Projets requis :
1. **Bar Chart** (projectOrder: 1) - D3.js
2. **Scatterplot Graph** (projectOrder: 2) - D3.js
3. **Heat Map** (projectOrder: 3) - D3.js
4. **Choropleth Map** (projectOrder: 4) - D3.js
5. **Treemap Diagram** (projectOrder: 5) - D3.js

### 5. Back End Development and APIs (moduleOrder: 5)

Projets requis :
1. **Timestamp Microservice** (projectOrder: 1) - Node.js, Express
2. **Request Header Parser** (projectOrder: 2) - Node.js, Express
3. **URL Shortener** (projectOrder: 3) - Node.js, Express, MongoDB
4. **Exercise Tracker** (projectOrder: 4) - Node.js, Express, MongoDB
5. **File Metadata Microservice** (projectOrder: 5) - Node.js, Express

## Template HTML de base

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nom du Projet - FreeCodeCamp</title>
    <meta name="description" content="Description du projet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main id="main">
        <header>
            <h1>Titre du Projet</h1>
        </header>
        
        <section>
            <!-- Contenu du projet -->
        </section>
        
        <footer>
            <p>Projet réalisé dans le cadre de la formation FreeCodeCamp</p>
            <p><a href="../index.html">← Retour aux projets</a></p>
        </footer>
    </main>
    
    <!-- FreeCodeCamp Test Suite (optionnel pour validation) -->
    <!-- <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> -->
    
    <script src="script.js"></script>
</body>
</html>
```

## Template README.md

```markdown
# Nom du Projet

> Projet de certification FreeCodeCamp - [Nom de la Certification]

## 📋 Description

Description détaillée du projet et de ses objectifs.

## 🎯 User Stories FreeCodeCamp

Liste des user stories à implémenter :

1. **User Story #1:** Description
2. **User Story #2:** Description
3. **User Story #3:** Description
...

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript (si applicable)

## ✨ Fonctionnalités

- Fonctionnalité 1
- Fonctionnalité 2
- Fonctionnalité 3

## 📚 Objectifs d'apprentissage

- Objectif 1
- Objectif 2
- Objectif 3

## 🚀 Démo

[Voir le projet en ligne](./index.html)

## 📝 Notes de développement

Notes personnelles sur le processus de développement, défis rencontrés, solutions trouvées.

## 📖 Ressources

- [FreeCodeCamp - Nom de la Certification](lien)
- Autres ressources utilisées

---

**Projet créé dans le cadre de la formation FreeCodeCamp**
Date de réalisation : [Date]
```

## Checklist avant soumission

- [ ] Toutes les User Stories sont implémentées
- [ ] Le projet passe tous les tests FreeCodeCamp
- [ ] Le code est propre et commenté
- [ ] Le projet est responsive
- [ ] Le README.md est complet
- [ ] Le metadata.json est correct
- [ ] Le projet est ajouté à formation-projects.js
- [ ] Les statistiques sont mises à jour dans freecodecamp.html
- [ ] Les statistiques sont mises à jour dans formations/index.html

## Liens utiles

- [FreeCodeCamp Curriculum](https://www.freecodecamp.org/learn)
- [Documentation FreeCodeCamp](https://www.freecodecamp.org/news/)
- [Forum FreeCodeCamp](https://forum.freecodecamp.org/)
