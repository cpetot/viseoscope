import {CollaboratorService} from "../collaborator.service";
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collaborator } from '../collaborator';

@Component({
  selector: 'viseo-collaborator-detail',
  templateUrl: 'collaborator-detail.component.html',
  styleUrls: ['collaborator-detail.component.css']
})
export class CollaboratorDetailComponent implements OnInit {
  collabId: number;
  @Input() collaborator: Collaborator;

  constructor(private _collaboratorService : CollaboratorService, private _route : ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe(params => this.collabId = params.id);
    if(this.collabId) {
      this.collaborator = this._collaboratorService.getCollaborator(this.collabId);
    }
  }
}
