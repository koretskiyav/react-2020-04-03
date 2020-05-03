import React, { useContext, useMemo } from 'react';
import { Select } from 'antd';

import Logo from './logo';
import userContext from '../../contexts/user';
import currencyContext from '../../contexts/currency';

import styles from './header.module.css';

function Header() {
  const { userName, setName } = useContext(userContext);
  const { currencies, currency, setCurrency } = useContext(currencyContext);

  const currenciesName = useMemo(() => {
    return Object.keys(currencies);
  }, [currencies]);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>
        {userName}, cur:&nbsp;
        <Select
          defaultValue={currency}
          style={{ width: 120 }}
          onChange={value => setCurrency(value)}
        >
          {currenciesName.map(currencyName => (
            <Select.Option key={currencyName} value={currencyName}>
              {currencyName}
            </Select.Option>
          ))}
        </Select>
      </h2>
    </header>
  );
}

export default Header;
