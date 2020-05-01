import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Loaded from '../loaded';
import {
  totalSelector,
  orderProductsSelector,
  checkoutMatchPageSelector,
  orderLoadingSelector,
  orderErrorSelector
} from '../../redux/selectors';
import { makeOrder } from '../../redux/actions';
import { Consumer as UserConsumer } from '../../contexts/user';

function Basket({
  title = 'Basket',
  className,
  total,
  orderProducts,
  checkoutMatch,
  makeOrder,
  loading,
  error
}) {
  return (
    <div className={cx(styles.basket, className)}>
      {loading && (
        <div className={styles.loading}>
          <Loaded />
        </div>
      )}
      <Typography.Title level={3} className={styles.title}>
        <UserConsumer>{({ userName }) => `${userName}'s order`}</UserConsumer>
      </Typography.Title>
      {error && (
        <Typography.Title level={4} className={styles.error}>
          Oops, something went wrong :(
        </Typography.Title>
      )}
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

      <BasketRow leftContent="Sub-total" rightContent={`${total} $`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${total} $`} />
      {checkoutMatch ? (
        <Button type="primary" size="large" block onClick={makeOrder}>
          make order
        </Button>
      ) : (
        <Link to="/checkout">
          <Button type="primary" size="large" block>
            go to checkout
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
    checkoutMatch: checkoutMatchPageSelector(state),
    loading: orderLoadingSelector(state),
    error: orderErrorSelector(state)
  }),
  { makeOrder }
)(Basket);
