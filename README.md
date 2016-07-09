# Viseoscope

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
WARNING: On Windows, ng test is hitting a file descriptor limit (see https://github.com/angular/angular-cli/issues/977). The solution for now is to instead run ng serve and ng test --build=false in separate console windows.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Enoncé

L'objectif de cet exercice est de pouvoir créer un nouveau collaborateur. Pour ceci nous allons réutiliser le composant de modification d'un collaborateur.

1. Commencez par créer deux nouvelles méthodes dans le service :
 1. **generateCollaboratorID()** : pour générer un id pour le nouveau collaborateur
 2. **addCollaborator(collaborator : Collaborator)** : qui ajoute le nouveau collaborateur à la liste des collaborateurs
2. Ajoutez un attribut "creation" au composant de modification de collaborateurs permettant de savoir dans quel mode nous sommes. Si cet attribut est à 'true' un bouton "créer" s'affiche, ce qui va créer le nouveau collaborateur.
3. Dans le composant de liste de collaborateur, ajouter un bouton "créer" permettant d'afficher l'écran de création d'un collaborateur
