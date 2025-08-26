// Utilitaires réutilisables pour les démos interactives CSS Grid

/**
 * Coloration syntaxique pour CSS
 * @param {string} css - Le code CSS à colorer
 * @param {string} activeProperty - Propriété à mettre en évidence (optionnel)
 * @param {string} activeValue - Valeur à mettre en évidence (optionnel)
 * @returns {string} - Code CSS coloré en HTML
 */
function highlightCSS(css, activeProperty = null, activeValue = null) {
  let highlighted = css;
  
  // Highlight CSS selectors
  highlighted = highlighted.replace(/^(\.[a-zA-Z][a-zA-Z0-9-]*)/gm, '<span class="css-selector">$1</span>');
  
  // Highlight braces
  highlighted = highlighted.replace(/([{}])/g, '<span class="css-brace">$1</span>');
  
  // Highlight comments
  highlighted = highlighted.replace(/(\/\*.*?\*\/)/g, '<span class="css-comment">$1</span>');
  
  // Highlight the active property line specially if provided
  if (activeProperty && activeValue) {
    highlighted = highlighted.replace(
      new RegExp(`(\\s*)(${activeProperty})(\\s*:)(\\s*)(${activeValue})(\\s*;)`, 'g'),
      '$1<span class="highlight-property">$2$3$4$5</span>$6'
    );
  }
  
  // Highlight other properties
  highlighted = highlighted.replace(/(\s+)([a-zA-Z-]+)(\s*:)(\s*)([^;]+)(;)/g, 
    '$1<span class="css-property">$2</span><span class="css-colon">$3</span>$4<span class="css-value">$5</span><span class="css-semicolon">$6</span>');
  
  // Fix line breaks
  highlighted = highlighted.replace(/\n/g, '<br>');
  
  return highlighted;
}

/**
 * Coloration syntaxique pour HTML
 * @param {string} html - Le code HTML à colorer
 * @returns {string} - Code HTML coloré
 */
function highlightHTML(html) {
  let highlighted = html;
  
  // First escape HTML
  highlighted = highlighted.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Highlight opening and closing tags
  highlighted = highlighted.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)/g, 
    '<span class="html-tag">$1$2</span>');
  highlighted = highlighted.replace(/(&gt;)/g, '<span class="html-tag">$1</span>');
  
  // Highlight class attribute
  highlighted = highlighted.replace(/(class)(=)("demo-[^"]*")/g, 
    '<span class="html-attribute">$1</span><span class="css-colon">$2</span><span class="html-string">$3</span>');
  highlighted = highlighted.replace(/(class)(=)("interactive-[^"]*")/g, 
    '<span class="html-attribute">$1</span><span class="css-colon">$2</span><span class="html-string">$3</span>');
  
  // Highlight id attribute
  highlighted = highlighted.replace(/(id)(=)("[^"]*")/g, 
    '<span class="html-attribute">$1</span><span class="css-colon">$2</span><span class="html-string">$3</span>');
  
  // Highlight text content (letters/numbers in tags)
  highlighted = highlighted.replace(/(&gt;)([A-Z0-9]+)(&lt;)/g, 
    '$1<span class="html-text">$2</span>$3');
  
  // Preserve indentation and line breaks
  highlighted = highlighted.replace(/\n/g, '<br>').replace(/  /g, '&nbsp;&nbsp;');
  
  return highlighted;
}

/**
 * Initialise une modale de code réutilisable
 * @param {Object} config - Configuration de la modale
 * @param {string} config.showBtnId - ID du bouton pour ouvrir la modale
 * @param {string} config.modalId - ID de la modale
 * @param {string} config.closeBtnId - ID du bouton de fermeture
 * @param {Function} config.updateCallback - Fonction appelée pour mettre à jour le code
 */
function initCodeModal(config) {
  const { showBtnId, modalId, closeBtnId, updateCallback } = config;
  
  const showCodeBtn = document.getElementById(showBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);
  const tabs = document.querySelectorAll('.code-tab');
  const panels = document.querySelectorAll('.code-panel');
  
  if (!showCodeBtn || !modal || !closeBtn) {
    console.warn('Code modal elements not found:', { showBtnId, modalId, closeBtnId });
    return;
  }
  
  // Show modal
  showCodeBtn.addEventListener('click', () => {
    modal.classList.add('show');
    if (updateCallback) updateCallback(); // Update code when opening modal
    document.body.style.overflow = 'hidden';
  });
  
  // Close modal
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update active panel
      panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `${targetTab}-panel`) {
          panel.classList.add('active');
        }
      });
    });
  });
}

