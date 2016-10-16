import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CollaboratorDetailComponent } from './collaborator-detail/collaborator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CollaboratorsComponent,
    CollaboratorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CollaboratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
