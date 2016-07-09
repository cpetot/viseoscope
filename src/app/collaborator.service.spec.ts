/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CollaboratorService } from './collaborator.service';
import {Collaborator} from './collaborator';

describe('Collaborator Service', () => {
  beforeEachProviders(() => [CollaboratorService]);

  it('should inject the service',
      inject([CollaboratorService], (service: CollaboratorService) => {

    expect(service).toBeTruthy();
  }));

  it('should return the list of 2 collaborators when getCollaborators',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let collaborators : Array<Collaborator>= service.getCollaborators();
    expect(collaborators).toBeDefined();
    expect(collaborators.length).toBe(2);
  }));

  it('should return the correct collaborator when getCollaborator with existing id',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let id = 2;
    let collaborator : Collaborator = service.getCollaborator(id);
    expect(collaborator).toBeDefined();
    expect(collaborator.id).toBe(id);
  }));

  it('should return no collaborator when getCollaborator without existing id',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let id = 20;
    let collaborator : Collaborator = service.getCollaborator(id);
    expect(collaborator).toBeUndefined();
  }));

  it('should add a collobarator when addCollaborator',
      inject([CollaboratorService], (service: CollaboratorService) => {

    // Given
    let newCollaborator : Collaborator = new Collaborator(42, 'foo', 'bar');

    // When
    service.addCollaborator(newCollaborator);

    // Then
    let collabarators : Array<Collaborator> = service.getCollaborators();
    expect(collabarators.length).toBe(3);
    expect(collabarators[2]).toBe(newCollaborator);
  }));

  it('should generate new ids when generateCollaboratorID',
      inject([CollaboratorService], (service: CollaboratorService) => {

    // 2 collaborateurs ayant déjà été créés, les nouveaux ids commencent à 3
    expect(service.generateCollaboratorID()).toBe(3);
    expect(service.generateCollaboratorID()).toBe(4);
    expect(service.generateCollaboratorID()).toBe(5);
  }));
});
