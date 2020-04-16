import React from 'react';
import Order from '../order';
import { connect } from 'react-redux';

function Orders(props) {
  const { curOrders } = props;

  const items = [];
  let summ = 0;

  for (let key in curOrders) {
    items.push(<Order key={key} dish={curOrders[key]} dishKey={key}></Order>);
    summ += curOrders[key].amount * curOrders[key].price;
  }

  return (
    <div>
      <h3>Your ordes: {summ} $</h3>
      {items}
    </div>
  );
}

const mapStateToProps = state => ({
  curOrders: state.order
});

export default connect(mapStateToProps)(Orders);
