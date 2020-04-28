import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import { totalSelector, orderProductsSelector } from '../../redux/selectors';

function Basket({ title = 'Basket', className, total, orderProducts }) {
  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
        <BasketItem
          product={product}
          amount={amount}
          key={product.id}
          subtotal={subtotal}
          restaurantId={restaurantId}
        />
      ))}
      <hr />

      <BasketRow leftContent="Sub-total" rightContent={`${total} $`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${total} $`} />
      <Link to="/checkout">
        <Button type="primary" size="large" block>
          order
        </Button>
      </Link>
    </div>
  );
}

export default connect(state => ({
  total: totalSelector(state),
  orderProducts: orderProductsSelector(state)
}))(Basket);
