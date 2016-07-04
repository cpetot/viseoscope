import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app/';
import { CollaboratorService } from './app/collaborator.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [CollaboratorService, APP_ROUTER_PROVIDERS]);
