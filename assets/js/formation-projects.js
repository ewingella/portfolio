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
                'projets/fcc-survey-form/metadata.json'
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

        let html = `
            <div class="formation-projects">
                <div class="formation-header">
                    <h2 class="formation-title">${formation.name}</h2>
                    <div class="formation-stats">
                        <span class="stat">
                            <strong>${formation.modules.size}</strong> modules
                        </span>
                        <span class="stat">
                            <strong>${this.getTotalProjects(formation)}</strong> projets
                        </span>
                    </div>
                </div>
        `;

        formation.modules.forEach(module => {
            html += this.generateModuleHTML(module);
        });

        html += '</div>';
        return html;
    }

    /**
     * Génère le HTML pour un module
     */
    generateModuleHTML(module) {
        let html = `
            <div class="module-section">
                <div class="module-header">
                    <h3 class="module-title">📚 ${module.name}</h3>
                    <span class="module-count">${module.projects.length} projet${module.projects.length > 1 ? 's' : ''}</span>
                </div>
                <div class="module-projects">
        `;

        // Trier les projets par ordre s'il existe
        const sortedProjects = module.projects.sort((a, b) => (a.projectOrder || 0) - (b.projectOrder || 0));

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
     * Génère une carte de projet
     */
    generateProjectCard(project) {
        const statusIcon = this.getStatusIcon(project.status);
        const difficultyClass = `difficulty-${project.difficulty}`;
        
        return `
            <div class="project-card ${difficultyClass}">
                <div class="project-header">
                    <h4 class="project-title">${statusIcon} ${project.title}</h4>
                    <div class="project-meta">
                        <span class="project-difficulty">${this.getDifficultyLabel(project.difficulty)}</span>
                        <span class="project-status">${this.getStatusLabel(project.status)}</span>
                    </div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <div class="project-features">
                    <strong>Fonctionnalités :</strong>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-objectives">
                    <strong>Objectifs d'apprentissage :</strong>
                    <ul>
                        ${project.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-actions">
                    <a href="${project.basePath}${project.path}/${project.demoUrl}" class="btn-project btn-primary">
                        🚀 Voir le projet
                    </a>
                    <a href="${project.basePath}${project.path}/README.md" class="btn-project btn-secondary">
                        📖 Documentation
                    </a>
                </div>
            </div>
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
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.generateFormationHTML(formationKey);
        }
    }
}

// Instance globale
window.FormationProjectsManager = FormationProjectsManager;
