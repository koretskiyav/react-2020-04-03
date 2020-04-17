import React from 'react';
import { connect } from 'react-redux';
import OrderDish from './order-dish';

//import PropTypes from 'prop-types';

import styles from './order.module.css';

//import dishOrder from '../dish-order';

function Order(props) {
  const { order } = props;
  const orderList = Object.values(order); // надо было store.order массивом делать
  const totalSum = orderList.reduce(
    (sum, item) => sum + item.dish.price * item.amount,
    0
  );
  return (
    <div className={styles.order}>
      <p>Заказ на сумму {totalSum} $</p>
      {orderList.map(item => (
        <OrderDish key={item.dish.id} dish={item.dish} />
      ))}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  order: state.order
});

export default connect(mapStateToProps)(Order);
