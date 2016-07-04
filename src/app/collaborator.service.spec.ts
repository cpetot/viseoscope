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
});
