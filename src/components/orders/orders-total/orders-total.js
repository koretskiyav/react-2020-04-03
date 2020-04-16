import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './orders-total.module.css';

function OrdersTotal({ orders }) {
  const totalSum = useMemo(
    () =>
      Object.entries(orders).reduce(
        (acc, [, order]) => acc + order.count * order.price,
        0
      ),
    [orders]
  );
  return (
    <div className={styles.foot}>
      <span className={styles.total}>Total:</span>
      <span className={styles.price}>{totalSum} $</span>
    </div>
  );
}

OrdersTotal.propTypes = {
  orders: PropTypes.shape(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};

export default OrdersTotal;
