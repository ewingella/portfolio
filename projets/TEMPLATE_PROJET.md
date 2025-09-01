# 📋 Template de Présentation Projet

## Structure HTML standardisée pour tous les futurs projets

```html
<!-- [NOM DU PROJET] - [DESCRIPTION COURTE] -->
<article class="project-card featured">
    <div class="project-image">
        <!-- Option 1: Aperçu réel du site (recommandé) -->
        <div class="project-preview real-site-preview">
            <iframe 
                src="[dossier-projet]/index.html" 
                title="Aperçu [Nom du Projet]"
                loading="lazy"
                class="site-preview-iframe">
            </iframe>
            <div class="preview-overlay">
                <div class="preview-label">[Icône] Aperçu en direct</div>
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

## 🚀 Processus d'ajout d'un nouveau projet

1. **Créer le dossier projet** dans `/projets/`
2. **Développer le projet** avec README.md
3. **Créer le thème visuel** dans `formation-projects.css` si nécessaire
4. **Ajouter l'article HTML** dans `index.html` en suivant le template
5. **Tester l'aperçu** et ajuster les styles
6. **Commit avec message** : `feat: add [nom-projet] with [techno-principale]`

---

**Dernière mise à jour** : Septembre 2025
**Projets utilisant ce template** : Golden Hive Honey Co., CSS Layouts Guide
