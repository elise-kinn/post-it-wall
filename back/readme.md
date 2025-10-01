# Back-end Post-it Wall
* **Concept :** Une application pour créer des notes textuelles simples.
* **Données :** Note (id, contenu, couleur).
* **Opérations CRUD :**
    * **CREATE :** Créer une nouvelle note.
    * **READ :** Afficher toutes les notes sur un "mur" virtuel.
    * **UPDATE :** Modifier le texte ou la couleur d'une note.
    * **DELETE :** Supprimer une note.

## Endpoints 
```
- Création de la note                        POST /posts
- Affichage de toutes les notes              GET /posts
- Mettre à jour la note (texte ou couleur)   PATCH /posts/:id 
- Supprimer la note                          DELETE /posts/:id
```
## Schéma de base de donnée
- id
- color
- content
- creation date
- update date
