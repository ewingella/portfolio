// Démo interactive pour auto-flow-column
// Utilise les utilitaires réutilisables de demo-utils.js

function generateAutoFlowCSS(flow) {
  const isColumn = flow === 'column';
  
  const config = {
    selector: '.demo-auto-flow',
    baseStyles: {
      'display': 'grid',
      'gap': '12px',
      'border': '2px dashed #7c3aed',
      'background': '#faf5ff',
      'padding': '20px',
      'min-height': '300px',
      'min-width': '400px'
    },
    activeProperty: 'grid-auto-flow',
    activeValue: flow,
    additionalStyles: {
      '.auto-flow-item': {
        'background': '#e879f9',
        'border': '2px solid #a21caf',
        'border-radius': '6px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-weight': 'bold',
        'font-size': '16px',
        'color': 'white',
        'min-height': '60px',
        'min-width': '80px'
      }
    }
  };

  // Adjust base styles based on flow direction
  if (isColumn) {
    config.baseStyles['grid-template-rows'] = 'repeat(3, 80px)';
    config.baseStyles['grid-auto-columns'] = '120px';
  } else {
    config.baseStyles['grid-template-columns'] = 'repeat(3, 120px)';
    config.baseStyles['grid-auto-rows'] = '80px';
  }

  return window.DemoUtils.generateDemoCSS(config);
}

function generateAutoFlowHTML() {
  const config = {
    containerClass: 'demo-auto-flow',
    containerId: 'auto-flow-grid',
    items: [
      '1', '2', 
      { content: '3', class: 'span-item' },
      '4', '5', '6'
    ],
    itemClass: 'auto-flow-item'
  };

  return window.DemoUtils.generateDemoHTML(config);
}

function updateAutoFlowDemo() {
  const flowSelect = document.getElementById('auto-flow-select');
  const grid = document.getElementById('auto-flow-grid');
  const propertyDisplay = document.getElementById('auto-flow-property');
  const explanation = document.getElementById('auto-flow-explanation');
  
  if (!flowSelect || !grid || !propertyDisplay || !explanation) return;

  const flow = flowSelect.value;
  const isColumn = flow === 'column';
  
  // Reset and apply styles
  const resetStyles = {
    'grid-template-columns': '',
    'grid-template-rows': '',
    'grid-auto-columns': '',
    'grid-auto-rows': '',
    'grid-auto-flow': ''
  };
  window.DemoUtils.applyDynamicStyles('auto-flow-grid', resetStyles);
  
  const newStyles = {
    'grid-auto-flow': flow
  };
  
  if (isColumn) {
    newStyles['grid-template-rows'] = 'repeat(3, 80px)';
    newStyles['grid-auto-columns'] = '120px';
  } else {
    newStyles['grid-template-columns'] = 'repeat(3, 120px)';
    newStyles['grid-auto-rows'] = '80px';
  }
  
  window.DemoUtils.applyDynamicStyles('auto-flow-grid', newStyles);
  
  // Update displays
  propertyDisplay.textContent = `grid-auto-flow: ${flow}`;
  
  const explanations = {
    'row': 'Placement horizontal (gauche → droite), puis ligne suivante. Crée des lignes implicites.',
    'column': 'Placement vertical (haut → bas), puis colonne suivante. Crée des colonnes implicites.'
  };
  
  explanation.textContent = explanations[flow] || 'Mode de placement automatique des éléments de grille.';
  
  // Update dynamic code
  updateAutoFlowCode(flow);
}

function updateAutoFlowCode(flow) {
  const cssCodeElement = document.getElementById('dynamic-auto-flow-css');
  const htmlCodeElement = document.getElementById('dynamic-auto-flow-html');
  
  if (cssCodeElement) {
    cssCodeElement.innerHTML = generateAutoFlowCSS(flow);
  }
  if (htmlCodeElement) {
    htmlCodeElement.innerHTML = generateAutoFlowHTML();
  }
}

function initAutoFlowDemo() {
  const flowSelect = document.getElementById('auto-flow-select');
  const grid = document.getElementById('auto-flow-grid');
  
  // Only initialize if we're on a page with auto-flow demo
  if (!flowSelect || !grid) return;
  
  // Event listeners
  flowSelect.addEventListener('change', updateAutoFlowDemo);
  
  // Initialize
  updateAutoFlowDemo();
  
  // Initialize code modal if present
  window.DemoUtils.initCodeModal({
    showBtnId: 'show-auto-flow-code-btn',
    modalId: 'auto-flow-code-modal',
    closeBtnId: 'close-auto-flow-modal-btn',
    updateCallback: updateAutoFlowDemo
  });
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAutoFlowDemo();
});
