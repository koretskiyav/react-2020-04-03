import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import Currencies from './currencies';

import userContext from '../../contexts/user';

function Header() {
  const { userName, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>{userName}</h2>
      <Currencies />
    </header>
  );
}

export default Header;
