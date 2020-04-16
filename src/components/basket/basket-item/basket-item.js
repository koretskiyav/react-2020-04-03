import React from 'react';
import PropTypes from 'prop-types';
import styles from './basket-item.module.css';

function BasketItem({ item, count = 0, onIncrement, onDecrement, onReset }) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.itemName}>{item.name}</div>
      <div>{count}</div>
      <div className={styles.itemTotalPrice}>{item.price * count}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

BasketItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default BasketItem;
