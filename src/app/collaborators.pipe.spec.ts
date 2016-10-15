/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CollaboratorsPipe } from './collaborators.pipe';
import { Collaborator } from './collaborator';
import { Competence } from './competence';

describe('Pipe: Collaborators', () => {
  it('create an instance', () => {
    let pipe = new CollaboratorsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter', () => {
    let pipe = new CollaboratorsPipe();

    let collab1 : Collaborator = new Collaborator(1, "Petot", "Claude").addCompetence(new Competence('Developpement', 'Javascript'));
    let collab2 : Collaborator = new Collaborator(2, "Soler", "Jonathan").addCompetence(new Competence('Developpement', 'Java'));

    let collaborators : Array<Collaborator> = [collab1, collab2]


    expect(pipe.transform(collaborators, 'script').length).toBe(1);

    expect(pipe.transform(collaborators, 'script')[0]).toBe(collab1);

    expect(pipe.transform(collaborators, 'sol')[0]).toBe(collab2);

  });
});
