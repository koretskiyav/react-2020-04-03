import cx from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import { totalSelector, orderProductsSelector } from '../../redux/selectors';

function Basket({ title = 'Basket', className, total, orderProducts }) {
  console.log('Basket');

  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      {orderProducts.map(({ product, amount, subtotal }) => (
        <BasketItem
          product={product}
          amount={amount}
          key={product.id}
          subtotal={subtotal}
        />
      ))}
      <hr />

      <BasketRow leftContent="Sub-total" rightContent={`${total} $`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${total} $`} />
      <Button type="primary" size="large" block>
        order
      </Button>
    </div>
  );
}

export default connect(state => {
  console.log('connect');

  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state)
  };
})(Basket);
