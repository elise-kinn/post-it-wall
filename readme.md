# Documentation de déploiement

## Infrastructures
- BDD : MongoDB

## Prérequis
- Node.js v18+ et npm v9+
- MongoDB 6
- Variables d'environnement : `PORT`, `DB_URI`


## Installation
1. Cloner le projet 

2. Installer les dépendances :

```bash
cd back && npm install
cd front && npm install
```

3. Créer un fichier `.env` dans `/back` : 
    - PORT=<VOTRE_PORT>
    - DB_URI=<VOTRE_URI_MONGODB>

## Procédures de déploiement

### Back-end 
- Répertoire racine : `/back`
- Commande de construction : 
```bash
npm install
```
- Lancement du serveur :
```bash
node ./app.js
```

### Front-end
- Répertoire racine : `/front`
- Compilation du code :
```bash
npm run build
```
- Les fichiers de production seront générés dans le dossier `dist/`.
- Répertoire de publication : `front/dist`

