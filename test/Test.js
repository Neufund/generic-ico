/* eslint-disable import/first */
import './helpers/mockDom';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MockProviders, dispatch } from './helpers/MockProviders';
import Test from '../src/views/Test';
import AppActions from './app-actions.json';

describe('Test', () => {
  const appComponent = <MockProviders><Test /></MockProviders>;
  let appMount;

  it('should mount', () => {
    appMount = mount(appComponent);
  });
  it('should render', () => {
    appMount.render();
  });
  it('Should accept recorded actions', () => {
    dispatch(AppActions);
    expect(appMount.text()).to.contain('Unknown chain');
  });
});
