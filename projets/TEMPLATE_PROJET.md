# 📋 Template de Présentation Projet

> **📚 Voir aussi :**
> - [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md) - Architecture globale du portfolio
> - [formations/GUIDE_FORMATIONS.md](../formations/GUIDE_FORMATIONS.md) - Gestion des formations

> **⚠️ ARCHITECTURE IMPORTANTE** :
> - **Tous les projets sont stockés physiquement dans le dossier `projets/`**
> - Les pages de formations affichent uniquement les **miniatures** des projets via iframes
> - Le fichier `metadata.json` permet l'affichage automatique sur les pages de formations
> - Ce guide concerne l'affichage manuel sur `projets/index.html`

Ce guide fournit le template HTML et les guidelines visuelles pour ajouter un nouveau projet dans `projets/index.html`.

## 📁 Structure complète d'un projet

Chaque projet doit contenir :

```
mon-projet/
├── index.html           # Page principale du projet
├── README.md            # Documentation complète
├── metadata.json        # ⚠️ OBLIGATOIRE - Métadonnées pour affichage dynamique
├── styles.css          # Styles du projet
├── script.js           # JavaScript (si applicable)
└── images/             # Ressources visuelles (si applicable)
```

### 📄 Fichier metadata.json (OBLIGATOIRE)

**Ce fichier permet l'affichage automatique du projet sur les pages de formations.**

```json
{
  "title": "Titre du Projet",
  "description": "Description courte du projet (1-2 phrases)",
  "formation": "codecademy-fullstack",
  "formationName": "Codecademy",
  "module": "Module ou Section",
  "moduleOrder": 1,
  "projectOrder": 1,
  "difficulty": "intermediate",
  "status": "completed",
  "type": "formation-project",
  "technologies": ["HTML5", "CSS3", "JavaScript"],
  "featured": true,
  "dateCreated": "2026-02-25",
  "dateUpdated": "2026-02-25",
  "demoUrl": "index.html"
}
```

**Valeurs possibles :**
- `formation` : `"codecademy-fullstack"`, `"scrimba-frontend"`, `"freecodecamp"`, `"personal"`
- `formationName` : Nom affiché dans le badge ("Codecademy", "Scrimba", "FreeCodeCamp", etc.)
- `status` : `"completed"`, `"in-progress"`, `"planned"`
- `difficulty` : `"beginner"`, `"intermediate"`, `"advanced"`
- `type` : `"formation-project"` ou `"personal-project"`
- `featured` : `true` / `false` (projet mis en avant sur projets/index.html)

## 🎨 Structure HTML standardisée pour la page index.html

**Ajouter ce code dans `projets/index.html` pour afficher la carte du projet :**

```html
<!-- [NOM DU PROJET] - [DESCRIPTION COURTE] -->
<article class="project-card featured">
    <div class="project-image">
        <!-- Option 1: Aperçu réel du site (recommandé) -->
        <div class="project-preview real-site-preview screenshot-preview">
            <div class="site-screenshot">
                <iframe 
                    src="[dossier-projet]/index.html" 
                    title="Aperçu [Nom du Projet]"
                    loading="lazy"
                    class="screenshot-iframe">
                </iframe>
            </div>
        </div>
        
        <!-- Option 2: Illustration thématique (alternative) -->
        <div class="project-preview [type]-preview [theme-class]">
            <div class="preview-header">[Nom du Projet]</div>
            <div class="[layout-type]-layout">
                <!-- Éléments visuels spécifiques au projet -->
                <div class="flex-item [section]-item">[Nom Section]</div>
                <!-- ... autres sections -->
            </div>
        </div>
        
        <div class="project-overlay">
            <div class="project-links">
                <a href="[dossier-projet]/index.html" class="btn btn-primary">[Texte Action Principal]</a>
                <a href="https://github.com/ewingella/portfolio/tree/main/projets/[dossier-projet]" class="btn btn-secondary">Code source</a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <div class="project-header">
            <h3 class="project-title">[Titre Complet du Projet]</h3>
            <div class="project-badges">
                <span class="project-status">[Statut]</span>
                <span class="formation-badge [type-formation]">[Nom Formation]</span>
            </div>
        </div>
        <p class="project-description">
            [Description détaillée mentionnant les technologies clés, fonctionnalités principales, 
            architecture utilisée et éléments différenciants. 2-3 phrases techniques.]
        </p>
        <div class="project-tech">
            <span class="tech-tag">[Techno 1]</span>
            <span class="tech-tag">[Techno 2]</span>
            <span class="tech-tag">[Techno 3]</span>
            <span class="tech-tag">[Techno 4]</span>
            <span class="tech-tag">[Techno 5]</span>
        </div>
    </div>
</article>
```

