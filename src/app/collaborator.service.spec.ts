/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CollaboratorService } from './collaborator.service';

describe('Collaborator Service', () => {
  beforeEachProviders(() => [CollaboratorService]);

  it('should inject the service',
      inject([CollaboratorService], (service: CollaboratorService) => {

    expect(service).toBeTruthy();
  }));

  it('should return the list of 2 collaborators when getCollaborators',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let collaborators = service.getCollaborators();
    expect(collaborators).toBeDefined();
    expect(collaborators.length).toBe(2);
  }));

  it('should return the correct collaborator when getCollaborator with existing id',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let id = 2;
    let collaborator = service.getCollaborator(id);
    expect(collaborator).toBeDefined();
    expect(collaborator.id).toBe(id);
  }));

  it('should return no collaborator when getCollaborator without existing id',
      inject([CollaboratorService], (service: CollaboratorService) => {

    let id = 20;
    let collaborator = service.getCollaborator(id);
    expect(collaborator).toBeUndefined();
  }));
});
