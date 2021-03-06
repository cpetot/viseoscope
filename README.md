# Viseoscope

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

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

L'objectif de cet exercice est de permettre d'éditer les informations d'un collaborateur sélectionné.

1. Ajoutez au composant de liste de collaborateurs l'édition d'un collaborateur permettant :
   * l'affichage de l'identifiant
   * l'édition du nom et du prénom
2. A la sélection d'un collaborateur de la liste, faites en sorte qu'il soit éditable.
3. Quel test pouvez-vous écrire sur ce composants ?

## Development server

* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`.
* The app will automatically reload if you change any of the source files.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component.
* You can also use `ng generate directive/pipe/service/route/class`.
* More info on [How to generate with Angular-CLI](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services).
* To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* **WARNING**: On Windows, ng test is hitting a file descriptor limit (see https://github.com/angular/angular-cli/issues/977). The solution for now is to instead run ng serve and ng test --build=false in separate console windows.
