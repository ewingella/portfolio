# Company Homepage with Flexbox

> **Formation:** Codecademy Full-Stack Engineer - Web Development Foundations  
> **Projet:** Création d'une page d'accueil d'entreprise moderne avec Flexbox

## 🎯 Objectifs du Projet

Ce projet fait partie du module **Web Development Foundations** de la formation Codecademy Full-Stack Engineer. L'objectif est de créer une page d'accueil d'entreprise complète en utilisant principalement **CSS Flexbox** pour les layouts.

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles et layouts
- **Flexbox** - Système de layout principal
- **JavaScript** - Interactions de base
- **Google Fonts** - Typographie (Inter)

## 📋 Fonctionnalités

### Structure de la Page
- ✅ **Header** avec navigation responsive
- ✅ **Section Hero** avec call-to-action
- ✅ **Section Services** avec présentation des offres
- ✅ **Section À propos** avec statistiques
- ✅ **Section Équipe** avec profils des membres
- ✅ **Section Contact** avec formulaire
- ✅ **Footer** avec informations de contact

### Layouts Flexbox
- ✅ Navigation horizontale responsive
- ✅ Layout Hero avec contenu et image
- ✅ Grille de services flexible
- ✅ Section À propos avec contenu et statistiques
- ✅ Grille d'équipe adaptative
- ✅ Formulaire de contact responsive

### Design Responsive
- ✅ Mobile-first approach
- ✅ Breakpoints : 768px et 480px
- ✅ Navigation mobile avec hamburger menu
- ✅ Layouts qui s'adaptent à toutes les tailles d'écran

## 🎨 Concepts Flexbox Appliqués

### 1. Navigation (`.nav-container`)
```css
display: flex;
justify-content: space-between;
align-items: center;
```

### 2. Menu de Navigation (`.nav-menu`)
```css
display: flex;
gap: 2rem;
```

### 3. Section Hero (`.hero-container`)
```css
display: flex;
align-items: center;
gap: 4rem;
```

### 4. Grille de Services (`.services-grid`)
```css
display: flex;
gap: 2rem;
flex-wrap: wrap;
```

### 5. Boutons Hero (`.hero-buttons`)
```css
display: flex;
gap: 1rem;
flex-wrap: wrap;
```

### 6. Statistiques About (`.about-stats`)
```css
display: flex;
gap: 2rem;
```

### 7. Footer (`.footer-content`)
```css
display: flex;
gap: 4rem;
```

## 📱 Responsive Design

### Mobile (max-width: 768px)
- Navigation transformée en menu hamburger
- Layouts Flexbox passent en `flex-direction: column`
- Réorganisation des contenus pour mobile

### Très petits écrans (max-width: 480px)
- Boutons en pleine largeur
- Espacements réduits
- Typographie adaptée

## 🚀 Compétences Développées

### HTML5
- Structure sémantique complète
- Formulaires accessibles
- Optimisation SEO de base

### CSS3 & Flexbox
- Maîtrise des propriétés Flexbox
- Layouts complexes et responsives
- Variables CSS et design system
- Animations et transitions

### JavaScript
- Navigation smooth scroll
- Menu mobile toggle
- Interactions de base

## 📂 Structure du Projet

```
company-homepage-flexbox/
├── index.html          # Page principale
├── styles.css          # Styles CSS avec Flexbox
├── metadata.json       # Métadonnées du projet
├── README.md          # Documentation
└── images/            # Assets (à ajouter)
    ├── hero-image.jpg
    ├── about-us.jpg
    ├── team-member-1.jpg
    ├── team-member-2.jpg
    ├── team-member-3.jpg
    ├── web-development.svg
    ├── mobile-app.svg
    └── cloud-solutions.svg
```

## 🎯 Points Clés d'Apprentissage

1. **Flexbox Fundamentals**
   - `display: flex`
   - `justify-content` et `align-items`
   - `flex-direction` et `flex-wrap`
   - `gap` pour les espacements

2. **Responsive Design**
   - Mobile-first approach
   - Media queries efficaces
   - Layouts adaptatifs

3. **Design System**
   - Variables CSS cohérentes
   - Composants réutilisables
   - Typographie harmonieuse

4. **Best Practices**
   - Code sémantique et accessible
   - Performance et optimisation
   - Maintenance et évolutivité

## 🔧 Installation et Utilisation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd company-homepage-flexbox
   ```

2. **Ouvrir dans VS Code**
   ```bash
   code .
   ```

3. **Lancer avec Live Server**
   - Installer l'extension Live Server
   - Clic droit sur `index.html` → "Open with Live Server"

## 📸 Ajout d'Images

Pour finaliser le projet, ajouter les images suivantes dans le dossier `images/` :

- `hero-image.jpg` - Image principale du hero
- `about-us.jpg` - Image de l'équipe/bureaux
- `team-member-1.jpg` - Photo de Sarah Martin
- `team-member-2.jpg` - Photo de Marc Dubois
- `team-member-3.jpg` - Photo de Julie Chen
- `web-development.svg` - Icône développement web
- `mobile-app.svg` - Icône applications mobile
- `cloud-solutions.svg` - Icône solutions cloud

## 🎓 Formation Context

Ce projet s'inscrit dans le parcours **Codecademy Full-Stack Engineer** :

- **Module :** Web Development Foundations
- **Focus :** Maîtrise de CSS Flexbox
- **Compétences :** HTML5, CSS3, JavaScript, Responsive Design
- **Objectif :** Créer des layouts complexes et responsives

## 📈 Prochaines Étapes

- [ ] Ajouter les images manquantes
- [ ] Tester sur différents navigateurs
- [ ] Optimiser les performances
- [ ] Ajouter plus d'animations CSS
- [ ] Implémenter la fonctionnalité du formulaire

---

**Projet réalisé dans le cadre de la formation Codecademy Full-Stack Engineer**
