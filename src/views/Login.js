import React from 'react';
import { LoginNanoLink, KYCLink } from '../components/PredefinedLinks';

export default () => (<div>
  <h2>Login Page</h2>
  <KYCLink>Successful login when using e-mail</KYCLink> <br />
  <LoginNanoLink>Login using Nano</LoginNanoLink>
</div>);
