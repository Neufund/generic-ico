import React from 'react';
import { LoginNanoLink, KYCLink, RegisterLink } from '../components/PredefinedLinks';
import Button from '../components/bluebutton';

export default () => (<div>
  <h2>Login Page</h2>
  <p>
    <KYCLink>Successful login when e-mail was used (next step will be possible KYC)</KYCLink>
  </p>
  <Button label={'Log in'} />
  <p>
    <RegisterLink>Register account</RegisterLink>
  </p>
  <p>
    <LoginNanoLink>Login using Nano</LoginNanoLink>
  </p>
</div>);
