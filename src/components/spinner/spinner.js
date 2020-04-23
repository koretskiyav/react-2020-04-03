import React from 'react';
import styles from './spinner.module.css';
import { Spin } from 'antd';

export default function Spinner({ tip, size, classStyle }) {
  return (
    <div className={classStyle && styles.loading}>
      <Spin tip={tip} size={size} />
    </div>
  );
}
