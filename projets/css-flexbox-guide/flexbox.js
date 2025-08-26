// Système de tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Désactiver tous les tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Activer le tab sélectionné
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Initialiser le système de boutons de code
    initCodeButtons();

    // Initialiser les démos interactives
    initFlexDirectionDemo();
    initJustifyContentDemo();
    initAlignItemsDemo();
    initFlexWrapDemo();
    initFlexGrowDemo();
    initAlignSelfDemo();
    initPlayground();
});

// Système de boutons pour afficher CSS/HTML
function initCodeButtons() {
    const codeButtons = document.querySelectorAll('.code-btn');
    
    codeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeType = this.getAttribute('data-code');
            const codeSection = this.closest('.code-section');
            
            // Retirer active de tous les boutons dans cette section
            codeSection.querySelectorAll('.code-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Retirer active de tous les displays dans cette section
            codeSection.querySelectorAll('.code-display').forEach(display => {
                display.classList.remove('active');
            });
            
            // Activer le bouton cliqué
            this.classList.add('active');
            
            // Activer le display correspondant
            const targetDisplay = codeSection.querySelector(`.${codeType}-code`);
            if (targetDisplay) {
                targetDisplay.classList.add('active');
            }

            // Mettre à jour le texte du bouton de copie dans le playground
            const playgroundSection = codeSection.closest('.playground-code');
            if (playgroundSection) {
                const copyBtn = playgroundSection.querySelector('.copy-btn');
                if (copyBtn && !copyBtn.textContent.includes('✅')) {
                    copyBtn.textContent = `📋 Copier le ${codeType.toUpperCase()}`;
                }
            }
        });
    });
}

