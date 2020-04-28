import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';

function Header() {
  const { userName, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>{userName}</h2>
    </header>
  );
}

export default Header;
