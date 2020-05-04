import cx from 'classnames';
import React, { useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import {
  totalSelector,
  orderProductsSelector,
  isOrderPendingSelector
} from '../../redux/selectors';
import { Consumer as UserConsumer } from '../../contexts/user';
import { order } from '../../redux/actions';
import currencyContext from '../../contexts/currency';

function Basket({
  title = 'Basket',
  className,
  total,
  orderProducts,
  isPending,
  placeOrder
}) {
  const { currency, recalculate } = useContext(currencyContext);

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
        rightContent={`${recalculate(total)} ${currency}`}
      />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow
        leftContent="Total"
        rightContent={`${recalculate(total)} ${currency}`}
      />

      <Switch>
        <Route
          path="/restaurants/:id/:tab"
          render={() => (
            <Link to="/checkout">
              <Button type="primary" size="large" block>
                order
              </Button>
            </Link>
          )}
        />
        <Route
          path="/checkout"
          render={() => (
            <Button
              type="primary"
              size="large"
              block
              loading={isPending}
              onClick={placeOrder}
            >
              checkout
            </Button>
          )}
        />
      </Switch>
    </div>
  );
}

export default connect(
  state => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    isPending: isOrderPendingSelector(state)
  }),
  { placeOrder: order }
)(Basket);
