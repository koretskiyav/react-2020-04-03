import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import currencyContext from '../../contexts/currency';
import { Select } from 'antd';

const { Option } = Select;

function Header() {
  const { setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header}>
      <Logo />
      <div style={{ float: 'right' }}>
        <span style={{ color: 'white' }}>Currency: </span>
        <Select
          defaultValue="USD"
          style={{ width: 80 }}
          onChange={value => setCurrency(value)}
        >
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="RUB">RUB</Option>
        </Select>
      </div>
    </header>
  );
}

export default Header;
