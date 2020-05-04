import cx from 'classnames';
import React, { useContext, useMemo } from 'react';
import Loader from '../loaded';
import { Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import { checkout } from '../../redux/actions';
import {
  totalSelector,
  orderProductsSelector,
  checkoutLoadingSelector
} from '../../redux/selectors';
import { Consumer as UserConsumer } from '../../contexts/user';
import currencyContext, { currencies } from '../../contexts/currency';

function Basket({
  title = 'Basket',
  className,
  total,
  orderProducts,
  checkout,
  loading
}) {
  const { currency } = useContext(currencyContext);
  // fix rounding errors
  const totalInCurrency = useMemo(
    () => (total * currencies[currency].rate).toFixed(2),
    [total, currency]
  );
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';
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
      {loading ? (
        <Loader />
      ) : isCheckout ? (
        <Button onClick={() => checkout()} type="primary" size="large" block>
          order
        </Button>
      ) : (
        <Link to="/checkout">
          <Button type="primary" size="large" block>
            order
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(
  state => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    loading: checkoutLoadingSelector(state)
  }),
  { checkout }
)(Basket);
