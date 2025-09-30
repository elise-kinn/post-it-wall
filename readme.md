# Documentation de déploiement

## Infrastructures
- BDD : MongoDB

## Prérequis
- Node.js v18+ et npm v9+
- MongoDB 6
- Variables d'environnement : `PORT`, `DB_URI`


## Installation
1. Cloner le projet 
2. Installer les dépendances 
    - Backend : `cd back && npm install` (react, react-router-dom)
    - Frontend : `cd front && npm install` (cors, dotenv, express, mongoose)
3. Créer un fichier `.env` dans /back : 
    - PORT
    - DB_URI

## Procédures de déploiement
- `npm run build` : Compilation du code
- `npm run start` : Lancement du backend
- ` `: Migration de la BDD

## Tests de validation
- Aller sur http://localhost:3000 → l’app doit s’afficher