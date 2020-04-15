import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectOrderItems, selectTotalPrice } from '../../redux/selectors';
import OrderItem from '../orderItem/orderItem';

function Order({ orderItems, totalPrice }) {
  return (
    <div>
      <h2>Order</h2>
      {orderItems.map(item => (
        <OrderItem key={item.id} dish={item} />
      ))}
      <h2>Итого: {totalPrice} $</h2>
    </div>
  );
}

Order.propTypes = {
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  totalPrice: PropTypes.number
};

const mapStateToProps = state => ({
  orderItems: selectOrderItems(state),
  totalPrice: selectTotalPrice(state)
});

export default connect(mapStateToProps)(Order);
