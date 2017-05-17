/* eslint-disable import/first */
import './helpers/mockDom';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MockProviders, dispatch } from './helpers/MockProviders';
import App from '../src/components/App';
import AppActions from './app-actions.json';

describe('App', () => {
  const appComponent = <MockProviders><App /></MockProviders>;
  let appMount;

  it('should mount', () => {
    appMount = mount(appComponent);
  });
  it('should render', () => {
    appMount.render();
  });
  it('has title "To do"', () => {
    expect(appMount.text()).to.contain('To do');
  });
  it('Should accept recorded actions', () => {
    dispatch(AppActions);
    expect(appMount.text()).to.contain('Unknown chain');
  });
});
