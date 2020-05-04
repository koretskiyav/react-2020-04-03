import React, { useContext } from 'react';
import { Radio } from 'antd';
import styles from './currencies.module.css';
import currencyContext from '../../../contexts/currency';

function Currencies() {
  const { setCurrency } = useContext(currencyContext);
  return (
    <div className={styles.currencies}>
      <Radio.Group
        defaultValue="usd"
        buttonStyle="solid"
        onChange={obj => setCurrency(obj.target.value)}
      >
        <Radio.Button className={styles.button} value="usd">
          &#36;
        </Radio.Button>
        <Radio.Button className={styles.button} value="eur">
          &euro;
        </Radio.Button>
        <Radio.Button className={styles.button} value="rub">
          &#8381;
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default Currencies;
