import { Injectable } from '@angular/core';
import { Collaborator } from './collaborator'
@Injectable()
export class CollaboratorService {

  private id : number = 1;
  constructor() {}

  getCollaborators() : Array<Collaborator> {
    return this.COLLABORATORS;
  }

  getCollaborator(id: number) : Collaborator {
    return this.COLLABORATORS.filter(collaborator  => collaborator.id === id)[0];
  }

  generateCollaboratorID() : number {
    return this.id++;
  }

  addCollaborator(collaborator : Collaborator) {
    this.COLLABORATORS.push(collaborator);
  }

  private COLLABORATORS : Array<Collaborator> = [
    new Collaborator(this.generateCollaboratorID(), 'Petot', 'Claude'),
    new Collaborator(this.generateCollaboratorID(), 'Soler', 'Jonathan')
  ];
}