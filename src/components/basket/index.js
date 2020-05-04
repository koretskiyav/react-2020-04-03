import cx from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import BasketModal from './basket-modal';

import {
  totalSelector,
  orderProductsSelector,
  pathSelector
} from '../../redux/selectors';
import { sendOrder } from '../../redux/actions';

import currencyContext from '../../contexts/currency';
import { Consumer as UserConsumer } from '../../contexts/user';

function Basket({ className, total, orderProducts, pathname, onSendOrder }) {
  const { cur } = useContext(currencyContext);
  return (
    <div className={cx(styles.basket, className)}>
      <BasketModal />
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

      <BasketRow leftContent="Sub-total" rightContent={`${cur(total)}`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${cur(total)}`} />
      <Link to="/checkout">
        <Button
          type="primary"
          size="large"
          block
          onClick={() => {
            if (new RegExp('/checkout').test(pathname)) {
              onSendOrder();
            }
          }}
        >
          order
        </Button>
      </Link>
    </div>
  );
}

export default connect(
  state => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    pathname: pathSelector(state)
  }),
  dispatch => ({
    onSendOrder: () => dispatch(sendOrder())
  })
)(Basket);
