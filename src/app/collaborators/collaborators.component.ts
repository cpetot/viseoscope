import {Component, OnInit} from "@angular/core";
import {Collaborator} from "../collaborator";
import {CollaboratorService} from "../collaborator.service";

@Component({
  selector: 'viseo-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  collaborators: Array<Collaborator> = [];
  selectedCollaborator: Collaborator;

  constructor(private _collaboratorService: CollaboratorService) {
  }

  ngOnInit() {
    this.collaborators = this._collaboratorService.getCollaborators();
  }

  onCollaboratorSelected(collaborator: Collaborator) {
    this.selectedCollaborator = collaborator;
  }

}
