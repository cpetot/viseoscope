import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollaboratorsComponent } from './collaborators/collaborators.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CollaboratorsComponent,
    pathMatch: 'full'
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
