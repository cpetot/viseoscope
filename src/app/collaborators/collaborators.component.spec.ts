/* tslint:disable:no-unused-variable */

import {inject, TestBed} from "@angular/core/testing";
import {CollaboratorsComponent} from "./collaborators.component";
import {Collaborator} from "../collaborator";
import {CollaboratorService} from "../collaborator.service";
import {ActivatedRoute} from "@angular/router";

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorService,
      {provide: ActivatedRoute, useClass: MockActivatedRoute}]
    });
    collaborator = new Collaborator(1, 'foo','bar');
  });

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

  it('should delegate creation to the service and set creation to false when createRequest received',
      inject([CollaboratorService, ActivatedRoute], (service: CollaboratorService, route: ActivatedRoute) => {
        // Given
        let component = new CollaboratorsComponent(service, route);
        component.creation = true;
        spyOn(service, 'addCollaborator');

        // When
        component.addCollaborator(collaborator);

        // Then
        expect(service.addCollaborator).toHaveBeenCalledWith(collaborator);
        expect(component.creation).toBe(false);
      }));
});
