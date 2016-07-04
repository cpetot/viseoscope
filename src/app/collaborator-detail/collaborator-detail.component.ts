import { Component, OnInit, Input } from '@angular/core';
import { Collaborator } from '../collaborator';
import { CollaboratorService } from '../collaborator.service'

@Component({
  moduleId: module.id,
  selector: 'viseo-collaborator-detail',
  templateUrl: 'collaborator-detail.component.html',
  styleUrls: ['collaborator-detail.component.css']
})
export class CollaboratorDetailComponent implements OnInit {
  @Input() collaborator: Collaborator;
  @Input() creation: boolean = false;

  constructor(private _collaboratorService : CollaboratorService) {}

  ngOnInit() {
  }

  onCreate(collaborator : Collaborator) {
    this._collaboratorService.addCollaborator(collaborator);
  }
}
