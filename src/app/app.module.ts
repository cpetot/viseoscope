import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CollaboratorDetailComponent } from './collaborator-detail/collaborator-detail.component';
import { routing } from './app.routes';
import { CollaboratorService } from './collaborator.service'

@NgModule({
  declarations: [
    AppComponent,
    CollaboratorsComponent,
    CollaboratorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CollaboratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
