import { Injectable } from '@angular/core';
import { Collaborator } from './collaborator'
@Injectable()
export class CollaboratorService {

  constructor() {}

  getCollaborators() {
    return Promise.resolve(COLLABORATORS);
  }

  getCollaborator(id: number) {
    return Promise.resolve(COLLABORATORS).then(
      collaborators => collaborators.filter(collaborator => collaborator.id === id)[0]
    );
  }
}

export var COLLABORATORS : Array<Collaborator> = [
  new Collaborator(1, 'Petot', 'Claude'),
  new Collaborator(2, 'Soler', 'Jonathan')
];
