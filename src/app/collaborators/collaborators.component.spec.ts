/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CollaboratorsComponent } from './collaborators.component';

describe('Component: Collaborators', () => {
  it('should create an instance', () => {
    let component = new CollaboratorsComponent();
    expect(component).toBeTruthy();
  });
  it('should have two collaborators', () => {
    let component = new CollaboratorsComponent();
    expect(component.collaborators.length).toBe(2);
  });
});
