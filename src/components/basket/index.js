import cx from 'classnames';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography, Alert } from 'antd';
import { Redirect } from 'react-router-dom';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import {
  totalSelector,
  orderProductsSelector,
  orderSendingSelector,
  orderSentSelector,
  orderSentError
} from '../../redux/selectors';
import { Consumer as UserConsumer } from '../../contexts/user';
import { sendOrder } from '../../redux/actions';
import { Consumer as CurrencyConsumer } from '../../contexts/currency';

import styles from './basket.module.css';
import './basket.css';

function Basket({
  className,
  total,
  orderProducts,
  match,
  history,
  orderSending,
  orderSent,
  sendOrder,
  orderSentError
}) {
  const handleClick = () => {
    if (match?.path === '/checkout') {
      sendOrder();
    } else {
      history.push('/checkout');
    }
  };

  if (orderProducts.length === 0 && match?.path === '/checkout') {
    return <Redirect from="/checkout" to={`/restaurants`} />;
  }

  return orderSent ? (
    <Redirect from="/checkout" to="/checkoutDone" />
  ) : (
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
      <CurrencyConsumer>
        {({ sign, withCurrency }) => (
          <React.Fragment>
            <BasketRow
              leftContent="Sub-total"
              rightContent={`${withCurrency(total)} ${sign}`}
            />
            <BasketRow leftContent="Delivery costs" rightContent="FREE" />
            <BasketRow
              leftContent="Total"
              rightContent={`${withCurrency(total)} ${sign}`}
            />
          </React.Fragment>
        )}
      </CurrencyConsumer>
      <Button
        loading={orderSending}
        disabled={orderProducts.length === 0}
        type="primary"
        size="large"
        block
        onClick={handleClick}
      >
        order
      </Button>
      {orderSentError && (
        <div className={styles.error}>
          <Alert
            message="Something went wrong. Try again later :("
            type="error"
          />
        </div>
      )}
    </div>
  );
}

export default connect(
  state => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    orderSending: orderSendingSelector(state),
    orderSent: orderSentSelector(state),
    orderSentError: orderSentError(state)
  }),
  { sendOrder }
)(Basket);
