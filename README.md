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

L'objectif de cet exercice est de créer un nouveau composant permettant de modifier les caractéristiques des collaborateurs.

1. Créez un nouveau composant "collaborator-detail" à l'aide de l'outil angular-cli
2. Faites en sorte que lors du clic sur un collaborateur le composant créé s'affiche
3. Développez le composant, qui prend en attribut un collaborateur, permettant de modifier le nom et le prénom du collaborateur sélectionné
