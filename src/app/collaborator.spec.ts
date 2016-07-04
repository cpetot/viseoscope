/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Collaborator} from './collaborator';

describe('Collaborator', () => {
  it('should create an instance', () => {
    expect(new Collaborator(1, 'foo', 'bar')).toBeTruthy();
  });
});
