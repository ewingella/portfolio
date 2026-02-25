/**
 * Formation Projects Manager
 * Gère l'affichage des projets regroupés par formation et module
 */

class FormationProjectsManager {
    constructor() {
        this.projects = [];
        this.formations = new Map();
    }

    /**
     * Charge tous les projets et leurs métadonnées
     */
    async loadProjects() {
        try {
            console.log('🔍 Détection du contexte...');
            const path = window.location.pathname;
            console.log('📍 Chemin actuel:', path);
            
            const isInFormations = path.includes('/formations/');
            const isInProjets = path.includes('/projets/');
            
            console.log('🏷️ Dans formations:', isInFormations);
            console.log('🏷️ Dans projets:', isInProjets);
            
            // Liste des projets à charger
            const projectPaths = [
                'projets/css-grid-guide/metadata.json',
                'projets/company-homepage-flexbox/metadata.json',
                'projets/responsive-website/metadata.json',
                'projets/number-guesser/metadata.json',
                'projets/piano-player/metadata.json',
                'projets/fcc-survey-form/metadata.json',
                'projets/fcc-bookmark-manager/metadata.json',
                'projets/fcc-sorting-visualizer/metadata.json',
                'projets/fcc-forum-leaderboard/metadata.json',
                'projets/fcc-weather-app/metadata.json',
                'projets/fcc-drum-machine/metadata.json'
            ];

            for (const projectPath of projectPaths) {
                try {
                    // Déterminer le chemin correct selon le contexte
                    let fullPath;
                    if (isInProjets) {
                        // Depuis projets/, enlever le préfixe 'projets/'
                        fullPath = projectPath.replace('projets/', '');
                    } else if (isInFormations) {
                        // Depuis formations/, remonter d'un niveau
                        fullPath = `../${projectPath}`;
                    } else {
                        // Depuis la racine
                        fullPath = projectPath;
                    }
                    
                    console.log(`📂 Chargement: ${fullPath}`);
                    const response = await fetch(fullPath);
                    console.log(`📡 Status: ${response.status} pour ${fullPath}`);
                    
                    if (response.ok) {
                        const metadata = await response.json();
                        
                        // Stocker les chemins corrects
                        metadata.originalPath = projectPath;
                        metadata.path = projectPath.replace('/metadata.json', '');
                        
                        // Déterminer le basePath pour les liens
                        if (isInProjets) {
                            metadata.basePath = '../';  // Pour remonter vers la racine
                        } else if (isInFormations) {
                            metadata.basePath = '../';
                        } else {
                            metadata.basePath = '';
                        }
                        
                        this.projects.push(metadata);
                        console.log(`✅ Projet ajouté: ${metadata.title}`);
                    } else {
                        console.warn(`❌ Échec du chargement: ${fullPath} (${response.status})`);
                    }
                } catch (error) {
                    console.error(`❌ Erreur pour ${projectPath}:`, error);
                }
            }

            console.log(`📊 Total projets chargés: ${this.projects.length}`);
            this.organizeByFormation();
            console.log(`📚 Formations organisées: ${this.formations.size}`);
            
        } catch (error) {
            console.error('❌ Erreur globale lors du chargement:', error);
        }
    }

    /**
     * Organise les projets par formation et module
     */
    organizeByFormation() {
        this.projects.forEach(project => {
            const formationKey = project.formation;
            
            if (!this.formations.has(formationKey)) {
                this.formations.set(formationKey, {
                    name: project.formationName,
                    key: formationKey,
                    modules: new Map()
                });
            }

            const formation = this.formations.get(formationKey);
            const moduleKey = project.module;

            if (!formation.modules.has(moduleKey)) {
                formation.modules.set(moduleKey, {
                    name: moduleKey,
                    order: project.moduleOrder || 0,
                    projects: []
                });
            }

            formation.modules.get(moduleKey).projects.push(project);
        });

        // Trier les modules par ordre
        this.formations.forEach(formation => {
            const sortedModules = new Map([...formation.modules.entries()].sort((a, b) => a[1].order - b[1].order));
            formation.modules = sortedModules;
        });
    }