## 🎨 Classes et styles standardisés

### Aperçus de projets
- `real-site-preview` : Aperçu en iframe du site réel (recommandé)
- `[type]-preview` : Illustration thématique (alternative)

### Classes de base
- `project-card featured` : Pour tous les projets importants
- `site-preview-iframe` : Iframe avec échelle réduite et interactions désactivées
- `preview-overlay` : Bandeau avec label informatif
- `[theme]-theme` : Thèmes visuels personnalisés (pour illustrations)

### Statuts de projet
- `"Production Ready"` : Projet finalisé et déployable
- `"Nouvelle version"` : Projet récemment mis à jour
- `"En développement"` : Projet en cours
- `"Prototype"` : Version expérimentale

### Types de formation
- `formation-badge` : Pour Codecademy, OpenClassrooms, etc.
- `formation-badge personal` : Pour projets personnels

### Boutons d'action (à personnaliser)
- **Sites web** : "Découvrir le site", "Visiter le site"
- **Applications** : "Tester l'app", "Lancer l'application"
- **Guides/Docs** : "Accéder au guide", "Consulter la doc"
- **Jeux** : "Jouer", "Démarrer le jeu"
- **Outils** : "Utiliser l'outil", "Tester l'outil"

## 📝 Guidelines de rédaction

### Titre du projet
Format : `[Nom Projet] - [Type/Objectif]`
Exemples :
- "Golden Hive Honey Co. - Site Vitrine Complet"
- "TaskMaster Pro - Application de Gestion"
- "CSS Grid Playground - Outil Interactif"

### Description (structure recommandée)
1. **Phrase 1** : Objectif principal et domaine d'application
2. **Phrase 2** : Technologies clés et architecture technique
3. **Phrase 3** : Fonctionnalités différenciantes et spécificités

### Tags techniques (ordre de priorité)
1. Framework/Techno principale
2. Langages utilisés
3. Outils/Libraries spécifiques
4. Concepts techniques (Responsive, PWA, etc.)
5. Caractéristiques spéciales (Interactive, Real-time, etc.)

## 🎯 Thèmes visuels disponibles 

### Existants
- `honey-theme` : Dégradé orange/doré avec abeille
- `layouts-preview` : Demo Flexbox + Grid
- `flexbox-preview` : Layout Flexbox standard

### À créer pour futurs projets
- `react-theme` : Bleu React avec logo
- `js-theme` : Jaune JavaScript moderne
- `node-theme` : Vert Node.js
- `portfolio-theme` : Violet/rose gradient
- `game-theme` : Dégradé gaming (violet/cyan)

## 🚀 Workflow d'ajout d'un nouveau projet

> **💡 Rappel** : Tous les projets sont créés dans `projets/`, même s'ils sont liés à une formation. Les pages de formations (`formations/*.html`) affichent uniquement les miniatures via iframes.

### Étape 1 : Créer la structure
```bash
cd projets/
mkdir mon-nouveau-projet
cd mon-nouveau-projet
touch index.html README.md metadata.json styles.css
```

### Étape 2 : Créer le fichier metadata.json
Compléter avec les informations du projet (voir section ci-dessus).

**⚠️ IMPORTANT :** Sans ce fichier, le projet n'apparaîtra pas automatiquement sur les pages de formations.

### Étape 3 : Développer le projet
- Créer `index.html` avec le contenu du projet
- Ajouter les styles dans `styles.css`
- Documenter dans `README.md`

### Étape 4 : Ajouter la carte visuelle (optionnel)

Pour afficher le projet sur `projets/index.html` :
1. Copier le template HTML ci-dessus
2. Remplacer les placeholders `[...]`
3. Créer un thème visuel dans `assets/css/all-projects.css` si nécessaire
4. Insérer dans la section `<div class="projects-grid">` de `projets/index.html`

**Note :** Avec le système de métadonnées, cette étape peut être automatisée à l'avenir.

### Étape 5 : Tester
```bash
# Ouvrir dans le navigateur
open projets/mon-nouveau-projet/index.html

# Vérifier l'affichage sur la page formations
open formations/codecademy-fullstack.html  # ou freecodecamp.html
```

### Étape 6 : Commit
```bash
git add .
git commit -m "feat: add mon-nouveau-projet with [techno-principale]"
```

## 📚 Documentation complémentaire

- **Architecture globale** : Voir [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md)
- **Gestion des formations** : Voir [formations/GUIDE_FORMATIONS.md](../formations/GUIDE_FORMATIONS.md)
- **Guide complet formations** : Instructions détaillées pour ajouter des projets aux formations

---

**Dernière mise à jour** : 24 février 2026  
**Projets utilisant ce template** : Golden Hive Honey Co., CSS Layouts Guide, Pages Turners, Piano Player
