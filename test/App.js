import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MockProviders from './helpers/MockProviders';
import App from '../src/App';

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
});
