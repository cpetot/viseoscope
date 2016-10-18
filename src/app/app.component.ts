import {CollaboratorService} from "./collaborator.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viseo-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [CollaboratorService]
})
export class AppComponent implements OnInit {
  title = 'Viseo Scope!';
  urls : Map<string, string> = new Map<string, string>();

  constructor(private _collaboratorService : CollaboratorService){}


    ngOnInit() {
      this._collaboratorService.getCollaborators().forEach(c => this.urls[c.name]='/collaborators/'+c.id);
    }
}
