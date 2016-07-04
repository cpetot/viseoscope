import { Component } from '@angular/core';
import { CollaboratorsComponent } from './collaborators/collaborators.component';

@Component({
  moduleId: module.id,
  selector: 'viseo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives : [CollaboratorsComponent]
})
export class AppComponent {
  title = 'Viseo Scope!';
}
