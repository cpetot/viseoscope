/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CollaboratorsComponent } from './collaborators.component';
import { Collaborator } from '../collaborator';
import { ActivatedRoute } from '@angular/router';

class MockActivatedRoute {
  params:any;
  constructor() {
    this.params = {
      subscribe() {}
    };
  }
}
let collaborator;

describe('Component: Collaborators', () => {

  beforeEachProviders(() => [
    CollaboratorService,
    {provide: ActivatedRoute, useClass: MockActivatedRoute}
  ]);
  beforeEach(() => collaborator = new Collaborator(1, 'foo','bar'));

  it('should create an instance',
  inject([CollaboratorService, ActivatedRoute],(service:CollaboratorService, route : ActivatedRoute) => {

	  let component = new CollaboratorsComponent(service, route);
    expect(component).toBeTruthy();
  }));

  it('should initialise the collaborators with the service when ngOnInit',
  inject([CollaboratorService, ActivatedRoute],(service:CollaboratorService, route : ActivatedRoute) => {

    // Given
    spyOn(service, 'getCollaborators').and.returnValue([collaborator]);

    // When
    let component = new CollaboratorsComponent(service, route);
    component.ngOnInit();

    // Then
    expect(service.getCollaborators).toHaveBeenCalled();
    expect(component.collaborators).toBeDefined();
    expect(component.collaborators.length).toBe(1);
    expect(component.collaborators[0]).toBe(collaborator);
  }));

  it('should set selected collaborator when onCollaboratorSelected',
    inject([CollaboratorService, ActivatedRoute],(service:CollaboratorService, route : ActivatedRoute) => {

	  let component = new CollaboratorsComponent(service, route);
    expect(component.selectedCollaborator).toBeUndefined();

    component.onCollaboratorSelected(collaborator);
    expect(component.selectedCollaborator).toBe(collaborator);
  }));
});
