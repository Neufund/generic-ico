import React from 'react';
import { LoginNanoLink, KYCLink, RegisterLink } from '../components/PredefinedLinks';

export default () => (<div>
  <h2>Login Page</h2>
  <KYCLink>Successful login when e-mail was used (next step will be possible KYC)</KYCLink> <br />
  <RegisterLink>Register account</RegisterLink> <br />
  <LoginNanoLink>Login using Nano</LoginNanoLink>
</div>);
