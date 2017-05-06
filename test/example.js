import { expect } from 'chai';
import example from '../src';

describe('example', () => {
  it('should fail', () => {
    expect(example).to.throw(/Not implemented/);
  });
});
