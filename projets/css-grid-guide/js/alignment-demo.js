// Démo interactive d'alignement CSS Grid
// Utilise les utilitaires réutilisables de demo-utils.js

function generateCSS(property, value) {
  const config = {
    selector: '.demo-grid',
    baseStyles: {
      'display': 'grid',
      'grid-template-columns': 'repeat(2, 80px)',
      'grid-template-rows': 'repeat(2, 60px)',
      'gap': '8px',
      'border': '2px dashed #2563eb',
      'background': '#f8fafc',
      'padding': '20px',
      'min-height': '200px',
      'min-width': '240px'
    },
    activeProperty: property,
    activeValue: value,
    additionalStyles: {
      '.demo-item': {
        'background': '#e2e8f0',
        'border': '2px solid #64748b',
        'border-radius': '6px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-weight': 'bold',
        'font-size': '16px',
        'color': '#1e293b'
      }
    }
  };

  return window.DemoUtils.generateDemoCSS(config);
}

function generateHTML() {
  const config = {
    containerClass: 'demo-grid',
    containerId: 'interactive-grid',
    items: ['A', 'B', 'C', 'D'],
    itemClass: 'demo-item'
  };

  return window.DemoUtils.generateDemoHTML(config);
}

function updateDemo() {
  const grid = document.getElementById('interactive-grid');
  const propertyDisplay = document.getElementById('property-display');
  const explanation = document.getElementById('explanation');
  const valueSelect = document.getElementById('value-select');
  
  if (!grid || !propertyDisplay || !explanation || !valueSelect) return;

  const explanations = {
    'justify-items': 'Position des éléments horizontalement dans leurs cellules',
    'align-items': 'Position des éléments verticalement dans leurs cellules',
    'justify-content': 'Distribution horizontale de la grille dans son container',
    'align-content': 'Distribution verticale de la grille dans son container'
  };

  const axis = document.querySelector('input[name="axis"]:checked')?.value || 'justify';
  const target = document.querySelector('input[name="target"]:checked')?.value || 'items';
  const value = valueSelect.value;
  
  const property = `${axis}-${target}`;
  
  // Reset all alignment styles
  const resetStyles = {
    'justify-items': '',
    'align-items': '',
    'justify-content': '',
    'align-content': ''
  };
  window.DemoUtils.applyDynamicStyles('interactive-grid', resetStyles);
  
  // Apply the selected style
  const activeStyles = { [property]: value };
  window.DemoUtils.applyDynamicStyles('interactive-grid', activeStyles);
  
  // Update display
  propertyDisplay.textContent = `${property}: ${value}`;
  explanation.textContent = explanations[property] || 'Propriété d\'alignement CSS Grid';
  
  // Update dynamic code if modal is open
  updateDynamicCode(property, value);
  
  // Update available values based on target
  updateAvailableValues(target);
}

function updateDynamicCode(property, value) {
  const cssCodeElement = document.getElementById('dynamic-css-code');
  const htmlCodeElement = document.getElementById('dynamic-html-code');
  
  if (cssCodeElement) {
    cssCodeElement.innerHTML = generateCSS(property, value);
  }
  if (htmlCodeElement) {
    htmlCodeElement.innerHTML = generateHTML();
  }
}

function updateAvailableValues(target) {
  const itemsValues = ['start', 'center', 'end', 'stretch'];
  const contentValues = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'];
  
  const availableValues = target === 'items' ? itemsValues : contentValues;
  window.DemoUtils.updateSelectOptions('value-select', availableValues);
}

function initInteractiveDemo() {
  const grid = document.getElementById('interactive-grid');
  if (!grid) return; // Not an alignment demo page
  
  // Event listeners
  document.querySelectorAll('input[name="axis"], input[name="target"]').forEach(input => {
    input.addEventListener('change', updateDemo);
  });
  
  const valueSelect = document.getElementById('value-select');
  if (valueSelect) {
    valueSelect.addEventListener('change', updateDemo);
  }
  
  // Initialize
  updateDemo();
  
  // Initialize code modal using the reusable utility
  window.DemoUtils.initCodeModal({
    showBtnId: 'show-code-btn',
    modalId: 'code-modal',
    closeBtnId: 'close-modal-btn',
    updateCallback: updateDemo
  });
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initInteractiveDemo();
});
