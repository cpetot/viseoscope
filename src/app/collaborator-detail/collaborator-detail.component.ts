import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collaborator } from '../collaborator';
import { CollaboratorService } from '../collaborator.service'
import { CompetencesComponent } from '../competences/competences.component';

@Component({
  moduleId: module.id,
  selector: 'viseo-collaborator-detail',
  templateUrl: 'collaborator-detail.component.html',
  styleUrls: ['collaborator-detail.component.css'],
  directives: [CompetencesComponent]
})
export class CollaboratorDetailComponent implements OnInit {
  @Input() collaborator: Collaborator;
  @Input() creation: boolean = false;
  //utile pour le double-databing
  @Output() creationChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _collaboratorService : CollaboratorService) {}

  ngOnInit() {
  }

  onCreate(collaborator : Collaborator) {
    this._collaboratorService.addCollaborator(collaborator);
    this.creation = false;
    //on informe le composant parent que l'on a fini de créer le collaborateur
    this.creationChange.emit(this.creation);
  }
}
