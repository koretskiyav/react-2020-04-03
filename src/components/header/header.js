import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import currencyContext from '../../contexts/currency';

function Header() {
  const { userName, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2 onClick={() => setCurrency(currency === '€' ? '$' : '€')}>
        {userName} [{currency}]
      </h2>
    </header>
  );
}

export default Header;
