/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CollaboratorDetailComponent } from './collaborator-detail.component';

describe('Component: CollaboratorDetail', () => {
  it('should create an instance', () => {
    let component = new CollaboratorDetailComponent();
    expect(component).toBeTruthy();
  });
});
