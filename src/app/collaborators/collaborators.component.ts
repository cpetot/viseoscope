import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';
import { CollaboratorDetailComponent } from '../collaborator-detail/collaborator-detail.component';
import { CollaboratorService } from '../collaborator.service'

@Component({
  moduleId: module.id,
  selector: 'viseo-collaborators',
  templateUrl: 'collaborators.component.html',
  styleUrls: ['collaborators.component.css'],
  directives : [CollaboratorDetailComponent]
})
export class CollaboratorsComponent implements OnInit {
  collaborators : Array<Collaborator> = [];
  selectedCollaborator : Collaborator;

  constructor(private _collaboratorService : CollaboratorService) {}

  ngOnInit() {
    this.collaborators = this._collaboratorService.getCollaborators();
  }

  onCollaboratorSelected(collaborator : Collaborator) {
    this.selectedCollaborator = collaborator;
  }

}
