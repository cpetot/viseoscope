import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';

@Component({
  moduleId: module.id,
  selector: 'viseo-collaborators',
  templateUrl: 'collaborators.component.html',
  styleUrls: ['collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  collaborators : Array<Collaborator> = [];

  constructor() {}

  ngOnInit() {
    this.collaborators.push(new Collaborator(1, 'Petot', 'Claude'));
    this.collaborators.push(new Collaborator(2, 'Soler', 'Jonathan'));
}

}