/**
 * Générateur CSS générique pour démos
 * @param {Object} config - Configuration CSS
 * @param {string} config.selector - Sélecteur principal
 * @param {Object} config.baseStyles - Styles de base
 * @param {string} config.activeProperty - Propriété active à mettre en évidence
 * @param {string} config.activeValue - Valeur active à mettre en évidence
 * @param {Object} config.additionalStyles - Styles additionnels (optionnel)
 * @returns {string} - CSS coloré
 */
function generateDemoCSS(config) {
  const { selector, baseStyles, activeProperty, activeValue, additionalStyles = {} } = config;
  
  let css = `${selector} {\n`;
  
  // Add base styles
  for (const [property, value] of Object.entries(baseStyles)) {
    css += `  ${property}: ${value};\n`;
  }
  
  if (activeProperty && activeValue) {
    css += `\n  /* Propriété active */\n`;
    css += `  ${activeProperty}: ${activeValue};\n`;
  }
  
  css += `}`;
  
  // Add additional styles if provided
  for (const [additionalSelector, styles] of Object.entries(additionalStyles)) {
    css += `\n\n${additionalSelector} {\n`;
    for (const [property, value] of Object.entries(styles)) {
      css += `  ${property}: ${value};\n`;
    }
    css += `}`;
  }
  
  return highlightCSS(css, activeProperty, activeValue);
}

/**
 * Générateur HTML générique pour démos
 * @param {Object} config - Configuration HTML
 * @param {string} config.containerClass - Classe du conteneur
 * @param {string} config.containerId - ID du conteneur
 * @param {Array} config.items - Éléments à générer
 * @param {string} config.itemClass - Classe des éléments
 * @returns {string} - HTML coloré
 */
function generateDemoHTML(config) {
  const { containerClass, containerId, items, itemClass } = config;
  
  let html = `<div class="${containerClass}"`;
  if (containerId) html += ` id="${containerId}"`;
  html += `>\n`;
  
  items.forEach(item => {
    if (typeof item === 'string') {
      html += `  <div class="${itemClass}">${item}</div>\n`;
    } else {
      const classes = `${itemClass}${item.class ? ` ${item.class}` : ''}`;
      html += `  <div class="${classes}">${item.content}</div>\n`;
    }
  });
  
  html += `</div>`;
  
  return highlightHTML(html);
}

/**
 * Utilitaire pour mettre à jour les valeurs disponibles dans un select
 * @param {string} selectId - ID du select
 * @param {Array} values - Nouvelles valeurs disponibles
 * @param {string} currentValue - Valeur actuelle à préserver si possible
 */
function updateSelectOptions(selectId, values, currentValue = null) {
  const select = document.getElementById(selectId);
  if (!select) return;
  
  const preserveValue = currentValue || select.value;
  
  // Clear and repopulate options
  select.innerHTML = '';
  values.forEach(val => {
    const option = document.createElement('option');
    option.value = val;
    option.textContent = val;
    select.appendChild(option);
  });
  
  // Restore value if still available, otherwise use first available
  if (values.includes(preserveValue)) {
    select.value = preserveValue;
  } else {
    select.value = values[0];
  }
}

/**
 * Applique des styles CSS à un élément de manière dynamique
 * @param {string} elementId - ID de l'élément
 * @param {Object} styles - Styles à appliquer
 * @param {boolean} resetFirst - Si true, remet à zéro les styles d'abord
 */
function applyDynamicStyles(elementId, styles, resetFirst = false) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  if (resetFirst) {
    // Reset specific styles
    Object.keys(styles).forEach(property => {
      const camelCaseProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      element.style[camelCaseProperty] = '';
    });
  }
  
  // Apply new styles
  Object.entries(styles).forEach(([property, value]) => {
    const camelCaseProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    element.style[camelCaseProperty] = value;
  });
}

// Export functions for use in other modules
window.DemoUtils = {
  highlightCSS,
  highlightHTML,
  initCodeModal,
  generateDemoCSS,
  generateDemoHTML,
  updateSelectOptions,
  applyDynamicStyles
};
