import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Order from './order';
import OrdersTotal from './orders-total';

function Orders(props) {
  const { orderList } = props;

  return (
    <div>
      <div> Orders</div>
      <div>
        {Object.entries(orderList).map(([id, order]) => (
          <Order
            key={id}
            id={id}
            name={order.name}
            price={order.price}
            count={order.count}
          />
        ))}
      </div>
      <div>
        <OrdersTotal orders={orderList} />
      </div>
    </div>
  );
}

Orders.propTypes = {
  orderList: PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.object
  })
};

const mapStateToProps = state => ({
  orderList: state.order
});

export default connect(mapStateToProps)(Orders);
