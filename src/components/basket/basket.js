import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './basket.module.css';
import BasketItem from './basket-item';
import { increment, decrement, reset } from '../../redux/actions';

function Basket({ order, onIncrement, onDecrement, onReset }) {
  const orderIds = Object.keys(order);
  const totalPrice = useMemo(
    () =>
      orderIds.reduce(
        (acc, id) => acc + order[id].dish.price * order[id].count,
        0
      ),
    [orderIds, order]
  );

  return (
    <div className={styles.basket}>
      <div>Корзина</div>
      <div className={styles.dishes}>
        {orderIds.map(orderId => (
          <BasketItem
            key={orderId}
            item={order[orderId].dish}
            count={order[orderId].count}
            onIncrement={() => onIncrement(order[orderId].dish)}
            onDecrement={() => onDecrement(order[orderId].dish)}
            onReset={() => onReset(order[orderId].dish)}
          />
        ))}
      </div>
      <div>Итого: {totalPrice}</div>
    </div>
  );
}

Basket.propTypes = {
  order: PropTypes.object,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onReset: reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
