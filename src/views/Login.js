import React from 'react';
import { LoginEmailLink, LoginNanoLink } from '../components/PredefinedLinks';

export default () => (<div>
  <h2>Login Page</h2>
  <LoginEmailLink>Login using e-mail</LoginEmailLink> <br />
  <LoginNanoLink>Login using Nano</LoginNanoLink>
</div>);
