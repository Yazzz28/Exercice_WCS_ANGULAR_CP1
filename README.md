# Ton premier checkpoint 🐥

Ton objectif est de refaire une partie de la page d'accueil de youtube grâce à Angular. Plus exactement, **tu vas devoir** :

- Récupérer une liste de vidéos depuis un fichier `.json` (étape 1)
- Afficher la liste de vidéos (étape 2) ;
- Naviguer vers le détail d'une vidéo (étape 3) ;
- Filtrer la liste de vidéos (étape 4).

⚠️ Avant de commencer :

- Clone ce repository, navigue dedans puis lance la commande `npm install`. Cela te permettra **d'installer toutes les dépendances du projet**. Une fois terminé, tu devrais voir apparaître le dossier **node_modules** à côté du dossier `src` à la raçine de ton projet.

- Crée une branche avec ton nom, sur laquelle tu feras des **commits réguliers**. N'oublie pas de `push` avant 13h.

- Prends le temps de bien lire ce qui suit 👇

## Étape 1 : récupérer la liste de vidéos

- Regarde le fichier `data.json` et crée le type qui permet de modéliser ces données.

- Crée un service qui contient :
  - une méthode `getVideoList$` qui te retourne la liste de vidéos. Tu auras besoin de `pipe` et `map`
  - une méthode `getVideoById$` qui prend en paramètre un `id` et qui retourne une vidéo, recherchée par son `id`. Tu auras besoin de `pipe`, `map` et `find`
  - Une méthode `filteredVideoList$` qui prend en paramètre une chaîne de caractères et qui retourne la liste de vidéos, filtrées selon la chaîne de caractères passée en paramètre. Tu auras besoin de `pipe` `map` et `filter`

👀 Pense à faire un **commit**

## Étape 2 : afficher la liste de vidéos

👉 Commence par ajouter le `routing` et fais en sorte que :

- L'url `videos` affiche le composant `video-page`
- L'url `""` (chaîne de caractères vide) **redirige** vers `videos`
- N'importe quel URL **non prévu** affiche le composant `error` (que tu vas devoir créer)

  Le composant `video-page` affiche les composants `video-search` puis `video-list`

👀 Pense à faire un **commit**

👉 Continue en récupérant les données :

- Depuis ton composant `video-list`, récupère les données de ton fichier `data.json` par l'intermédiaire de ton service et ta méthode `getVideoList$`. Tu peux te `subscribe` à cette méthode via le `| async` directement depuis le template
- Ton composant `video-list` transmet les vidéos à ton composant `video-card` via `@Input()` et `*ngFor`
- Ton composant `video-card` doit afficher les éléments principaux d'une vidéo (à toi de juger lesquels sont pertinents)

👀 Pense à faire un **commit**

## Étape 3 : naviguer vers le détail d'une vidéo

Lorsque tu cliques sur le bouton "voir plus" d'une `card`, tu dois naviguer vers l'URL `/video/id`, où `id` est la valeur de la propriété **id** de la vidéo. Par exemple, si tu cliques sur le bouton "voir plus" de la 3ème vidéo, tu dois naviguer vers : `/video/3`, où 3 est la valeur de la propriété **id** de l'objet.

Pour cela :

- Ajoute un nouveau chemin dans tes routes (n'oublie pas `/:id`)
- Ajoute la directive routerLink à ton bouton "voir plus"
- Créer un composant `video-detail` qui affiche le détail de la vidéo cliquée (peu importe la vidéo). En reprenant l'exemple précédent, si tu cliques sur la 3ème vidéos, tu navigues vers `/video/3` et ton composant doit afficher tous les éléments de la **video 3**

✅ Pense à bien importer `ActivatedRoute` et à utiliser `snapshot` et `paramMap`
✅ Pense également à **convertir l'`id` de ton URL de string à number**

## BONUS 1️⃣ :

- Si le nombre de likes est supérieur à 100 000, l'afficher en **gras** sur la `card`

- Si la vidéo n'a pas de commentaires, afficher "aucun commentaire". Sinon, afficher les commentaires + l'auteur, ainsi que le nombre de commentaires total

- Afficher la date d'upload en durée écoulée jusqu'à aujourd'hui. Prendre en compte les années, mois, semaines, heures, minutes et secondes.

## BONUS 2️⃣ :

- Utiliser une custom directive pour le premier bonus

- Créer un composant `video-comments` dédié pour l'affichage de la partie commentaires

- Créer un custom pipe pour le troisème bonus

## Étape 4. Filtrer la liste de vidéos

Ton objectif final est de filtrer la liste de vidéos de ton composant `video-list`.

Pour filtrer ta liste de vidéos, tu vas devoir créer un composant `video-search`. Ce composant :

- Possède un input de type search et récupère la donnée saisie par l'utilisateur via la directive `[(ngModel)]`

- Envoie cette donnée à son parent `video-page` via `@Output` à chaque fois que la valeur est modifiée. Tu pourras utiliser `(ngModelChange)` pour écouter les changements du `[(ngModel)]`

* Lorsque `video-page` reçoit la donnée, il l'envoie en `@Input` à `video-list`
* `video-list` écoute les changements de valeur de sa propriété décorée avec @Input(). Tu pourras utiliser le lifecycle hook `ngOnChanges`.
* À chaque changement, le composant `video-list` appelle la méthode `filteredVideoList$` et affiche son résultat.

  👀 Pense à faire un **commit**

## Et tadaaa 🥳

Tu as terminé le checkpoint ! Prends le temps de bien relire chaque étape, de t'assurer de les avoir comprises et n'hésite pas à prendre le temps de faire un petit schéma de ce à quoi doit ressembler ton application.
