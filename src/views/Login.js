import React from 'react';
import { LoginNanoLink, KYCLink, RegisterLink } from '../components/PredefinedLinks';
import Recaptcha from '../components/Capthca';

export default () => (<div>
  <h2>Login Page</h2>
  <p>
    <KYCLink>Successful login when e-mail was used (next step will be possible KYC)</KYCLink>
  </p>
  <p>
    <RegisterLink>Register account</RegisterLink>
  </p>
  <p>
    <LoginNanoLink>Login using Nano</LoginNanoLink>
  </p>
  <Recaptcha />
</div>);
