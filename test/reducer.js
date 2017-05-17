/* eslint-disable import/first */
import './helpers/mockDom';
import { expect } from 'chai';
import reducer from '../src/reducers';

describe('Reducer', () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  const dispatch = (action) => {
    if (Array.isArray(action)) {
      state = action.reduce(reducer, state);
    } else {
      state = reducer(state, action);
    }
  };

  it('should have inititialState', () => {
    expect(state).to.have.property('router');
    expect(state).to.have.property('translation');
  });

  it('should dispatch nop', () => {
    const old = state;
    dispatch({ type: 'NOP', payload: {} });
    expect(state).to.deep.equal(old);
  });
});
