import { Component } from '@angular/core';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

const routes = [
  {
    path: '',
    component: CollaboratorsComponent,
    index:true
  },
  {
    path: 'collaborators',
    component: CollaboratorsComponent
  },
  {
    path: 'collaborators/:id',
    component: CollaboratorsComponent
  }
];

const routeConfig : RouterConfig = [
  ...routes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routeConfig)
];

@Component({
  moduleId: module.id,
  selector: 'viseo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Viseo Scope!';
}
