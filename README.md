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

#Enoncé

L'objectif de cet exercice est d'utiliser le nouveau mécanisme de navigation d'angular 2.

1. Commencez par configurer le routeur dans le fichier **app.component.ts**. Nous aurons trois routes différentes:
  1. '' redirigeant vers la liste des collaborateurs (chemin par défaut)
  2. 'collaborators' redirigeant vers la liste des collaborateurs
  3. 'collaborators/:id' redirigeant vers la liste des collaborateurs avec le collaborateur avec l'id donné pré-sélectionné
2. Créez la barre de navigation dans la page du composant principal de l'application. La barre n'a qu'un lien vers la liste des collaborateurs
3. Pour que tout fonctionne il reste à gérer le paramètre de la requête dans le composant de liste des collaborateurs (utilisation du composant ActivatedRoute...). Attention, ce dernier doit toujours fonctionner si le paramètre 'id' n'est pas renseigné.
