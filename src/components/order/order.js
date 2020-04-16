import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import OrderItem from './order-item';

function Order(props) {
  const { order } = props;
  const totalCost = useMemo(
    () =>
      Object.entries(order).reduce(
        (acc, [, order]) => acc + order.price * order.count,
        0
      ),
    [order]
  );

  return (
    Object.keys(order).length > 0 && (
      <div>
        {Object.keys(order).map(key => (
          <OrderItem key={key} item={{ ...order[key], id: key }} />
        ))}
        <div
          style={{
            textAlign: 'right',
            paddingRight: 50,
            background: 'white',
            fontSize: 20
          }}
        >
          Total cost: {totalCost}$
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps)(Order);