// Demo flex-direction
function initFlexDirectionDemo() {
    const select = document.getElementById('direction-select');
    const demo = document.getElementById('direction-demo');
    const code = document.getElementById('direction-code');

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        demo.style.flexDirection = value;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  flex-direction: ${value};
}</code></pre>`;
        
        // Re-highlight syntax
        Prism.highlightElement(code.querySelector('code'));
    });
}

// Demo justify-content
function initJustifyContentDemo() {
    const select = document.getElementById('justify-select');
    const demo = document.getElementById('justify-demo');
    const code = document.getElementById('justify-code');

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        demo.style.justifyContent = value;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  justify-content: ${value};
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    });
}

// Demo align-items
function initAlignItemsDemo() {
    const select = document.getElementById('align-select');
    const demo = document.getElementById('align-demo');
    const code = document.getElementById('align-code');

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        demo.style.alignItems = value;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  align-items: ${value};
  min-height: 150px;
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    });
}

// Demo flex-wrap
function initFlexWrapDemo() {
    const select = document.getElementById('wrap-select');
    const demo = document.getElementById('wrap-demo');
    const code = document.getElementById('wrap-code');
    const sizeRadios = document.querySelectorAll('input[name="container-size"]');

    // Initialiser avec la taille par défaut
    demo.classList.add('container-small');

    function updateWrapDemo() {
        const wrapValue = select.value;
        const checkedSize = document.querySelector('input[name="container-size"]:checked');
        const sizeValue = checkedSize ? checkedSize.value : 'small';
        
        // Mettre à jour le style flex-wrap
        demo.style.flexWrap = wrapValue;
        
        // Mettre à jour la classe de taille
        demo.classList.remove('container-small', 'container-medium', 'container-large');
        demo.classList.add(`container-${sizeValue}`);
        
        // Déterminer la largeur pour le code et l'affichage
        const widthMap = {
            'small': '300px',
            'medium': '500px',
            'large': '700px'
        };
        
        const width = widthMap[sizeValue];
        
        // Afficher la largeur sur le conteneur
        demo.setAttribute('data-width', width);
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  flex-wrap: ${wrapValue};
  max-width: ${width};
  border: 2px dashed #4a90e2;
}

.item {
  min-width: 120px;
  padding: 1rem;
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    }

    select.addEventListener('change', updateWrapDemo);
    
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', updateWrapDemo);
    });
    
    // Initialiser
    updateWrapDemo();
}

// Demo flex-grow
function initFlexGrowDemo() {
    const grow1 = document.getElementById('grow1');
    const grow2 = document.getElementById('grow2');
    const grow3 = document.getElementById('grow3');
    const value1 = document.getElementById('grow1-value');
    const value2 = document.getElementById('grow2-value');
    const value3 = document.getElementById('grow3-value');
    const item1 = document.getElementById('grow-item1');
    const item2 = document.getElementById('grow-item2');
    const item3 = document.getElementById('grow-item3');
    const code = document.getElementById('grow-code');

    function updateFlexGrow() {
        const g1 = grow1.value;
        const g2 = grow2.value;
        const g3 = grow3.value;
        
        value1.textContent = g1;
        value2.textContent = g2;
        value3.textContent = g3;
        
        item1.style.flexGrow = g1;
        item2.style.flexGrow = g2;
        item3.style.flexGrow = g3;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
}

.item1 { flex-grow: ${g1}; }
.item2 { flex-grow: ${g2}; }
.item3 { flex-grow: ${g3}; }</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    }

    grow1.addEventListener('input', updateFlexGrow);
    grow2.addEventListener('input', updateFlexGrow);
    grow3.addEventListener('input', updateFlexGrow);
    
    // Initialiser
    updateFlexGrow();
}

// Demo align-self
function initAlignSelfDemo() {
    const select = document.getElementById('self-select');
    const demo = document.getElementById('self-demo');
    const item = document.getElementById('self-item');
    const code = document.getElementById('self-code');

    // Définir l'alignement du conteneur
    demo.style.alignItems = 'flex-start';

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        item.style.alignSelf = value;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  align-items: flex-start;
  min-height: 150px;
}

.special-item {
  align-self: ${value};
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    });
}

// Playground
function initPlayground() {
    const pgDirection = document.getElementById('pg-direction');
    const pgJustify = document.getElementById('pg-justify');
    const pgAlign = document.getElementById('pg-align');
    const pgWrap = document.getElementById('pg-wrap');
    const pgGap = document.getElementById('pg-gap');
    const pgItems = document.getElementById('pg-items');
    const pgGapValue = document.getElementById('pg-gap-value');
    const pgItemsValue = document.getElementById('pg-items-value');
    const playgroundFlex = document.getElementById('playground-flex');
    const playgroundCSS = document.getElementById('playground-css');
    const pgSizeRadios = document.querySelectorAll('input[name="pg-container-size"]');

    function updatePlayground() {
        const direction = pgDirection.value;
        const justify = pgJustify.value;
        const align = pgAlign.value;
        const wrap = pgWrap.value;
        const gap = pgGap.value;
        const itemCount = parseInt(pgItems.value);
        
        // Gérer la taille du conteneur
        const checkedSize = document.querySelector('input[name="pg-container-size"]:checked');
        const sizeValue = checkedSize ? checkedSize.value : 'medium';
        
        // Mettre à jour les valeurs affichées
        pgGapValue.textContent = gap + 'px';
        pgItemsValue.textContent = itemCount;
        
        // Appliquer les styles
        playgroundFlex.style.flexDirection = direction;
        playgroundFlex.style.justifyContent = justify;
        playgroundFlex.style.alignItems = align;
        playgroundFlex.style.flexWrap = wrap;
        playgroundFlex.style.gap = gap + 'px';
        
        // Appliquer la taille du conteneur
        playgroundFlex.classList.remove('container-small', 'container-medium', 'container-large');
        playgroundFlex.classList.add(`container-${sizeValue}`);
        
        // Déterminer la largeur pour le code et l'affichage
        const widthMap = {
            'small': '300px',
            'medium': '500px',
            'large': '700px'
        };
        
        const width = widthMap[sizeValue];
        playgroundFlex.setAttribute('data-width', width);
        
        // Gérer le nombre d'items
        const currentItems = playgroundFlex.children.length;
        
        if (itemCount > currentItems) {
            // Ajouter des items
            for (let i = currentItems; i < itemCount; i++) {
                const item = document.createElement('div');
                item.className = 'flex-item';
                item.textContent = i + 1;
                playgroundFlex.appendChild(item);
            }
        } else if (itemCount < currentItems) {
            // Supprimer des items
            for (let i = currentItems; i > itemCount; i--) {
                playgroundFlex.removeChild(playgroundFlex.lastChild);
            }
        }
        
        // Mettre à jour le code CSS
        playgroundCSS.textContent = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap}px;
  max-width: ${width};
  border: 2px dashed #4a90e2;
}`;
        
        // Mettre à jour le code HTML
        const playgroundHTML = document.getElementById('playground-html');
        let htmlItems = '';
        for (let i = 1; i <= itemCount; i++) {
            htmlItems += `  <div class="item">${i}</div>\n`;
        }
        
        playgroundHTML.textContent = `<div class="container">
${htmlItems}</div>`;
        
        // Re-highlight syntax
        Prism.highlightElement(playgroundCSS);
        Prism.highlightElement(playgroundHTML);
    }

    // Event listeners
    pgDirection.addEventListener('change', updatePlayground);
    pgJustify.addEventListener('change', updatePlayground);
    pgAlign.addEventListener('change', updatePlayground);
    pgWrap.addEventListener('change', updatePlayground);
    pgGap.addEventListener('input', updatePlayground);
    pgItems.addEventListener('input', updatePlayground);
    
    // Event listeners pour les boutons radio de taille
    pgSizeRadios.forEach(radio => {
        radio.addEventListener('change', updatePlayground);
    });
    
    // Initialiser
    updatePlayground();
}

// Fonction pour copier le code dans le presse-papiers
function copyToClipboard() {
    // Déterminer quel code est affiché dans le playground
    const playgroundSection = document.querySelector('.playground-code .code-section');
    const activeButton = playgroundSection.querySelector('.code-btn.active');
    const codeType = activeButton.getAttribute('data-code');
    
    let code;
    if (codeType === 'css') {
        code = document.getElementById('playground-css').textContent;
    } else {
        code = document.getElementById('playground-html').textContent;
    }
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            showCopyFeedback(codeType);
        });
    } else {
        // Fallback pour les anciens navigateurs
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyFeedback(codeType);
    }
}

// Feedback visuel pour la copie
function showCopyFeedback(codeType = 'CSS') {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;
    
    btn.textContent = `✅ ${codeType.toUpperCase()} copié !`;
    btn.style.background = 'var(--success)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'var(--primary)';
    }, 2000);
}

// Animation d'entrée pour les éléments
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.property-demo, .layout-example').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialiser les animations au scroll
document.addEventListener('DOMContentLoaded', animateOnScroll);
