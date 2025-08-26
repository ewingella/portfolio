# CSS Layouts Guide Complet

Un guide unifié et interactif pour maîtriser **CSS Flexbox** et **CSS Grid** avec des démos en temps réel, des comparaisons détaillées et des playgrounds interactifs.

## 🎯 Objectif

Ce projet combine deux guides complets pour créer une ressource d'apprentissage unifiée pour les layouts CSS modernes :
- **CSS Flexbox** : Layouts unidimensionnels flexibles
- **CSS Grid** : Layouts bidimensionnels avec grille

## 🚀 Fonctionnalités

### Page d'accueil
- **Interface moderne** avec animations et prévisualisations
- **Comparaison détaillée** entre Flexbox et Grid
- **Navigation intuitive** vers chaque guide
- **Design responsive** pour tous les appareils

### Guide CSS Flexbox
- **5 sections complètes** : Bases, Conteneur, Éléments, Layouts, Playground
- **Démos interactives** avec contrôles en temps réel
- **Code display buttons** pour CSS et HTML
- **Playground avancé** avec options de taille de conteneur
- **Génération automatique** de code prêt à copier

### Guide CSS Grid
- **Interface drag & drop** pour construire des grilles
- **10+ démos spécialisées** : template-areas, auto-fit/fill, alignements...
- **Configuration de grille** avec tous les concepts de base
- **Galeries responsives** et layouts complexes
- **Générateur de code** avec syntaxe highlighting

## 📁 Structure du Projet

```
css-layouts-guide/
├── index.html              # Page d'accueil unifiée
├── assets/
│   ├── style.css           # Styles pour la page d'accueil
│   └── script.js           # JavaScript pour les interactions
├── flexbox/
│   ├── index.html          # Guide CSS Flexbox
│   ├── flexbox.css         # Styles du guide Flexbox
│   ├── flexbox.js          # JavaScript interactif
│   └── metadata.json       # Métadonnées du projet
└── grid/
    ├── index.html          # Guide CSS Grid
    ├── guide.css           # Styles du guide Grid
    ├── js/                 # Scripts JavaScript
    ├── demos/              # Démos spécialisées
    └── metadata.json       # Métadonnées du projet
```

## 🛠 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Grid, Flexbox, animations, variables CSS
- **JavaScript ES6+** : Interactivité, drag & drop, génération de code
- **Prism.js** : Coloration syntaxique
- **Font Awesome** : Icônes
- **Design System** : Variables CSS et composants réutilisables

## 🎨 Fonctionnalités Avancées

### Interface Interactive
- **Contrôles en temps réel** pour tous les propriétés CSS
- **Prévisualisations visuelles** des layouts
- **Boutons de code** pour afficher CSS et HTML séparément
- **Copie automatique** du code généré

### Responsive Design
- **Mobile-first** approach
- **Breakpoints optimisés** pour tous les appareils
- **Navigation adaptative** selon la taille d'écran
- **Performances optimisées** pour mobile

### Éducation & Apprentissage
- **Explications détaillées** de chaque concept
- **Exemples pratiques** et cas d'usage
- **Comparaisons visuelles** entre techniques
- **Progression structurée** du débutant à l'expert

## 📚 Guides Inclus

### 1. CSS Flexbox Guide
- **Les Bases** : Introduction et concepts fondamentaux
- **Conteneur Flex** : direction, wrap, gap, justify-content, align-items
- **Éléments Flex** : grow, shrink, basis, align-self, order
- **Layouts Courants** : Navigation, cartes, sidebars, footers
- **Playground** : Expérimentation libre avec contrôles de taille

### 2. CSS Grid Guide
- **Configuration de grille** : fr, gap, minmax, fit-content
- **Template Areas** : Layouts déclaratifs par zones
- **Auto-fit vs Auto-fill** : Galeries responsives
- **Auto-flow column** : Placement automatique vertical
- **Alignements** : justify/align items/self/content

## 🎯 Cas d'Usage

### Pour les Débutants
- Interface guidée avec explications étape par étape
- Exemples visuels pour comprendre les concepts
- Code généré automatiquement pour l'apprentissage

### Pour les Développeurs Expérimentés
- Playground avancé pour tester des idées
- Comparaisons détaillées entre techniques
- Code production-ready à copier directement

### Pour l'Enseignement
- Ressource complète pour cours et workshops
- Démos visuelles pour présentation
- Exercices pratiques intégrés

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

## 🔧 Installation et Utilisation

1. **Cloner le projet**
```bash
git clone https://github.com/votre-repo/css-layouts-guide.git
```

2. **Ouvrir dans un serveur local**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8000
```

3. **Accéder au guide**
Ouvrir `http://localhost:8000` dans votre navigateur

## 🌟 Fonctionnalités Futures

- [ ] Mode sombre / clair
- [ ] Sauvegarde des configurations
- [ ] Export de code en différents formats
- [ ] Templates de layouts prêts à l'emploi
- [ ] Intégration avec les frameworks populaires
- [ ] API pour développeurs

## 📖 Documentation

Chaque guide contient sa propre documentation détaillée :
- **Flexbox** : `/flexbox/README.md`
- **Grid** : `/grid/README.md`

## 🤝 Contribution

Les contributions sont les bienvenues ! Voir le fichier `CONTRIBUTING.md` pour les détails.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Maria Alexandre**
- Portfolio : [maria-alexandre.dev](https://maria-alexandre.dev)
- Formation : Codecademy Full-Stack Engineer
- Spécialité : CSS Grid, JavaScript, Interfaces Interactives

---

## 🎉 Remerciements

Merci à la communauté CSS et aux formateurs Codecademy pour l'inspiration et les ressources qui ont rendu ce projet possible.

---

*Créé avec ❤️ pour la communauté des développeurs*
