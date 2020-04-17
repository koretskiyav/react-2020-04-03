import cx from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';

function Basket({ title = 'Basket', className, total, orderProducts }) {
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
  const allProducts = state.restaurants.flatMap(restaurant => restaurant.menu);

  const orderProducts = Object.keys(state.order)
    .filter(productId => state.order[productId] > 0)
    .map(productId => allProducts.find(product => product.id === productId))
    .map(product => ({
      product,
      amount: state.order[product.id],
      subtotal: state.order[product.id] * product.price
    }));

  const total = orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0);

  return {
    total,
    orderProducts
  };
})(Basket);
