import { Injectable } from '@angular/core';
import { Collaborator } from './collaborator'
@Injectable()
export class CollaboratorService {

  private id : number = 2;
  constructor() {}

  getCollaborators() {
    return Promise.resolve(COLLABORATORS);
  }

  getCollaborator(id: number) {
    return Promise.resolve(COLLABORATORS).then(
      collaborators => collaborators.filter(collaborator => collaborator.id === id)[0]
    );
  }

  generateCollaboratorID() : number {
    return id;
  }

  addCollaborator(collaborator : Collaborator) {
    COLLABORATORS.push(collaborator);
    id++;
  }
}

export var COLLABORATORS : Array<Collaborator> = [
  new Collaborator(1, 'Petot', 'Claude'),
  new Collaborator(2, 'Soler', 'Jonathan')
];
