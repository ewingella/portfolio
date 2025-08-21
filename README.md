# Portfolio Maria Alexandre

Un portfolio moderne et interactif développé avec HTML5, CSS3 et JavaScript vanilla.

## 🚀 Fonctionnalités

- **Design moderne** : Interface clean et professionnelle
- **Responsive design** : Optimisé pour tous les appareils
- **Animations fluides** : Interactions et transitions élégantes
- **Navigation intelligente** : Défilement fluide et mise en évidence des sections
- **Formulaire de contact** : Validation et notifications
- **Performance optimisée** : Code léger et rapide

## 📁 Structure du projet

```
portfolio/
├── index.html                  # Page principale
├── assets/
│   ├── css/
│   │   └── portfolio.css      # Styles principaux
│   ├── js/
│   │   └── portfolio.js       # JavaScript interactif
│   └── images/                # Images et assets
├── projets/                   # Dossier des projets
│   └── css-grid-guide/        # Projet CSS Grid (à migrer)
└── README.md                  # Documentation
```

## 🎨 Design System

### Couleurs
- **Primaire** : `#2563eb` (Bleu moderne)
- **Secondaire** : `#64748b` (Gris ardoise)
- **Accent** : `#0ea5e9` (Bleu ciel)
- **Texte** : `#0f172a` / `#64748b` / `#94a3b8`

### Typography
- **Police** : Inter (Google Fonts)
- **Tailles** : Système responsive avec variables CSS

### Espacements
- **Système** : Variables CSS cohérentes
- **Responsive** : Adaptation automatique selon l'écran

## 🛠 Technologies utilisées

- **HTML5** : Structure sémantique moderne
- **CSS3** : 
  - Variables CSS (Custom Properties)
  - CSS Grid & Flexbox
  - Animations et transitions
  - Responsive design
- **JavaScript ES6+** :
  - Classes modernes
  - API DOM native
  - Intersection Observer
  - Event handling avancé

## 📱 Responsive Breakpoints

- **Mobile** : 480px et moins
- **Tablet** : 768px et moins
- **Desktop** : 1024px et plus
- **Large desktop** : 1200px et plus

## 🔧 Installation et développement

1. **Cloner le projet**
   ```bash
   git clone [URL_DU_REPO]
   cd portfolio
   ```

2. **Ouvrir le projet**
   - Ouvrir `index.html` dans un navigateur
   - Ou utiliser un serveur local (recommandé)

3. **Serveur local (optionnel)**
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (serve)
   npx serve .
   
   # Avec PHP
   php -S localhost:8000
   ```

## 📝 Personnalisation

### Informations personnelles
Éditer les sections suivantes dans `index.html` :
- **Hero section** : Nom, titre, description
- **About section** : Biographie et compétences
- **Contact section** : Email, LinkedIn, GitHub

### Couleurs et styles
Modifier les variables CSS dans `portfolio.css` :
```css
:root {
  --primary: #2563eb;        /* Couleur principale */
  --secondary: #64748b;      /* Couleur secondaire */
  --accent: #0ea5e9;         /* Couleur d'accent */
  /* ... autres variables */
}
```

### Ajout de projets
1. Créer un dossier dans `projets/`
2. Ajouter une carte projet dans la section `#projects`
3. Mettre à jour les liens et descriptions

## 🚀 Déploiement

### GitHub Pages
1. Push vers un repo GitHub
2. Aller dans Settings > Pages
3. Sélectionner la branche source
4. Le portfolio sera accessible à `https://username.github.io/repo-name`

### Netlify
1. Connecter le repo GitHub à Netlify
2. Déploiement automatique à chaque push

### Vercel
1. Importer le projet sur Vercel
2. Déploiement automatique configuré

## 📋 TODO / Améliorations futures

- [ ] Mode sombre
- [ ] Animation de chargement
- [ ] Blog intégré
- [ ] Multi-langue
- [ ] PWA (Progressive Web App)
- [ ] Analytics
- [ ] SEO avancé
- [ ] Tests automatisés

## 🎯 Prochaines étapes

1. **Migration du projet CSS Grid** : Intégrer le projet existant
2. **Captures d'écran** : Ajouter des images des projets
3. **Contenu personnalisé** : Adapter le contenu à votre profil
4. **Optimisation** : Images, performance, SEO
5. **Déploiement** : Mise en ligne sur GitHub Pages

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier selon vos besoins.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou proposer une pull request.

---

**Développé avec ❤️ par Maria Alexandre**
