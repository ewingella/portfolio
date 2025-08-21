# Utilitaires pour Démos Interactives CSS Grid

Le fichier `js/demo-utils.js` fournit un ensemble d'utilitaires réutilisables pour créer des démos interactives CSS Grid avec coloration syntaxique et modales de code.

## Fonctionnalités

### 🎨 Coloration Syntaxique
- **CSS** : Coloration complète avec mise en évidence des propriétés actives
- **HTML** : Coloration des balises, attributs et contenu

### 📱 Modales de Code
- Modales réutilisables avec onglets CSS/HTML
- Fermeture par Escape, clic backdrop, ou bouton
- Gestion automatique du focus et overflow

### 🛠️ Utilitaires
- Génération de CSS démo avec configuration
- Génération de HTML démo avec éléments configurables
- Gestion des selects et styles dynamiques

## Utilisation

### 1. Inclure les Utilitaires

```html
<script src="../js/demo-utils.js" defer></script>
<script src="../js/votre-demo.js" defer></script>
```

### 2. Exemple Basique

```javascript
// Dans votre fichier de démo
function generateCSS(property, value) {
  const config = {
    selector: '.demo-grid',
    baseStyles: {
      'display': 'grid',
      'grid-template-columns': 'repeat(3, 1fr)',
      'gap': '16px'
    },
    activeProperty: property,
    activeValue: value
  };
  
  return window.DemoUtils.generateDemoCSS(config);
}

function initDemo() {
  // Initialiser la modale de code
  window.DemoUtils.initCodeModal({
    showBtnId: 'show-code-btn',
    modalId: 'code-modal', 
    closeBtnId: 'close-modal-btn',
    updateCallback: updateDemoFunction
  });
}
```

### 3. Génération de HTML

```javascript
function generateHTML() {
  const config = {
    containerClass: 'demo-grid',
    containerId: 'my-grid',
    items: ['A', 'B', 'C'],
    itemClass: 'demo-item'
  };
  
  return window.DemoUtils.generateDemoHTML(config);
}
```

### 4. Application de Styles Dynamiques

```javascript
function updateDemo() {
  // Reset puis application de nouveaux styles
  window.DemoUtils.applyDynamicStyles('my-grid', {
    'grid-template-columns': '1fr 2fr 1fr',
    'gap': '20px'
  });
}
```

## API Complète

### `DemoUtils.highlightCSS(css, activeProperty?, activeValue?)`
Applique la coloration syntaxique CSS avec mise en évidence optionnelle.

### `DemoUtils.highlightHTML(html)`
Applique la coloration syntaxique HTML.

### `DemoUtils.generateDemoCSS(config)`
Génère du CSS démo coloré selon la configuration :
```javascript
{
  selector: string,           // Sélecteur principal
  baseStyles: object,         // Styles de base
  activeProperty?: string,    // Propriété à mettre en évidence
  activeValue?: string,       // Valeur à mettre en évidence
  additionalStyles?: object   // Styles additionnels
}
```

### `DemoUtils.generateDemoHTML(config)`
Génère du HTML démo coloré selon la configuration :
```javascript
{
  containerClass: string,     // Classe du conteneur
  containerId?: string,       // ID du conteneur
  items: Array,              // Éléments (string ou {content, class})
  itemClass: string          // Classe des éléments
}
```

### `DemoUtils.initCodeModal(config)`
Initialise une modale de code réutilisable :
```javascript
{
  showBtnId: string,         // ID du bouton d'ouverture
  modalId: string,           // ID de la modale
  closeBtnId: string,        // ID du bouton de fermeture
  updateCallback?: Function  // Fonction de mise à jour
}
```

### `DemoUtils.updateSelectOptions(selectId, values, currentValue?)`
Met à jour les options d'un select en préservant la valeur si possible.

### `DemoUtils.applyDynamicStyles(elementId, styles, resetFirst?)`
Applique des styles CSS dynamiquement à un élément.

## Exemples Complets

Voir les fichiers :
- `js/alignment-demo.js` - Démo d'alignement avec radio buttons
- `js/auto-flow-demo.js` - Démo auto-flow avec select

## Structure HTML Requise pour Modales

```html
<!-- Bouton pour ouvrir la modale -->
<button id="show-code-btn">Voir le code</button>

<!-- Modale -->
<div id="code-modal" class="code-modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3>Code de la démo</h3>
      <button id="close-modal-btn">&times;</button>
    </div>
    
    <!-- Onglets -->
    <div class="code-tabs">
      <button class="code-tab active" data-tab="css">CSS</button>
      <button class="code-tab" data-tab="html">HTML</button>
    </div>
    
    <!-- Panneaux -->
    <div id="css-panel" class="code-panel active">
      <pre><code id="dynamic-css-code"><!-- CSS généré --></code></pre>
    </div>
    <div id="html-panel" class="code-panel">
      <pre><code id="dynamic-html-code"><!-- HTML généré --></code></pre>
    </div>
  </div>
</div>
```

Les styles CSS pour les modales et la coloration syntaxique sont inclus dans `guide.css`.
