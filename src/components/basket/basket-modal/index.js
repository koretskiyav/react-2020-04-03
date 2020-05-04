import React from 'react';
import styles from './basket-modal.module.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { orderLoadingSelector } from '../../../redux/selectors';

function BasketModal({ isLoading }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
  if (isLoading) {
    return (
      <div className={styles.modalLoading}>
        <div className={styles.loader}>
          <Spin indicator={antIcon} />;
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default connect(
  state => ({
    isLoading: orderLoadingSelector(state)
  }),
  null
)(BasketModal);
