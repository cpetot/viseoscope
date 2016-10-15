/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompetencesComponent } from './competences.component';
import { CollaboratorService } from '../collaborator.service';

describe('Component: Competences', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorService]
    });
  });

  it('should create an instance', inject([CollaboratorService],(service:CollaboratorService) => {
    let component : CompetencesComponent = new CompetencesComponent(service);
    expect(component).toBeTruthy();
  }));
});
