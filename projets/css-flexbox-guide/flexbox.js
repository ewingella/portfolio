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

    // Initialiser les démos interactives
    initFlexDirectionDemo();
    initJustifyContentDemo();
    initAlignItemsDemo();
    initFlexWrapDemo();
    initFlexGrowDemo();
    initAlignSelfDemo();
    initPlayground();
});

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
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    });
}

// Demo flex-wrap
function initFlexWrapDemo() {
    const select = document.getElementById('wrap-select');
    const demo = document.getElementById('wrap-demo');
    const code = document.getElementById('wrap-code');

    select.addEventListener('change', (e) => {
        const value = e.target.value;
        demo.style.flexWrap = value;
        
        code.innerHTML = `<pre><code class="language-css">.container {
  display: flex;
  flex-wrap: ${value};
}</code></pre>`;
        
        Prism.highlightElement(code.querySelector('code'));
    });
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
        
        code.innerHTML = `<pre><code class="language-css">.item1 { flex-grow: ${g1}; }
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
  align-items: flex-start;
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

    function updatePlayground() {
        const direction = pgDirection.value;
        const justify = pgJustify.value;
        const align = pgAlign.value;
        const wrap = pgWrap.value;
        const gap = pgGap.value;
        const itemCount = parseInt(pgItems.value);
        
        // Mettre à jour les valeurs affichées
        pgGapValue.textContent = gap + 'px';
        pgItemsValue.textContent = itemCount;
        
        // Appliquer les styles
        playgroundFlex.style.flexDirection = direction;
        playgroundFlex.style.justifyContent = justify;
        playgroundFlex.style.alignItems = align;
        playgroundFlex.style.flexWrap = wrap;
        playgroundFlex.style.gap = gap + 'px';
        
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
}`;
        
        // Re-highlight syntax
        Prism.highlightElement(playgroundCSS);
    }

    // Event listeners
    pgDirection.addEventListener('change', updatePlayground);
    pgJustify.addEventListener('change', updatePlayground);
    pgAlign.addEventListener('change', updatePlayground);
    pgWrap.addEventListener('change', updatePlayground);
    pgGap.addEventListener('input', updatePlayground);
    pgItems.addEventListener('input', updatePlayground);
    
    // Initialiser
    updatePlayground();
}

// Fonction pour copier le code dans le presse-papiers
function copyToClipboard() {
    const code = document.getElementById('playground-css').textContent;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            showCopyFeedback();
        });
    } else {
        // Fallback pour les anciens navigateurs
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopyFeedback();
    }
}

// Feedback visuel pour la copie
function showCopyFeedback() {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;
    
    btn.textContent = '✅ Copié !';
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
