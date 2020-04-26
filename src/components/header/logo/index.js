import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from './logo.svg';

function Logo() {
  return (
    <Link to="/restaurants">
      <img src={LogoImg} alt="logo" />
    </Link>
  );
}

export default Logo;
