import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import userContext from '../../contexts/user';
import currencyContext, { currencies } from '../../contexts/currency';

function Header() {
  const { userName, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(currencyContext);

  const menu = (
    <Menu>
      {Object.entries(currencies).map(([key, value]) => (
        <Menu.Item key={key} onClick={() => setCurrency(key)}>
          {key}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />,<h2>{userName}</h2>,
      {/* TODO разобраться, как загнать в правый угол */}
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {currency} <DownOutlined />
        </a>
      </Dropdown>
    </header>
  );
}

export default Header;
