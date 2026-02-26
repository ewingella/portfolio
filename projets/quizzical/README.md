# 🎯 Quizzical - Application de Quiz Interactive

> **Formation** : Scrimba - The Frontend Developer Path  
> **Module** : Learn React  
> **Statut** : 🔄 En développement  
> **Difficulté** : Intermédiaire

## 📋 Description

Quizzical est une application de quiz interactive construite avec React. Elle permet aux utilisateurs de tester leurs connaissances à travers des questions dynamiques avec un système de score en temps réel.

## 🎯 Objectifs du projet

- Maîtriser les concepts fondamentaux de React (components, props, state)
- Gérer les états complexes avec `useState` et/ou `useReducer`
- Interagir avec une API externe pour récupérer des questions
- Créer une interface utilisateur interactive et responsive
- Implémenter la logique de score et de validation des réponses

## 🛠️ Technologies utilisées

- **React** - Library JavaScript pour les interfaces utilisateur
- **Vite** - Build tool moderne et rapide
- **JavaScript ES6+** - Langage de programmation
- **CSS3** - Styles et animations

## 🚀 Installation et lancement

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 📁 Structure du projet

```
quizzical/
├── public/              # Assets statiques
├── src/
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles du composant principal
│   ├── main.jsx        # Point d'entrée React
│   └── index.css       # Styles globaux
├── index.html          # Page HTML principale
├── package.json        # Dépendances et scripts
├── vite.config.js      # Configuration Vite
├── metadata.json       # Métadonnées du projet
└── README.md          # Documentation (ce fichier)
```

## 🎨 Fonctionnalités prévues

- [ ] Écran d'accueil avec bouton de démarrage
- [ ] Récupération de questions depuis une API (Open Trivia DB ou similaire)
- [ ] Affichage des questions avec choix multiples
- [ ] Sélection des réponses
- [ ] Validation et affichage du score
- [ ] Possibilité de recommencer le quiz
- [ ] Design responsive pour mobile et desktop
- [ ] Animations et transitions fluides

## 📝 Notes de développement

### Concepts React utilisés
- Components fonctionnels
- Hooks (useState, useEffect)
- Props et prop drilling
- Event handlers
- Conditional rendering
- Lists et keys

### API suggérée
[Open Trivia Database API](https://opentdb.com/api_config.php) - API gratuite pour récupérer des questions de quiz

### Difficultés potentielles
- Gestion de l'état complexe (questions, réponses sélectionnées, score)
- Mélange aléatoire des réponses
- Décodage des entités HTML dans les questions
- Gestion du rechargement du quiz

## 🔗 Liens utiles

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Scrimba - Learn React](https://scrimba.com/learn/learnreact)
- [Open Trivia DB](https://opentdb.com/)

## 👨‍💻 Auteur

**Maria Alexandre**  
Portfolio : [Lien vers le portfolio](../../index.html)

---

**Projet réalisé dans le cadre de la formation Scrimba - The Frontend Developer Path**
