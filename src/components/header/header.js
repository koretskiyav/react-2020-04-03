import React, { useContext } from 'react';
import { Select } from 'antd';

import Logo from './logo';
import styles from './header.module.css';

import moneyContext from '../../contexts/money';

import EU from '../../assets/flags/EU-flag.png';
import US from '../../assets/flags/US-flag.png';
import RU from '../../assets/flags/RU-flag.png';
import UA from '../../assets/flags/UA-flag.png';

const options = [
  { value: 'USD', src: US },
  { value: 'EUR', src: EU },
  { value: 'RUB', src: RU },
  { value: 'UAH', src: UA }
];

function Header() {
  const { currency, setCurrency } = useContext(moneyContext);

  return (
    <header className={styles.header}>
      <Logo />
      <Select value={currency} onChange={setCurrency} className={styles.select}>
        {options.map(({ value, src }) => (
          <Select.Option key={value} value={value}>
            <img src={src} alt={value} className={styles.flag} />
            <span>{value}</span>
          </Select.Option>
        ))}
      </Select>
    </header>
  );
}

export default Header;
