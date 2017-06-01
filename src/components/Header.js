import React from 'react';
import Link from '../components/TempLink';

const Header = () => (
  <header>
    <div>Header</div>
    <nav>
      <ul>
        <li><Link path="/login">Login</Link> <br /></li>
      </ul>
    </nav>
    <hr />
  </header>);

export default Header;
