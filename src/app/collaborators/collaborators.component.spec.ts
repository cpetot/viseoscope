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

describe('Component: Collaborators', () => {

  beforeEachProviders(() => [CollaboratorService]);

  it('should create an instance',
  inject([CollaboratorService],(service:CollaboratorService) => {
    let component = new CollaboratorsComponent(service);
    expect(component).toBeTruthy();
  }));

  it('should set selected collaborator when onCollaboratorSelected',
    inject([CollaboratorService],(service:CollaboratorService) => {
    let component = new CollaboratorsComponent(service);
    expect(component.selectedCollaborator).toBeUndefined();

    let collaborator = new Collaborator(1,'Soler','Jonathan');
    component.onCollaboratorSelected(collaborator);
    expect(component.selectedCollaborator).toBe(collaborator);
  }));
});
