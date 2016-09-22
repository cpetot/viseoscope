/* tslint:disable:no-unused-variable */

import {
  async, inject
} from '@angular/core/testing';
import {Collaborator} from './collaborator';

describe('Collaborator', () => {
  it('should create an instance with correct parameters', () => {
    let collab = new Collaborator(1, 'foo', 'bar');
    expect(collab).toBeTruthy();
    expect(collab.id).toBe(1);
    expect(collab.name).toBe('foo');
    expect(collab.surname).toBe('bar');
  });
});
