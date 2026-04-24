# TP Hooks Avances React ✨

Petit projet React debutant pour pratiquer plusieurs hooks avec une interface coloree, animee et facile a explorer.

## Apercu

L'application affiche plusieurs mini-demonstrations :

- 🧮 `useReducer` avec un compteur
- 🎯 `useRef` pour mettre le focus sur un champ texte
- 🔁 `useRef` + `useEffect` pour compter les rendus
- 📰 `useFetch` pour charger des articles depuis une API
- ⏱️ `useEffect` avec nettoyage pour un timer

## Lancer le projet

Installe les dependances puis demarre le serveur de developpement :

```bash
npm install
npm start
```

L'application sera visible sur `http://localhost:3000`.

## Scripts utiles

- `npm start` : lance le projet en mode developpement
- `npm test` : ouvre les tests en mode interactif
- `npm run build` : genere une version de production

## Structure principale

- `src/App.js` : assemble toutes les demos de hooks
- `src/Compteur.js` : compteur avec reducer
- `src/FocusInput.js` : focus programmatique sur un input
- `src/CompteurRendu.js` : compteur de rendus du composant
- `src/useFetch.js` : hook personnalise pour recuperer des donnees
- `src/ListeArticles.js` : affichage des articles recuperes
- `src/Timer.js` : timer avec nettoyage d'intervalle

## Objectif pedagogique

Ce TP aide a comprendre :

- comment centraliser des mises a jour d'etat avec un reducer
- comment acceder directement a un element du DOM avec une ref
- comment memoriser une valeur entre les rendus sans re-render
- comment reutiliser une logique d'appel API dans un hook personnalise
- comment nettoyer proprement un effet React

## Style ajoute

L'interface a ete personnalisee avec :

- un hero colore
- des cartes avec animation d'apparition
- des boutons vifs et interactifs
- des emojis pour rendre le TP plus visuel

## Démonstration vidéo :



https://github.com/user-attachments/assets/3c598f58-37d6-46c7-85b2-177c9f63767b


