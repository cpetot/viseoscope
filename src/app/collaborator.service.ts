import {Collaborator} from "./collaborator";
import { Injectable } from '@angular/core';

@Injectable()
export class CollaboratorService {

  constructor() { }

  private collaborators: Array<Collaborator> = [
    new Collaborator(1, 'Petot', 'Claude'),
    new Collaborator(2, 'Soler', 'Jonathan')
  ];

  getAllCollaborators() : Array<Collaborator>  {
    return this.collaborators;
  }
}
