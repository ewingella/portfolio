# 🎓 Guide Complet - Gestion des Formations

Ce guide explique comment gérer et mettre à jour vos formations Codecademy, FreeCodeCamp et Scrimba.

> **📌 Mise à jour importante** : Ce guide reflète la nouvelle architecture unifiée où toutes les pages de formation partagent le même CSS (formation-detail.css) et affichent les projets de manière identique à projets/index.html avec miniatures en iframe.

## 📊 Vue d'ensemble

Vous avez maintenant **3 formations actives** :
1. **Codecademy Full-Stack Engineer** (en cours - 75%)
2. **Scrimba The Frontend Developer Path** (en cours - 76%)
3. **FreeCodeCamp** (à venir - 0%)

## 🎯 Pages créées

### Pages principales
- ✅ `formations/index.html` - Liste de toutes les formations (mise à jour)
- ✅ `formations/codecademy-fullstack.html` - Détails Codecademy (existante)
- ✅ `formations/scrimba-frontend.html` - Détails Scrimba (NOUVELLE)
- ✅ `formations/freecodecamp.html` - Détails FreeCodeCamp (existante)

### Styles CSS
- ✅ `assets/css/formations-index.css` - **Fichier CSS unique** pour formations/index.html (autonome, contient toutes les variables et styles)
- ✅ `assets/css/formation-detail.css` - **Fichier CSS partagé** pour toutes les pages de détail de formation (autonome, codecademy-fullstack.html, scrimba-frontend.html et freecodecamp.html)

### Scripts JavaScript
- ✅ `assets/js/formation-projects.js` - Charge et affiche automatiquement les projets par formation et module

