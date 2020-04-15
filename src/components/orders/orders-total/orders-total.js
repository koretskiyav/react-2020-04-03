import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <h2>Total: {totalSum} $</h2>
    </div>
  );
}

OrdersTotal.propTypes = {
  orders: PropTypes.shape(
    PropTypes.shape({
      count: PropTypes.number,
      price: PropTypes.number
    })
  )
};

export default OrdersTotal;
