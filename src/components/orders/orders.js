import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Order from './order';
import OrdersTotal from './orders-total';

import styles from './orders.module.css';
import { List } from 'antd';

function Orders(props) {
  const { orderList } = props;
  const items = Object.entries(orderList);
  return (
    <List
      className={styles.orders}
      header={<div className={styles.head}>Orders</div>}
      footer={<OrdersTotal orders={orderList} />}
      bordered
      size="small"
      split="false"
      itemLayout="vertical"
      dataSource={items}
      renderItem={([id, order]) => (
        <List.Item key={id}>
          <Order
            id={id}
            name={order.name}
            price={order.price}
            count={order.count}
          />
        </List.Item>
      )}
    />
  );
}

Orders.propTypes = {
  orderList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    order: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  })
};

const mapStateToProps = state => ({
  orderList: state.order
});

export default connect(mapStateToProps)(Orders);
