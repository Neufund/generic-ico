import React from 'react';
import { KYCLink, RegisterEmailLink } from '../components/PredefinedLinks';

export default () => (<div>
  <h2>Login with e-mail page</h2>
  <KYCLink>Login succeed go to KYC page</KYCLink> <br />
  <RegisterEmailLink>No account go to registration page</RegisterEmailLink>
</div>);