    /**
     * Génère le HTML pour une formation donnée
     */
    generateFormationHTML(formationKey) {
        const formation = this.formations.get(formationKey);
        if (!formation) return '';

        let html = '';

        formation.modules.forEach(module => {
            html += this.generateModuleHTML(module);
        });

        return html;
    }

    /**
     * Génère le HTML pour un module
     */
    generateModuleHTML(module) {
        let html = `
            <div class="module-section">
                <h3>${module.name}</h3>
                <div class="projects-grid">
        `;

        // Trier les projets par statut (completed → in-progress → planned)
        const statusOrder = { 'completed': 1, 'in-progress': 2, 'planned': 3 };
        const sortedProjects = module.projects.sort((a, b) => {
            const statusDiff = (statusOrder[a.status] || 999) - (statusOrder[b.status] || 999);
            if (statusDiff !== 0) return statusDiff;
            return (a.projectOrder || 0) - (b.projectOrder || 0);
        });

        sortedProjects.forEach(project => {
            html += this.generateProjectCard(project);
        });

        html += `
                </div>
            </div>
        `;

        return html;
    }

    /**
     * Génère une carte de projet - Structure identique à projets/index.html
     */
    generateProjectCard(project) {
        const statusClass = project.status === 'completed' ? '' : project.status;
        const formationClass = project.formation === 'personal' ? 'personal' : '';
        
        // Générer le chemin complet vers le projet pour l'iframe
        const projectUrl = `${project.basePath}${project.path}/${project.demoUrl}`;
        
        return `
            <article class="project-card featured">
                <div class="project-image">
                    <div class="project-preview real-site-preview screenshot-preview">
                        <div class="site-screenshot">
                            <iframe 
                                src="${projectUrl}" 
                                title="${project.title}"
                                loading="lazy"
                                class="screenshot-iframe">
                            </iframe>
                        </div>
                    </div>
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${projectUrl}" class="btn btn-primary">🚀 Voir le projet</a>
                            <a href="${project.basePath}${project.path}/README.md" class="btn btn-secondary">📖 Documentation</a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-badges">
                            <span class="project-status ${statusClass}">${this.getStatusLabel(project.status)}</span>
                            <span class="formation-badge ${formationClass}">${project.formationName}</span>
                        </div>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * Utilitaires
     */
    getTotalProjects(formation) {
        let total = 0;
        formation.modules.forEach(module => {
            total += module.projects.length;
        });
        return total;
    }

    getStatusIcon(status) {
        const icons = {
            'completed': '✅',
            'in-progress': '🔄',
            'planned': '📋',
            'archived': '📦'
        };
        return icons[status] || '📋';
    }

    getStatusLabel(status) {
        const labels = {
            'completed': 'Terminé',
            'in-progress': 'En cours',
            'planned': 'Planifié',
            'archived': 'Archivé'
        };
        return labels[status] || 'À définir';
    }

    getDifficultyLabel(difficulty) {
        const labels = {
            'beginner': 'Débutant',
            'intermediate': 'Intermédiaire',
            'advanced': 'Avancé'
        };
        return labels[difficulty] || 'Non défini';
    }

    /**
     * Initialise l'affichage pour une formation spécifique
     */
    async init(formationKey, containerId) {
        await this.loadProjects();
        console.log('🔍 Formation recherchée:', formationKey);
        console.log('📚 Formations disponibles:', Array.from(this.formations.keys()));
        
        const formation = this.formations.get(formationKey);
        console.log('🎓 Formation trouvée:', formation);
        
        const container = document.getElementById(containerId);
        if (container) {
            const html = this.generateFormationHTML(formationKey);
            console.log('📝 HTML généré:', html.length > 0 ? `${html.length} caractères` : 'VIDE');
            console.log('📄 Aperçu HTML:', html.substring(0, 500));
            container.innerHTML = html;
            container.classList.remove('loading'); // Retirer la classe loading
            console.log('✅ Container mis à jour');
        } else {
            console.error('❌ Container non trouvé:', containerId);
        }
    }
}

// Instance globale
window.FormationProjectsManager = FormationProjectsManager;
