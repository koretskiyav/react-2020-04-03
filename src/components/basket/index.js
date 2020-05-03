import cx from 'classnames';
import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import { totalSelector, orderProductsSelector } from '../../redux/selectors';
import { Consumer as UserConsumer } from '../../contexts/user';
import currencyContext, { currencies } from '../../contexts/currency';

function Basket({ title = 'Basket', className, total, orderProducts }) {
  const { currency } = useContext(currencyContext);
  // fix rounding errors
  const totalInCurrency = useMemo(
    () => (total * currencies[currency].rate).toFixed(2),
    [total, currency]
  );
  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4} className={styles.title}>
        <UserConsumer>{({ userName }) => `${userName}'s order`}</UserConsumer>
      </Typography.Title>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <BasketRow
        leftContent="Sub-total"
        rightContent={`${totalInCurrency} ${currencies[currency].symbol}`}
      />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow
        leftContent="Total"
        rightContent={`${totalInCurrency} ${currencies[currency].symbol}`}
      />
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
