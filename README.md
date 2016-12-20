# Viseoscope

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Prérequis & installation
 1. Vous aurez besoin [Node JS](https://nodejs.org/en/) ** en version 4 minimum**. Vérifiez que Node et npm sont correctement installés :
 ```
 node -- version
 npm -- version
 ```

 2. Angular-CLI, sur lequel est basé le TP
 ```
 npm install -g angular-cli
 ```

 3. Installez les dépendances du TP :
  ```
  npm i
  ```

 4. Testez que l'application se démarre correctement sur [http://localhost:4200/](http://localhost:4200/) avec la commande :
 ```
 ng serve
 ```
**Attention** : Si vous avez une erreur du type 'Error: Cannot find module 'exists-sync', veuillez effectuer les opérations suivantes pour corriger le problème :
 * cd node_modules/angular-cli/
 * npm i

 ## Enoncé

 L'objectif de cet exercice est de mettre en pratique ce que nous avons vu sur l'ensemble des exercices précédents. Nous verrons en plus la notion de "Pipe". Pour ceci nous allons ajouter la notion de compétences à nos collaborateurs.

 1. Créez une classe "Competence" avec deux attributs:
   1. Type : le type de compétence (ex : Développement)
   2. Name : le nom de la compétence (ex : Angular)
 2. Développez un test simple de notre nouvelle classe
 3. Ajoutez une méthode "addCompetence(competence : Competence) : Collaborator" dans la classe "Collaborator" qui va ajouter la compétence à la liste des compétences du collaborateurs
 4. Ajoutez une méthode "addCompetence(collaborator : Collaborator, competence : Competence)" au service qui va ajouter la compétence au collaborateur
 5. Créez un composant "Competences" permettant de gérer les compétences d'un collaborateur. Ce composant est très simple, deux champs (type et nom) de la compétence avec la possibilité d'en rajouter avec un bouton. Ce composant prend en attribut un collaborateur.
 6. Il nous reste à intégrer le nouveau composant au composant de modification des collaborateurs.
 7. Nous allons maintenant ajouter une fonction de recherche à notre page de liste des collaborateurs :
   1. Créez un "pipe" à l'aide d'angular-cli
   2. Ce filtre doit permettre de filtrer les collaborateurs selon leurs compétences ou leur nom ou leur prénom. Pour ceci, développez une méthode "isMatch(searchText : string)" dans la classe "Collaborator" qui va regarder la présence ou non du texte pour le collaborateur. Il faut ensuite appeler cette méthode dans notre "filtre"
   3. Ajoutez un champs de texte sur le composant de liste des collaborateurs. Ce dernier filtrera instantanément les collaborateurs disponible

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
