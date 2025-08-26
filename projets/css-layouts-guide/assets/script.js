// JavaScript principal pour CSS Layouts Guide
document.addEventListener('DOMContentLoaded', function() {
    console.log('CSS Layouts Guide - Page d\'accueil chargée');
    
    // Initialisation des animations
    initAnimations();
    
    // Gestion des interactions
    initInteractions();
    
    // Analytics et tracking
    initTracking();
});

/**
 * Initialise les animations au scroll
 */
function initAnimations() {
    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const animatedElements = document.querySelectorAll('.guide-card, .feature-card, .comparison-table');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Initialise les interactions utilisateur
 */
function initInteractions() {
    // Effet hover sur les cartes de guides
    const guideCards = document.querySelectorAll('.guide-card');
    guideCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
    });
    
    // Animation des icônes au hover
    const featureIcons = document.querySelectorAll('.feature-icon');
    featureIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Gestion du bouton retour
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Animation de sortie avant navigation
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                window.location.href = backBtn.href;
            }, 200);
        });
    }
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialise le tracking des interactions
 */
function initTracking() {
    // Track des clics sur les boutons de guides
    const guideButtons = document.querySelectorAll('.card-btn');
    guideButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const guideName = btn.closest('.guide-card').querySelector('.card-title').textContent;
            console.log(`Navigation vers: ${guideName}`);
            
            // Ici on pourrait ajouter Google Analytics ou autre
            // gtag('event', 'guide_click', {
            //     guide_name: guideName
            // });
        });
    });
    
    // Track du temps passé sur la page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        console.log(`Temps passé sur la page: ${timeSpent}s`);
    });
}

/**
 * Utilitaires pour les animations des démos
 */
class DemoAnimations {
    static animateFlexboxDemo() {
        const flexItems = document.querySelectorAll('.flexbox-demo .demo-item');
        flexItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }
    
    static animateGridDemo() {
        const gridItems = document.querySelectorAll('.grid-demo .demo-item');
        const animationOrder = ['header', 'nav', 'main', 'aside', 'footer'];
        
        animationOrder.forEach((area, index) => {
            setTimeout(() => {
                const item = document.querySelector(`.demo-item.${area}`);
                if (item) {
                    item.style.backgroundColor = '#3498db';
                    setTimeout(() => {
                        item.style.backgroundColor = '';
                    }, 300);
                }
            }, index * 150);
        });
    }
}

// Démarrer les animations des démos toutes les 5 secondes
setInterval(() => {
    DemoAnimations.animateFlexboxDemo();
    setTimeout(() => {
        DemoAnimations.animateGridDemo();
    }, 2500);
}, 10000);

/**
 * Gestion responsive et optimisations
 */
function handleResize() {
    // Optimisations pour mobile
    if (window.innerWidth < 768) {
        // Réduire les animations sur mobile
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
        document.documentElement.style.setProperty('--animation-duration', '0.6s');
    }
}

window.addEventListener('resize', handleResize);
handleResize(); // Appel initial

/**
 * Preloader simple
 */
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(74, 144, 226, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(10px);
        ">
            <div style="
                color: white;
                font-size: 1.2rem;
                text-align: center;
            ">
                <i class="fas fa-code" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                Chargement du guide CSS...
            </div>
        </div>
    `;
    document.body.appendChild(preloader);
    
    // Cacher le preloader après le chargement
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 300);
        }, 500);
    });
}

// Afficher le preloader si la page met du temps à charger
if (document.readyState === 'loading') {
    showPreloader();
}

/**
 * Easter egg - animation spéciale
 */
let clickCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-icon')) {
        clickCount++;
        if (clickCount === 5) {
            // Animation spéciale après 5 clics sur les icônes
            const allIcons = document.querySelectorAll('.card-icon, .feature-icon i');
            allIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.animation = 'spin 0.5s ease-in-out';
                    setTimeout(() => {
                        icon.style.animation = '';
                    }, 500);
                }, index * 100);
            });
            clickCount = 0;
        }
    }
});

// Styles pour l'animation de rotation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        to { transform: rotate(360deg) scale(1); }
    }
`;
document.head.appendChild(style);
