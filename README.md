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

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Enoncé

L'objectif de cet exercice est de créer un service avec le framework angular 2.

1. Commencez par créer le service "collaborator" à l'aide d'angular-cli
2. Développez les méthodes suivantes:
  1.  **getCollaborators()** : permettant de retourner l'ensemble des collaborateurs (Pour avoir un jeu de données, il vous suffit de créer une variable interne au service contenant un tableau de collaborateurs)
  2.  **getCollaborator(id: number)** : permettant de retourner le collaborateur ayant pour id le nombre en paramètre
3. Intégrez l'utilisation de ce service dans notre composant "collaborators" de manière à récupérer les collaborators par le biais du service.
