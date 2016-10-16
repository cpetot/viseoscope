import {CollaboratorService} from "../collaborator.service";
import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';
import { CollaboratorDetailComponent } from '../collaborator-detail/collaborator-detail.component';

@Component({
  selector: 'viseo-collaborators',
  templateUrl: 'collaborators.component.html',
  styleUrls: ['collaborators.component.css'],
  providers: [CollaboratorService]
})
export class CollaboratorsComponent implements OnInit {

  collaborators: Array<Collaborator>;
  selectedCollaborator : Collaborator;

  constructor(private _collaboratorService : CollaboratorService) {
  }

  ngOnInit() {
    this.collaborators = this._collaboratorService.getAllCollaborators();
  }

  onCollaboratorSelected(collaborator : Collaborator) {
    this.selectedCollaborator = collaborator;
  }

}
