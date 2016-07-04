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

beforeEachProviders(() => [
  CollaboratorService
]);


describe('Component: CollaboratorDetail', () => {
    it('should create an instance',
    inject([CollaboratorService],(service:CollaboratorService) => {

      let component = new CollaboratorDetailComponent(service);
      expect(component).toBeTruthy();
    }));
});
