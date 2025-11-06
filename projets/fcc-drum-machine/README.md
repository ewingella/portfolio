# Drum Machine

> Projet de certification FreeCodeCamp - Front End Development Libraries

## 📋 Description

Machine à rythmes interactive permettant de jouer des sons de batterie en cliquant sur des pads ou en utilisant le clavier. Projet React utilisant l'API Audio du navigateur.

## 🎯 User Stories FreeCodeCamp

1. **User Story #1:** Je peux voir un élément conteneur avec `id="drum-machine"`
2. **User Story #2:** Dans `#drum-machine`, je peux voir un élément avec `id="display"`
3. **User Story #3:** Dans `#drum-machine`, je peux voir 9 éléments cliquables "drum pads" avec la classe `drum-pad`
4. **User Story #4:** Chaque `.drum-pad` contient un élément audio avec `src` pointant vers un clip audio
5. **User Story #5:** Chaque `.drum-pad` a un ID correspondant au texte de sa touche (Q, W, E, A, S, D, Z, X, C)
6. **User Story #6:** Chaque élément audio a la classe `clip` et un ID correspondant au texte de son parent `.drum-pad`
7. **User Story #7:** Quand je clique sur un `.drum-pad`, l'audio correspondant doit être joué
8. **User Story #8:** Quand j'appuie sur une touche du clavier, l'audio correspondant doit être joué
9. **User Story #9:** Quand un `.drum-pad` est activé, le nom du clip audio est affiché dans `#display`

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- React (optionnel)
- Web Audio API

## ✨ Fonctionnalités

- 9 pads de batterie interactifs
- Activation au clic ou au clavier (Q, W, E, A, S, D, Z, X, C)
- Affichage du nom du son joué
- Contrôle du volume
- Design responsive
- Effets visuels sur les pads

## 📚 Objectifs d'apprentissage

- Manipuler l'API Audio du navigateur
- Gérer les événements clavier et souris
- Créer une interface interactive avec React
- Synchroniser audio et interface utilisateur
- Implémenter un contrôle de volume

## 🚀 Prochaines étapes

Ce projet est actuellement **planifié**. 

### Développement :

1. Créer la structure HTML avec les 9 pads
2. Ajouter les fichiers audio
3. Implémenter la logique JavaScript pour la lecture
4. Gérer les événements clavier
5. Styliser l'interface
6. Ajouter le contrôle de volume
7. Tester avec la suite FreeCodeCamp

### Pour l'ajouter au portfolio :

1. Développer le projet complet
2. Mettre à jour le status dans `metadata.json` à "completed"
3. Ajouter le chemin dans `/assets/js/formation-projects.js`
4. Mettre à jour les statistiques dans `formations/freecodecamp.html`

## 📖 Ressources

- [FreeCodeCamp - Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- [MDN - Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [MDN - Audio Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [MDN - Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

## 🎵 Sons nécessaires

Pour ce projet, vous aurez besoin de 9 fichiers audio (format MP3 ou WAV) :
- Kick (Q)
- Snare (W)
- Hi-hat closed (E)
- Hi-hat open (A)
- Tom high (S)
- Tom mid (D)
- Tom low (Z)
- Crash (X)
- Ride (C)

---

**Projet créé dans le cadre de la certification Front End Development Libraries - FreeCodeCamp**
Date de création : 6 novembre 2025
