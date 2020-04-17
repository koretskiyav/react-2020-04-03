import React from 'react';
import { connect } from 'react-redux';
import Order from './order';
import TotalPrice from './totalPrice';
import PropTypes from 'prop-types';

function Orders(props) {
  const { orders } = props;
  return (
    <div>
      <h1>Orders</h1>
      {Object.entries(orders).map(([id, order]) => (
        <Order
          key={id}
          id={id}
          price={order.price}
          count={order.count}
          name={order.name}
        />
      ))}
      <TotalPrice orders={orders} />
    </div>
  );
}

Orders.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  orders: state.order
});

export default connect(mapStateToProps)(Orders);
