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

import { CollaboratorsComponent } from './collaborators.component';
import { Collaborator } from '../collaborator';
let collaborator;

describe('Component: Collaborators', () => {

  beforeEachProviders(() => [CollaboratorService]);
  beforeEach(() => collaborator = new Collaborator(1, 'foo','bar'));

  it('should create an instance',
  inject([CollaboratorService],(service:CollaboratorService) => {

    let component = new CollaboratorsComponent(service);
    expect(component).toBeTruthy();
  }));

  it('should initialise the collaborators with the service when ngOnInit',
  inject([CollaboratorService],(service:CollaboratorService) => {
    // Given
    spyOn(service, 'getCollaborators').and.returnValue([collaborator]);

    // When
    let component = new CollaboratorsComponent(service);
    component.ngOnInit();

    // Then
    expect(service.getCollaborators).toHaveBeenCalled();
    expect(component.collaborators).toBeDefined();
    expect(component.collaborators.length).toBe(1);
    expect(component.collaborators[0]).toBe(collaborator);
  }));

  it('should set selected collaborator when onCollaboratorSelected',
    inject([CollaboratorService],(service:CollaboratorService) => {

    let component = new CollaboratorsComponent(service);
    expect(component.selectedCollaborator).toBeUndefined();

    component.onCollaboratorSelected(collaborator);
    expect(component.selectedCollaborator).toBe(collaborator);
  }));
});
