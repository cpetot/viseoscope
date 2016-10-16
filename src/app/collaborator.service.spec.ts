/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollaboratorService } from './collaborator.service';

describe('Service: Collaborator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaboratorService]
    });
  });

  it('should ...', inject([CollaboratorService], (service: CollaboratorService) => {
    expect(service).toBeTruthy();
  }));
});
