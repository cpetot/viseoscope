/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {CollaboratorDetailComponent} from "./collaborator-detail.component";
import {Collaborator} from "../collaborator";

describe('Component: CollaboratorDetail', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });

    it('should create an instance', inject([], () => {
        let component = new CollaboratorDetailComponent();
    expect(component).toBeTruthy();
  }));

    it('should delegate creation to the service when onCreate', inject([], () => {

    // Given
        let component = new CollaboratorDetailComponent();
    component.creation = true;

    let collaborator = new Collaborator(1, 'foo', 'bar');
        spyOn(component.createRequest, 'emit');

    // When
    component.onCreate(collaborator);
    expect(component.creation).toBe(false);
        expect(component.createRequest.emit).toHaveBeenCalledWith(collaborator);

  }));
});
