import React from 'react';
import { LoginLink } from '../components/PredefinedLinks';

const Header = () => (
  <header>
    <div>Header</div>
    <nav>
      <ul>
        <li>
          <LoginLink>Login</LoginLink>
        </li>
      </ul>
    </nav>
    <hr />
  </header>);

export default Header;
