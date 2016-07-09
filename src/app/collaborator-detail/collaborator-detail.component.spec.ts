/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CollaboratorDetailComponent } from './collaborator-detail.component';
import { Collaborator } from '../collaborator';

beforeEachProviders(() => [
  CollaboratorService
]);


describe('Component: CollaboratorDetail', () => {
    it('should create an instance with creation false',
    inject([CollaboratorService],(service:CollaboratorService) => {

      let component = new CollaboratorDetailComponent(service);
      expect(component).toBeTruthy();
      expect(component.creation).toBe(false);
    }));

    it('should delegate creation to the service when onCreate',
    inject([CollaboratorService],(service:CollaboratorService) => {

      // Given
      let component = new CollaboratorDetailComponent(service);
      component.creation = true;

      let collaborator = new Collaborator(1, 'foo', 'bar');
      spyOn(service, 'addCollaborator');
      spyOn(component.creationChange, 'emit');

      // When
      component.onCreate(collaborator);
      expect(service.addCollaborator).toHaveBeenCalledWith(collaborator);
      expect(component.creation).toBe(false);
      expect(component.creationChange.emit).toHaveBeenCalledWith(false);

    }));
});
