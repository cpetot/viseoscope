/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollaboratorDetailComponent } from './collaborator-detail.component';
import { CollaboratorService } from '../collaborator.service';
import { Collaborator } from '../collaborator';

describe('Component: CollaboratorDetail', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorService]
    });
  });

  it('should create an instance',
  inject([CollaboratorService],(service:CollaboratorService) => {
    let component = new CollaboratorDetailComponent(service);
    expect(component).toBeTruthy();
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
