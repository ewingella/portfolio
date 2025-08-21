// Portfolio JavaScript - Interactions et animations
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupSmoothScroll();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.setupAnimations();
    }

    // Configuration de la navigation
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mise en évidence du lien actif
        const updateActiveLink = () => {
            const scrollPosition = window.scrollY + 100;
            
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            });
        };

        // Effet de scroll sur la navbar
        const handleNavbarScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', () => {
            updateActiveLink();
            handleNavbarScroll();
        });

        // Style initial
        updateActiveLink();
    }

    // Défilement fluide
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Menu mobile
    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            // Fermer le menu lors du clic sur un lien
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });

            // Fermer le menu lors du clic en dehors
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }

    // Effets de scroll
    setupScrollEffects() {
        // Parallax léger sur le hero
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (hero && heroContent) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                heroContent.style.transform = `translateY(${rate}px)`;
            });
        }

        // Animation des cartes au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        const animatedElements = document.querySelectorAll(
            '.skill-card, .project-card, .contact-item, .hero-text, .hero-visual'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Gestion du formulaire de contact
    setupFormHandling() {
        const form = document.querySelector('.form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(form);
            });
        }
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validation simple
        if (!data.name || !data.email || !data.message) {
            this.showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }

        if (!this.isValidEmail(data.email)) {
            this.showNotification('Veuillez entrer un email valide', 'error');
            return;
        }

        // Simulation d'envoi (remplacer par votre logique d'envoi)
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;

        setTimeout(() => {
            this.showNotification('Message envoyé avec succès !', 'success');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Créer la notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Ajouter les styles si pas encore présents
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    max-width: 400px;
                    padding: 16px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 1001;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .notification.show {
                    transform: translateX(0);
                }
                .notification-success {
                    background: #10b981;
                    color: white;
                }
                .notification-error {
                    background: #ef4444;
                    color: white;
                }
                .notification-info {
                    background: #3b82f6;
                    color: white;
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .notification-message {
                    flex: 1;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: inherit;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `;
            document.head.appendChild(styles);
        }

        // Ajouter au DOM
        document.body.appendChild(notification);

        // Animer l'entrée
        setTimeout(() => notification.classList.add('show'), 100);

        // Gérer la fermeture
        const closeBtn = notification.querySelector('.notification-close');
        const closeNotification = () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };

        closeBtn.addEventListener('click', closeNotification);

        // Auto-fermeture après 5 secondes
        setTimeout(closeNotification, 5000);
    }

    // Configuration des animations
    setupAnimations() {
        // Styles d'animation
        const animationStyles = document.createElement('style');
        animationStyles.textContent = `
            .skill-card,
            .project-card,
            .contact-item,
            .hero-text,
            .hero-visual {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .skill-card.animate-in,
            .project-card.animate-in,
            .contact-item.animate-in,
            .hero-text.animate-in,
            .hero-visual.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
            }
            
            .nav-link.active {
                color: var(--primary);
            }
            
            @media (max-width: 768px) {
                .nav-menu {
                    position: fixed;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .nav-toggle.active .bar:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .nav-toggle.active .bar:nth-child(2) {
                    opacity: 0;
                }
                
                .nav-toggle.active .bar:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
                
                body.menu-open {
                    overflow: hidden;
                }
            }
            
            .project-card:hover .project-image {
                transform: scale(1.05);
            }
            
            .project-image {
                transition: transform 0.3s ease;
            }
        `;
        
        document.head.appendChild(animationStyles);
    }

    // Méthode utilitaire pour déboguer
    debug(message, data = null) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log(`[Portfolio Debug] ${message}`, data);
        }
    }
}

// Initialisation lors du chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new Portfolio();
    
    // Exposer l'instance globalement pour le débogage
    window.portfolio = portfolio;
});

// Gestion des erreurs
window.addEventListener('error', (e) => {
    console.error('Erreur Portfolio:', e.error);
});

// Performance: Préchargement des images importantes
document.addEventListener('DOMContentLoaded', () => {
    const criticalImages = [
        // Ajouter ici les URLs des images critiques à précharger
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
