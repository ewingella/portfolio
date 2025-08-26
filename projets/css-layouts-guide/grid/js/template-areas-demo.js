// Template Areas Drag & Drop Demo
class DragDropTemplateAreas {
  constructor() {
    this.gridContainer = document.getElementById('construction-grid');
    this.areasOutput = document.getElementById('areas-output');
    this.validationMessage = document.getElementById('validation-message');
    
    this.gridConfig = { rows: 3, cols: 3 };
    this.gridData = [];
    
    this.elementColors = {
      header: { bg: '#dff7e8', border: '#b7e7c8' },
      nav: { bg: '#e8e8ff', border: '#cacaFF' },
      main: { bg: '#fffbe6', border: '#f2e2a2' },
      aside: { bg: '#fdeef6', border: '#f3c0dc' },
      footer: { bg: '#e6f2ff', border: '#bfd8ff' }
    };
    
    this.init();
  }

  init() {
    this.createGrid();
    this.setupEventListeners();
    this.setupDragAndDrop();
    this.updateAreasOutput();
  }

  setupEventListeners() {
    // Grid size selector
    document.getElementById('grid-size').addEventListener('change', (e) => {
      this.changeGridSize(e.target.value);
    });

    // Clear grid button
    document.getElementById('clear-grid').addEventListener('click', () => {
      this.clearGrid();
    });

    // Auto example button
    document.getElementById('auto-example').addEventListener('click', () => {
      this.createAutoExample();
    });
  }

  changeGridSize(size) {
    const [cols, rows] = size.split('x').map(Number);
    this.gridConfig = { rows, cols };
    this.createGrid();
  }

  createGrid() {
    this.gridData = Array(this.gridConfig.rows).fill().map(() => 
      Array(this.gridConfig.cols).fill(null)
    );
    
    this.gridContainer.innerHTML = '';
    this.gridContainer.style.gridTemplateColumns = `repeat(${this.gridConfig.cols}, 1fr)`;
    this.gridContainer.style.gridTemplateRows = `repeat(${this.gridConfig.rows}, 1fr)`;
    
    for (let row = 0; row < this.gridConfig.rows; row++) {
      for (let col = 0; col < this.gridConfig.cols; col++) {
        const cell = this.createCell(row, col);
        this.gridContainer.appendChild(cell);
      }
    }
    
    this.updateAreasOutput();
  }

  createCell(row, col) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.dataset.row = row;
    cell.dataset.col = col;
    
    // Add drop zone styling
    cell.addEventListener('dragover', this.handleDragOver.bind(this));
    cell.addEventListener('drop', this.handleDrop.bind(this));
    cell.addEventListener('dragenter', this.handleDragEnter.bind(this));
    cell.addEventListener('dragleave', this.handleDragLeave.bind(this));
    
    // Add click to remove
    cell.addEventListener('click', () => {
      if (cell.dataset.type) {
        this.removeElement(row, col);
      }
    });
    
