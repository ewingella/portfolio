// Grid Basics Demo - Version simple et claire
console.log('Chargement de la démo Grid Basics...');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialisation de la démo...');
  
  // Éléments DOM
  const grid = document.getElementById('interactive-grid');
  const description = document.getElementById('grid-description');
  const explanation = document.getElementById('explanation');
  const columnsCount = document.getElementById('columns-count');
  const rowsCount = document.getElementById('rows-count');
  const columnControls = document.getElementById('column-controls');
  const rowControls = document.getElementById('row-controls');
  const rowGapSlider = document.getElementById('row-gap-slider');
  const columnGapSlider = document.getElementById('column-gap-slider');
  const rowGapValue = document.getElementById('row-gap-value');
  const columnGapValue = document.getElementById('column-gap-value');
  
  // Configuration initiale
  let currentColumns = 3;
  let currentRows = 2;
  let columnValues = ['1fr', '1fr', '1fr'];
  let rowValues = ['1fr', '1fr'];
  let currentRowGap = 16;
  let currentColumnGap = 16;
  
  // Options disponibles pour chaque colonne/ligne
  const sizeOptions = [
    { value: '1fr', label: '1fr', explanation: 'flexible 1×' },
    { value: '2fr', label: '2fr', explanation: 'flexible 2×' },
    { value: '3fr', label: '3fr', explanation: 'flexible 3×' },
    { value: '100px', label: '100px', explanation: 'fixe' },
    { value: '150px', label: '150px', explanation: 'fixe' },
    { value: '200px', label: '200px', explanation: 'fixe' },
    { value: '250px', label: '250px', explanation: 'fixe' },
    { value: 'auto', label: 'auto', explanation: 's\'adapte au contenu' },
    { value: 'min-content', label: 'min-content', explanation: 'largeur minimale du contenu' },
    { value: 'max-content', label: 'max-content', explanation: 'largeur maximale du contenu' },
    { value: 'fit-content(200px)', label: 'fit-content(200px)', explanation: 's\'adapte au contenu, max 200px' },
    { value: 'fit-content(150px)', label: 'fit-content(150px)', explanation: 's\'adapte au contenu, max 150px' },
    { value: 'fit-content(50%)', label: 'fit-content(50%)', explanation: 's\'adapte au contenu, max 50%' },
    { value: 'minmax(100px, 1fr)', label: 'minmax(100px, 1fr)', explanation: 'min 100px, max flexible' },
    { value: 'minmax(150px, 300px)', label: 'minmax(150px, 300px)', explanation: 'entre 150px et 300px' },
    { value: 'minmax(min-content, 200px)', label: 'minmax(min-content, 200px)', explanation: 'contenu min, max 200px' }
  ];
  
  // Fonction pour créer les contrôles de colonnes
  function createColumnControls() {
    columnControls.innerHTML = '';
    columnValues = new Array(currentColumns).fill('1fr');
    
    for (let i = 0; i < currentColumns; i++) {
      const controlRow = createSizeControl('column', i, columnValues, (index, value) => {
        columnValues[index] = value;
        updateGrid();
      });
      columnControls.appendChild(controlRow);
    }
  }
  
  // Fonction pour créer les contrôles de lignes
  function createRowControls() {
    rowControls.innerHTML = '';
    rowValues = new Array(currentRows).fill('1fr');
    
    for (let i = 0; i < currentRows; i++) {
      const controlRow = createSizeControl('row', i, rowValues, (index, value) => {
        rowValues[index] = value;
        updateGrid();
      });
      rowControls.appendChild(controlRow);
    }
  }
  
  // Fonction générique pour créer un contrôle de taille (colonne ou ligne)
  function createSizeControl(type, index, values, onChange) {
    const controlRow = document.createElement('div');
    controlRow.className = 'control-row';
    controlRow.style.alignItems = 'flex-start';
    
    const label = document.createElement('label');
    label.textContent = `${type === 'column' ? 'Colonne' : 'Ligne'} ${index + 1}:`;
    label.setAttribute('for', `${type}-${index}`);
    label.style.minWidth = '80px';
    
    const selectContainer = document.createElement('div');
    selectContainer.style.flex = '1';
    
    const select = document.createElement('select');
    select.id = `${type}-${index}`;
    select.className = 'value-selector';
    select.style.width = '100%';
    select.style.marginBottom = '4px';
    
    // Ajouter les options
    sizeOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      select.appendChild(optionElement);
    });
    
    // Valeur par défaut
    select.value = values[index];
    
    // Créer l'explication
    const explanation = document.createElement('div');
    explanation.className = 'column-explanation';
    explanation.style.fontSize = '0.85em';
    explanation.style.color = '#6b7280';
    explanation.style.fontStyle = 'italic';
    explanation.textContent = getOptionExplanation(values[index]);
    
    // Event listener pour les changements
    select.addEventListener('change', (e) => {
      explanation.textContent = getOptionExplanation(e.target.value);
      onChange(index, e.target.value);
    });
    
    selectContainer.appendChild(select);
    selectContainer.appendChild(explanation);
    
    controlRow.appendChild(label);
    controlRow.appendChild(selectContainer);
    
    return controlRow;
  }
  
  // Fonction pour obtenir l'explication d'une option
  function getOptionExplanation(value) {
    const option = sizeOptions.find(opt => opt.value === value);
    return option ? option.explanation : '';
  }
  
  // Fonction pour créer les éléments de la grille
  function createGridItems() {
    // Contenu varié pour tester min/max-content et fit-content
    const contentVariations = [
      'A',
      'B contenu court',
      'C',
      'D texte plus long pour tester',
      'E',
      'F contenu de longueur moyenne',
      'G',
      'H texte très long qui va vraiment tester les limites du contenu',
      'I',
      'J normal',
      'K',
      'L autre texte long',
      'M',
      'N',
      'O',
      'P'
    ];
    
    const itemsCount = currentColumns * currentRows;
    
    grid.innerHTML = '';
    
    for (let i = 0; i < itemsCount; i++) {
      const item = document.createElement('div');
      item.className = 'demo-item';
      item.textContent = contentVariations[i] || `Item ${i + 1}`;
      grid.appendChild(item);
    }
  }
  
  // === FONCTIONS DE GÉNÉRATION DE CODE ===
  
  /**
   * Génère le CSS de la grille actuelle
   */
  function generateGridCSS() {
    const columnsCSS = columnValues.join(' ');
    const rowsCSS = rowValues.join(' ');
    
    const config = {
      selector: '.demo-grid',
      baseStyles: {
        'display': 'grid',
        'grid-template-columns': columnsCSS,
        'grid-template-rows': rowsCSS,
        ...(currentRowGap === currentColumnGap 
          ? { 'gap': `${currentRowGap}px` }
          : { 
              'row-gap': `${currentRowGap}px`,
              'column-gap': `${currentColumnGap}px`
            }
        ),
        'border': '2px dashed #7c3aed',
        'background': '#faf5ff',
        'padding': '20px'
      },
      additionalStyles: {
        '.demo-item': {
          'background': '#e879f9',
          'border': '2px solid #a21caf',
          'border-radius': '6px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-weight': 'bold',
          'color': 'white'
        }
      }
    };
    
    return window.DemoUtils.generateDemoCSS(config);
  }
  
  /**
   * Génère le HTML de la grille actuelle
   */
  function generateGridHTML() {
    const totalItems = currentColumns * currentRows;
    const items = Array.from({ length: totalItems }, (_, i) => (i + 1).toString());
    
    const config = {
      containerClass: 'demo-grid',
      containerId: 'interactive-grid',
      items: items,
      itemClass: 'demo-item'
    };
    
    return window.DemoUtils.generateDemoHTML(config);
  }
  
  /**
   * Met à jour le code dans la modale
   */
  function updateGridCode() {
    const cssCodeElement = document.getElementById('dynamic-grid-css-code');
    const htmlCodeElement = document.getElementById('dynamic-grid-html-code');
    
    if (cssCodeElement && window.DemoUtils) {
      cssCodeElement.innerHTML = generateGridCSS();
    }
    if (htmlCodeElement && window.DemoUtils) {
      htmlCodeElement.innerHTML = generateGridHTML();
    }
  }
  
  // Fonction pour mettre à jour la grille
  function updateGrid() {
    // Appliquer les styles CSS
    const columnsCSS = columnValues.join(' ');
    const rowsCSS = rowValues.join(' ');
    
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = columnsCSS;
    grid.style.gridTemplateRows = rowsCSS;
    
    // Appliquer les gaps
    if (currentRowGap === currentColumnGap) {
      // Gap uniforme
      grid.style.gap = `${currentRowGap}px`;
      grid.style.rowGap = '';
      grid.style.columnGap = '';
    } else {
      // Gaps différents
      grid.style.gap = '';
      grid.style.rowGap = `${currentRowGap}px`;
      grid.style.columnGap = `${currentColumnGap}px`;
    }
    
    // Mettre à jour l'affichage
    let displayText = `grid-template-columns: ${columnsCSS}`;
    if (currentRows > 1 || rowValues.some(v => v !== '1fr')) {
      displayText += ` | grid-template-rows: ${rowsCSS}`;
    }
    
    // Affichage du gap
    if (currentRowGap === currentColumnGap && currentRowGap > 0) {
      displayText += ` | gap: ${currentRowGap}px`;
    } else if (currentRowGap > 0 || currentColumnGap > 0) {
      displayText += ` | row-gap: ${currentRowGap}px, column-gap: ${currentColumnGap}px`;
    }
    
    description.textContent = displayText;
    
    // Explication dynamique
    let explanationText = `Grille ${currentColumns} colonne${currentColumns > 1 ? 's' : ''} × ${currentRows} ligne${currentRows > 1 ? 's' : ''}`;
    
    // Analyser les types de colonnes et lignes
    const allValues = [...columnValues, ...rowValues];
    const frValues = allValues.filter(v => v.includes('fr') && !v.includes('minmax')).length;
    const pxValues = allValues.filter(v => v.includes('px') && !v.includes('minmax') && !v.includes('fit-content')).length;
    const autoValues = allValues.filter(v => v === 'auto').length;
    const contentValues = allValues.filter(v => v.includes('content') && !v.includes('fit-content') && !v.includes('minmax')).length;
    const fitContentValues = allValues.filter(v => v.includes('fit-content')).length;
    const minmaxValues = allValues.filter(v => v.includes('minmax')).length;
    
    if (minmaxValues > 0) {
      explanationText += ' — Avec contraintes min/max';
    } else if (fitContentValues > 0) {
      explanationText += ' — Avec fit-content (adaptable)';
    } else if (contentValues > 0) {
      explanationText += ' — Basées sur le contenu';
    } else if (frValues > 0 && pxValues > 0) {
      explanationText += ' — Mix fixe + flexible';
    } else if (frValues === allValues.length) {
      explanationText += ' — Toutes flexibles (fr)';
    } else if (pxValues === allValues.length) {
      explanationText += ' — Toutes fixes (px)';
    } else if (autoValues > 0) {
      explanationText += ' — Avec pistes auto';
    }
    
    // Explication des gaps
    if (currentRowGap === currentColumnGap && currentRowGap > 0) {
      explanationText += ` | Gap uniforme: ${currentRowGap}px`;
    } else if (currentRowGap > 0 || currentColumnGap > 0) {
      explanationText += ` | Gaps: ↕${currentRowGap}px ↔${currentColumnGap}px`;
    }
    
    explanation.textContent = explanationText;
    
    // Mettre à jour le code dans la modale si elle est disponible
    if (typeof updateGridCode === 'function') {
      updateGridCode();
    }
    
    console.log('Grille mise à jour:', columnsCSS, '×', rowsCSS, `row-gap: ${currentRowGap}px, column-gap: ${currentColumnGap}px`);
  }
  
  // Event listeners
  columnsCount.addEventListener('change', (e) => {
    currentColumns = parseInt(e.target.value);
    createColumnControls();
    createGridItems();
    updateGrid();
    console.log('Nombre de colonnes changé:', currentColumns);
  });
  
  rowsCount.addEventListener('change', (e) => {
    currentRows = parseInt(e.target.value);
    createRowControls();
    createGridItems();
    updateGrid();
    console.log('Nombre de lignes changé:', currentRows);
  });
  
  rowGapSlider.addEventListener('input', (e) => {
    currentRowGap = parseInt(e.target.value);
    rowGapValue.textContent = `${currentRowGap}px`;
    updateGrid();
  });
  
  columnGapSlider.addEventListener('input', (e) => {
    currentColumnGap = parseInt(e.target.value);
    columnGapValue.textContent = `${currentColumnGap}px`;
    updateGrid();
  });
  
  // Initialisation
  createColumnControls();
  createRowControls();
  createGridItems();
  updateGrid();
  
  // Initialisation de la modale de code
  initGridCodeModal();
  
  console.log('Démo initialisée avec succès!');

  /**
   * Initialise la modale de code pour la grille
   */
  function initGridCodeModal() {
    // Attendre que DemoUtils soit disponible
    if (typeof window.DemoUtils === 'undefined') {
      setTimeout(initGridCodeModal, 100);
      return;
    }
    
    window.DemoUtils.initCodeModal({
      showBtnId: 'show-grid-code-btn',
      modalId: 'grid-code-modal',
      closeBtnId: 'close-grid-modal-btn',
      updateCallback: updateGridCode
    });
  }
});