### Architecture technique
- ✅ **CSS unifié** : Un seul fichier CSS par type de page (formations-index.css pour l'index, formation-detail.css pour les détails)
- ✅ **Structure HTML identique** : Toutes les pages de formation partagent la même structure
- ✅ **Cartes projet uniformes** : Les projets s'affichent avec le même design que dans projets/index.html
- ✅ **Miniatures dynamiques** : Les projets sont affichés en iframe avec effet zoom (33% de scale pour voir 3x plus de contenu)
- ✅ **Tri automatique** : Les projets sont triés par statut (Terminés → En cours → Planifiés)

### Documentation
- ✅ `formations/README.md` - Documentation du système (mise à jour)
- ✅ `formations/TEMPLATE_PROJET_FREECODECAMP.md` - Template pour nouveaux projets

### Exemple de projet
- ✅ `projets/fcc-survey-form/` - Projet exemple (planifié)

## 🆕 Comment ajouter une nouvelle formation à la page index

Si vous souhaitez ajouter une **troisième formation** (ex: Udemy, Platzi, OpenClassrooms, etc.) à la page `formations/index.html` :

### Étapes pour ajouter une formation

#### 1️⃣ Ajouter la carte HTML dans formations/index.html

Dupliquez une carte existante et modifiez-la :

```html
<!-- Nouvelle Formation -->
<div class="formation-card">
    <div class="formation-header">
        <div class="formation-logo nouvelle-formation">NF</div>
        <div class="formation-info">
            <h3>Titre de la Formation</h3>
            <div class="formation-provider">Nom du Fournisseur</div>
        </div>
    </div>
    
    <div class="formation-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
        <div class="progress-text">0% complété • À venir</div>
    </div>
    
    <div class="formation-stats">
        <div class="stat-item">
            <span class="stat-number">X</span>
            <div class="stat-label">Modules</div>
        </div>
        <div class="stat-item">
            <span class="stat-number">0</span>
            <div class="stat-label">Projets</div>
        </div>
        <div class="stat-item">
            <span class="stat-number">0</span>
            <div class="stat-label">Heures</div>
        </div>
    </div>
    
    <p>
        Description de la formation et des compétences couvertes.
    </p>
    
    <div class="formation-actions">
        <a href="nouvelle-formation.html" class="btn-formation btn-primary">Voir détails</a>
        <a href="../projets/" class="btn-formation btn-secondary">Projets</a>
    </div>
</div>
```

#### 2️⃣ Ajouter les styles spécifiques dans formations-index.css

Si votre formation a une couleur de marque spécifique, ajoutez-la :

```css
/* Logo Variants */
.formation-logo.freecodecamp {
    background: #0a0a23;
}

.formation-logo.nouvelle-formation {
    background: #votre-couleur;  /* Ajoutez la couleur de la marque */
}
```

#### 3️⃣ Créer la page de détail

Créez `formations/nouvelle-formation.html` en copiant la structure de `freecodecamp.html` ou `codecademy-fullstack.html`.

#### 4️⃣ Mettre à jour les statistiques

Au fur et à mesure de votre progression, mettez à jour les pourcentages et nombres dans la carte.

**Note importante :** Toutes les modifications de style doivent être faites dans `/assets/css/formations-index.css`. Ce fichier est **autonome** et contient toutes les variables CSS nécessaires (pas besoin d'importer portfolio.css).

## 🚀 Comment ajouter un nouveau projet à votre formation

### Structure complète d'un projet

Chaque projet doit avoir cette structure de dossier :

```
projets/
└── nom-du-projet/
    ├── index.html          # Page principale du projet
    ├── styles.css          # (optionnel) Styles CSS
    ├── script.js           # (optionnel) JavaScript
    ├── metadata.json       # ⚠️ OBLIGATOIRE - Métadonnées pour l'affichage
    └── README.md           # Documentation du projet
```

### Méthode rapide (4 étapes)

#### 1️⃣ Créer le dossier du projet
```bash
cd projets
mkdir nom-du-projet
cd nom-du-projet
```

#### 2️⃣ Créer le fichier metadata.json

**C'EST LE FICHIER LE PLUS IMPORTANT** - Il permet au système d'afficher automatiquement votre projet sur les pages de formation.

```json
{
  "title": "Titre du Projet",
  "description": "Description concise du projet (1-2 phrases maximum). Cette description s'affichera sur la carte du projet.",
  "formation": "codecademy-fullstack",
  "formationName": "Codecademy",
  "module": "Nom du Module",
  "moduleOrder": 1,
  "projectOrder": 1,
  "difficulty": "beginner",
  "status": "in-progress",
  "type": "formation-project",
  "technologies": ["HTML5", "CSS3", "JavaScript"],
  "dateCreated": "2026-02-25",
  "dateUpdated": "2026-02-25",
  "demoUrl": "index.html"
}
```

**Champs obligatoires expliqués :**

- `title` : Nom du projet (affiché en titre de carte)
- `description` : Description courte (1-2 phrases, affichée sur la carte)
- `formation` : Identifiant de la formation
  - `"codecademy-fullstack"` pour Codecademy
  - `"freecodecamp"` pour FreeCodeCamp
- `formationName` : Nom affiché dans le badge
  - `"Codecademy"` ou `"FreeCodeCamp"`
- `module` : Nom du module/certification
  - Ex: "Web Development Foundations", "Responsive Web Design"
- `moduleOrder` : Ordre du module (1, 2, 3...)
- `projectOrder` : Ordre du projet dans le module (1, 2, 3...)
- `status` : État du projet
  - `"completed"` : Projet terminé ✅
  - `"in-progress"` : En cours de développement 🔄
  - `"planned"` : Planifié mais pas encore commencé 📋
- `technologies` : Tableau des technologies utilisées (affichées en tags)
- `demoUrl` : Nom du fichier HTML principal (généralement "index.html")

#### 3️⃣ Ajouter le projet au système

Ouvrez `/assets/js/formation-projects.js` et ajoutez le chemin :

```javascript
const projectPaths = [
    // ... projets existants
    'projets/nom-du-projet/metadata.json',  // <- Ajouter ici
];
```

#### 4️⃣ Vérifier l'affichage

1. Ouvrez votre page de formation (`codecademy-fullstack.html` ou `freecodecamp.html`)
2. Le projet devrait apparaître automatiquement dans le bon module
3. Les projets sont automatiquement triés par statut :
   - ✅ **Terminés** en premier
   - 🔄 **En cours** ensuite
   - 📋 **Planifiés** à la fin

### 🎨 Apparence des cartes projet

Les cartes projet s'affichent avec :
- **Miniature** : Iframe du projet avec zoom 33% (montre 3x plus de contenu)
- **Overlay** : Apparaît au survol avec boutons "Voir le projet" et "Documentation"
- **Titre** + **Badges** (statut et formation)
- **Description** courte
- **Tags technologies**

**Structure identique à projets/index.html !**

## 🚀 Exemple pour FreeCodeCamp

```bash
# 1. Créer le dossier
cd projets
mkdir fcc-survey-form
cd fcc-survey-form

# 2. Créer les fichiers
touch index.html styles.css metadata.json README.md
```

**metadata.json pour FreeCodeCamp :**
```json
{
  "title": "Survey Form",
  "description": "Formulaire de sondage responsive avec validation HTML5",
  "formation": "freecodecamp",
  "formationName": "FreeCodeCamp",
  "module": "Responsive Web Design",
  "moduleOrder": 1,
  "projectOrder": 1,
  "status": "completed",
  "type": "formation-project",
  "technologies": ["HTML5", "CSS3", "Forms"],
  "dateCreated": "2026-02-25",
  "dateUpdated": "2026-02-25",
  "demoUrl": "index.html"
}
```

## 📝 Mise à jour des statistiques

Après avoir ajouté ou complété des projets, mettez à jour les statistiques dans :

### 1. Page de la formation (`codecademy-fullstack.html` ou `freecodecamp.html`)

```html
<div class="progress-stats">
    <div class="stat-card">
        <span class="stat-number">75%</span>  <!-- Mettre à jour -->
        <span class="stat-label">Progression globale</span>
    </div>
    <div class="stat-card">
        <span class="stat-number">12</span>  <!-- Mettre à jour -->
        <span class="stat-label">Projets réalisés</span>
    </div>
</div>
```

### 2. Page index des formations (`formations/index.html`)

```html
<div class="progress-fill" style="width: 75%"></div>  <!-- Mettre à jour -->
<div class="progress-text">75% complété • En cours</div>
```

## ⚙️ Détails techniques

### Affichage automatique des projets

Le système utilise `formation-projects.js` qui :
1. Charge tous les fichiers `metadata.json`
2. Organise les projets par formation et module
3. Les trie automatiquement par statut (completed → in-progress → planned)
4. Génère le HTML avec miniatures en iframe
5. Applique les styles de `formation-detail.css`

### Miniatures des projets

Les miniatures utilisent des iframes avec ces paramètres :
- `width: 300%` et `height: 300%`
- `transform: scale(0.33)` pour afficher 3x plus de contenu
- `loading="lazy"` pour optimisation
- `pointer-events: none` pour désactiver l'interaction

### Structure HTML générée

```html
<div class="module-section">
    <h3>Nom du Module</h3>
    <div class="projects-grid">
        <article class="project-card featured">
            <!-- Miniature + overlay -->
            <!-- Contenu : titre, badges, description, tech tags -->
        </article>
    </div>
</div>
```

## 🎨 Charte graphique FreeCodeCamp

### Couleurs
```css
--primary: #0a0a23;      /* Bleu très foncé */
--secondary: #1b1b32;    /* Bleu foncé */
--accent: #ff6b35;       /* Orange vif */
```

### Emojis
- 🔥 Badge FreeCodeCamp
- ✅ Projet terminé
- 🔄 Projet en cours
- ⏳ Projet à venir
- 📋 Projet planifié

## 📋 Certifications FreeCodeCamp

### 1. Responsive Web Design (5 projets)
- [ ] Survey Form
- [ ] Tribute Page
- [ ] Technical Documentation Page
- [ ] Product Landing Page
- [ ] Personal Portfolio Webpage

### 2. JavaScript Algorithms and Data Structures (5 projets)
- [ ] Palindrome Checker
- [ ] Roman Numeral Converter
- [ ] Caesars Cipher
- [ ] Telephone Number Validator
- [ ] Cash Register

### 3. Front End Development Libraries (5 projets)
- [ ] Random Quote Machine
- [ ] Markdown Previewer
- [ ] Drum Machine
- [ ] JavaScript Calculator
- [ ] 25 + 5 Clock

### 4. Data Visualization (5 projets)
- [ ] Bar Chart
- [ ] Scatterplot Graph
- [ ] Heat Map
- [ ] Choropleth Map
- [ ] Treemap Diagram

### 5. Back End Development and APIs (5 projets)
- [ ] Timestamp Microservice
- [ ] Request Header Parser
- [ ] URL Shortener Microservice
- [ ] Exercise Tracker
- [ ] File Metadata Microservice

## 🎨 Charte graphique FreeCodeCamp

### Couleurs
```css
--primary: #0a0a23;      /* Bleu très foncé */
--secondary: #1b1b32;    /* Bleu foncé */
--accent: #ff6b35;       /* Orange vif */
```

### Emojis
- 🔥 Badge FreeCodeCamp
- ✅ Projet terminé
- 🔄 Projet en cours
- ⏳ Projet à venir
- 📋 Projet planifié

## 📝 Workflow recommandé

### Pour chaque nouveau projet

1. **Planification**
   - Lire les User Stories sur FreeCodeCamp
   - Créer le dossier et les fichiers
   - Mettre status à "planned" dans metadata.json

2. **Développement**
   - Changer status à "in-progress"
   - Coder le projet
   - Tester avec la suite de tests FreeCodeCamp

3. **Finalisation**
   - Changer status à "completed"
   - Compléter le README.md
   - Ajouter au système (formation-projects.js)
   - Mettre à jour les statistiques

4. **Publication**
   - Commit et push sur GitHub
   - Vérifier l'affichage sur le portfolio

## 🔄 Mise à jour des progressions

### Calcul de la progression FreeCodeCamp

**Responsive Web Design:**
- Nombre de projets : 5
- Progression par projet : 20%

**Exemple:**
- 1 projet terminé = 20%
- 3 projets terminés = 60%
- 5 projets terminés = 100% (certification obtenue!)

### Mise à jour globale

Si vous avez 5 certifications visées et 25 projets au total :
- 1 projet terminé = 4% de progression globale
- 5 projets terminés (1 certification) = 20%
- 13 projets terminés = 52%

## 📁 Organisation des dossiers

```
projets/
├── fcc-survey-form/              # Projet FreeCodeCamp
├── fcc-tribute-page/             # Projet FreeCodeCamp
├── fcc-tech-doc/                 # Projet FreeCodeCamp
├── css-grid-guide/               # Projet Codecademy
└── company-homepage-flexbox/     # Projet Codecademy
```

**Convention de nommage recommandée:**
- Projets FreeCodeCamp : `fcc-nom-descriptif`
- Projets Codecademy : `nom-descriptif` ou `ca-nom-descriptif`

## 🛠️ Commandes utiles

### Créer rapidement un nouveau projet
```bash
# Depuis la racine du portfolio
cd projets
mkdir fcc-nouveau-projet
cd fcc-nouveau-projet
touch index.html styles.css script.js metadata.json README.md
```

### Vérifier les projets chargés
Ouvrez la console du navigateur sur la page d'une formation et vérifiez :
```javascript
// Vous devriez voir les logs de chargement
// ✅ Projet ajouté: Survey Form
// ✅ Projet ajouté: CSS Grid Guide
// etc.
```

## ⚡ Astuces et bonnes pratiques

1. **Toujours tester localement** avant de commit
2. **Remplir les metadata.json complètement** pour un meilleur affichage
3. **Utiliser des status cohérents** : planned → in-progress → completed
4. **Documenter dans le README.md** : notes, difficultés, solutions
5. **Commit régulièrement** avec des messages clairs
6. **Mettre à jour les stats immédiatement** après avoir terminé un projet

## 🎯 Prochaines étapes suggérées

1. ✅ Page FreeCodeCamp créée
2. ✅ Exemple de projet créé (Survey Form)
3. ⏳ Commencer le premier projet FreeCodeCamp
4. ⏳ Mettre à jour le status du Survey Form à "in-progress"
5. ⏳ Compléter le Survey Form
6. ⏳ Ajouter les 4 autres projets de Responsive Web Design

## 📞 Ressources utiles

- [FreeCodeCamp Curriculum](https://www.freecodecamp.org/learn)
- [FreeCodeCamp Forum](https://forum.freecodecamp.org/)
- [FreeCodeCamp Guide](https://guide.freecodecamp.org/)
- [Template projet](./TEMPLATE_PROJET_FREECODECAMP.md)
- [Documentation système](./README.md)

---

**Bonne formation ! 🚀**