    return cell;
  }

  setupDragAndDrop() {
    const draggableElements = document.querySelectorAll('.draggable-element');
    
    draggableElements.forEach(element => {
      element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', element.dataset.type);
        element.classList.add('dragging');
      });
      
      element.addEventListener('dragend', (e) => {
        element.classList.remove('dragging');
      });
    });
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  handleDragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    const elementType = e.dataTransfer.getData('text/plain');
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    
    if (this.canPlaceElement(elementType, row, col)) {
      this.placeElement(elementType, row, col);
      this.showValidationMessage('✅ Élément placé avec succès !', 'success');
    } else {
      this.showValidationMessage('❌ Impossible : les éléments de même type doivent être adjacents', 'error');
    }
  }

  canPlaceElement(type, row, col) {
    // Si la cellule est occupée
    if (this.gridData[row][col] !== null) {
      return false;
    }
    
    // Si c'est le premier élément de ce type, toujours autorisé
    if (!this.hasElementType(type)) {
      return true;
    }
    
    // Vérifier si au moins un élément adjacent est du même type
    const adjacentPositions = this.getAdjacentPositions(row, col);
    return adjacentPositions.some(([adjRow, adjCol]) => 
      this.gridData[adjRow][adjCol] === type
    );
  }

  hasElementType(type) {
    return this.gridData.some(row => row.some(cell => cell === type));
  }

  getAdjacentPositions(row, col) {
    const positions = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // haut, bas, gauche, droite
    
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;
      
      if (newRow >= 0 && newRow < this.gridConfig.rows && 
          newCol >= 0 && newCol < this.gridConfig.cols) {
        positions.push([newRow, newCol]);
      }
    }
    
    return positions;
  }

  placeElement(type, row, col) {
    this.gridData[row][col] = type;
    
    const cell = this.gridContainer.children[row * this.gridConfig.cols + col];
    cell.dataset.type = type;
    cell.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    cell.className = 'grid-cell filled';
    
    const colors = this.elementColors[type];
    cell.style.backgroundColor = colors.bg;
    cell.style.border = `2px solid ${colors.border}`;
    cell.style.color = '#333';
    cell.style.fontWeight = 'bold';
    cell.title = 'Cliquez pour supprimer';
    
    this.updateAreasOutput();
    this.validateGrid();
  }

  removeElement(row, col) {
    this.gridData[row][col] = null;
    
    const cell = this.gridContainer.children[row * this.gridConfig.cols + col];
    cell.dataset.type = '';
    cell.textContent = '';
    cell.className = 'grid-cell';
    cell.style.backgroundColor = '';
    cell.style.border = '';
    cell.style.color = '';
    cell.style.fontWeight = '';
    cell.title = '';
    
    this.updateAreasOutput();
    this.validateGrid();
  }

  validateGrid() {
    const types = ['header', 'nav', 'main', 'aside', 'footer'];
    let isValid = true;
    let issues = [];
    
    for (const type of types) {
      if (this.hasElementType(type)) {
        const islands = this.findIslands(type);
        if (islands.length > 1) {
          isValid = false;
          issues.push(`${type} doit former une zone continue`);
        }
      }
    }
    
    if (isValid) {
      this.showValidationMessage('✅ Grille valide ! Toutes les zones sont continues.', 'success');
    } else {
      this.showValidationMessage(`⚠️ ${issues.join(', ')}`, 'warning');
    }
  }

  findIslands(type) {
    const visited = Array(this.gridConfig.rows).fill().map(() => 
      Array(this.gridConfig.cols).fill(false)
    );
    const islands = [];
    
    for (let row = 0; row < this.gridConfig.rows; row++) {
      for (let col = 0; col < this.gridConfig.cols; col++) {
        if (this.gridData[row][col] === type && !visited[row][col]) {
          const island = [];
          this.dfsIsland(type, row, col, visited, island);
          islands.push(island);
        }
      }
    }
    
    return islands;
  }

  dfsIsland(type, row, col, visited, island) {
    if (row < 0 || row >= this.gridConfig.rows || 
        col < 0 || col >= this.gridConfig.cols || 
        visited[row][col] || this.gridData[row][col] !== type) {
      return;
    }
    
    visited[row][col] = true;
    island.push([row, col]);
    
    // Explore adjacent cells
    this.dfsIsland(type, row - 1, col, visited, island);
    this.dfsIsland(type, row + 1, col, visited, island);
    this.dfsIsland(type, row, col - 1, visited, island);
    this.dfsIsland(type, row, col + 1, visited, island);
  }

  updateAreasOutput() {
    const areas = this.generateTemplateAreas();
    const htmlOutput = document.getElementById('html-output');
    
    if (areas.length === 0) {
      this.areasOutput.innerHTML = '<code>/* Glissez des éléments pour voir le code */</code>';
      if (htmlOutput) {
        htmlOutput.innerHTML = '<code>/* HTML correspondant apparaîtra ici */</code>';
      }
    } else {
      // Générer et afficher le CSS complet
      const formattedAreas = areas.map(area => `    "${area}"`).join('\n');
      
      // Collecter les éléments placés pour les règles grid-area
      const placedElements = new Set();
      for (let row = 0; row < this.gridConfig.rows; row++) {
        for (let col = 0; col < this.gridConfig.cols; col++) {
          const element = this.gridData[row][col];
          if (element && element !== '.' && !placedElements.has(element)) {
            placedElements.add(element);
          }
        }
      }
      
      let css = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${this.gridConfig.cols}, 1fr);
  grid-template-rows: repeat(${this.gridConfig.rows}, 1fr);
  grid-template-areas:
${formattedAreas};
  gap: 1rem;
}`;

      // Ajouter les règles grid-area pour chaque élément
      if (placedElements.size > 0) {
        css += '\n\n/* Assignation des zones aux éléments */';
        Array.from(placedElements).forEach(element => {
          css += `\n.grid-${element} {\n  grid-area: ${element};\n}`;
        });
      }
      
      this.areasOutput.innerHTML = this.highlightCSS(css);
      
      // Générer et afficher le HTML correspondant
      if (htmlOutput) {
        const html = this.generateHTML();
        htmlOutput.innerHTML = this.highlightHTML(html);
      }
    }
  }

  highlightCSS(css) {
    // Échapper le HTML d'abord
    let highlighted = css
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Appliquer la coloration CSS ligne par ligne pour éviter les conflits
    const lines = highlighted.split('\n');
    const coloredLines = lines.map(line => {
      // Commentaires
      if (line.includes('/*')) {
        return line.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="css-comment">$1</span>');
      }
      
      // Sélecteurs (lignes qui commencent par . et finissent par {)
      if (line.match(/^\s*\.[\w-]+\s*\{/)) {
        return line.replace(/^(\s*)(\.[\w-]+)(\s*\{)/g, '$1<span class="css-selector">$2</span>$3');
      }
      
      // Propriétés (lignes avec des deux-points)
      if (line.includes(':') && line.includes(';')) {
        return line.replace(/^(\s+)([\w-]+)(\s*:\s*)([^;]+)(;)/g, 
          '$1<span class="css-property">$2</span>$3<span class="css-value">$4</span>$5');
      }
      
      // Chaînes entre guillemets sur les lignes grid-template-areas
      if (line.includes('"')) {
        return line.replace(/"([^"]*)"/g, '<span class="css-string">"$1"</span>');
      }
      
      return line;
    });
    
    return `<code>${coloredLines.join('\n')}</code>`;
  }

  highlightHTML(html) {
    // Échapper le HTML d'abord
    let highlighted = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Appliquer la coloration HTML de façon sûre
    highlighted = highlighted
      // Balises complètes avec fermeture correcte
      .replace(/&lt;(\/?)(\w+)(\s[^&]*?)?&gt;/g, function(match, slash, tagName, attrs) {
        let result = '&lt;' + slash + '<span class="html-tag">' + tagName + '</span>';
        
        if (attrs) {
          // Colorer les attributs dans les balises
          attrs = attrs.replace(/(\s+)(\w+)(=)"([^"]*)"/g, '$1<span class="html-attribute">$2</span>$3<span class="html-string">"$4"</span>');
          result += attrs;
        }
        
        return result + '&gt;';
      });
    
    return `<code>${highlighted}</code>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  generateTemplateAreas() {
    const areas = [];
    
    for (let row = 0; row < this.gridConfig.rows; row++) {
      const rowAreas = [];
      for (let col = 0; col < this.gridConfig.cols; col++) {
        const cellType = this.gridData[row][col];
        rowAreas.push(cellType || '.');
      }
      areas.push(rowAreas.join(' '));
    }
    
    // Remove empty rows
    return areas.filter(area => area.trim() !== '. '.repeat(this.gridConfig.cols).trim());
  }

  generateHTML() {
    const placedElements = new Set();
    const htmlElements = [];
    
    // Collecter tous les éléments placés
    for (let row = 0; row < this.gridConfig.rows; row++) {
      for (let col = 0; col < this.gridConfig.cols; col++) {
        const element = this.gridData[row][col];
        if (element && element !== '.' && !placedElements.has(element)) {
          placedElements.add(element);
          htmlElements.push(element);
        }
      }
    }
    
    // Générer le HTML correspondant
    let html = '<div class="grid-container">\n';
    htmlElements.forEach(element => {
      const tag = this.getHTMLTag(element);
      html += `  <${tag} class="grid-${element}">${this.getElementContent(element)}</${tag}>\n`;
    });
    html += '</div>';
    
    return html;
  }

  getHTMLTag(elementType) {
    const tags = {
      'header': 'header',
      'nav': 'nav',
      'main': 'main',
      'aside': 'aside',
      'footer': 'footer'
    };
    return tags[elementType] || 'div';
  }

  getElementContent(elementType) {
    const content = {
      'header': 'En-tête du site',
      'nav': 'Navigation',
      'main': 'Contenu principal',
      'aside': 'Barre latérale',
      'footer': 'Pied de page'
    };
    return content[elementType] || elementType;
  }

  clearGrid() {
    this.createGrid();
    this.showValidationMessage('🗑️ Grille vidée', 'info');
  }

  createAutoExample() {
    this.clearGrid();
    
    // Exemple de layout classique 3x3
    if (this.gridConfig.rows >= 3 && this.gridConfig.cols >= 3) {
      // Header sur la première ligne
      this.placeElement('header', 0, 0);
      this.placeElement('header', 0, 1);
      this.placeElement('header', 0, 2);
      
      // Nav, Main, Aside sur la deuxième ligne
      this.placeElement('nav', 1, 0);
      this.placeElement('main', 1, 1);
      this.placeElement('aside', 1, 2);
      
      // Footer sur la troisième ligne
      this.placeElement('footer', 2, 0);
      this.placeElement('footer', 2, 1);
      this.placeElement('footer', 2, 2);
    }
    
    this.showValidationMessage('✨ Exemple créé ! Layout classique desktop', 'success');
  }

  showValidationMessage(message, type) {
    this.validationMessage.textContent = message;
    this.validationMessage.className = `message-${type}`;
    
    // Auto-hide success messages
    if (type === 'success') {
      setTimeout(() => {
        this.validationMessage.className = 'message-info';
        this.validationMessage.textContent = '💡 Astuce : Les éléments de même type doivent être côte à côte';
      }, 3000);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DragDropTemplateAreas();
});
