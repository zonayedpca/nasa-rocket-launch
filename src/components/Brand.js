import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="rocket-launch-logo" />
      <p>Next <strong>Launch</strong></p>
    </Link>
  </div>
)
