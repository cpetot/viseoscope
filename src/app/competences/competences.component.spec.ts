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

import { CompetencesComponent } from './competences.component';

describe('Component: Competences', () => {
  beforeEachProviders(() => [
    CollaboratorService
  ]);

  it('should create an instance', inject([CollaboratorService],(service:CollaboratorService) => {
    let component : CompetencesComponent = new CompetencesComponent(service);
    expect(component).toBeTruthy();
  }));
});
