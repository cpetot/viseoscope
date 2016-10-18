import {CollaboratorsComponent} from "./collaborators/collaborators.component";
import {CollaboratorDetailComponent} from "./collaborator-detail/collaborator-detail.component";
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: CollaboratorsComponent
  },
  {
    path: 'collaborators',
    component: CollaboratorsComponent
  },
  {
    path: 'collaborators/:id',
    component: CollaboratorDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
