# Notes Rapides (Post-it virtuels)
* **Concept :** Une application pour créer des notes textuelles simples.
* **Données :** Note (id, contenu, couleur).
* **Opérations CRUD :**
* * **CREATE :** Créer une nouvelle note.
* * **READ :** Afficher toutes les notes sur un "mur" virtuel.
* * **UPDATE :** Modifier le texte ou la couleur d'une note.
* * **DELETE :** Supprimer une note.

## Endpoints 
- Création de la note                        POST /postit
- Affichage de toutes les notes              GET /postit
- Mettre à jour la note (texte ou couleur)   PATCH /postit/:id 
- Supprimer la note                          DELETE /postit/:id

## Schéma de base de donnée
- id
- color
- content
- creation date
- update date