import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Col, Row, Typography } from 'antd';
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import { getBasketData } from '../../redux/selectors/orders';
import OrderItem from '../order-item';

function Order(props) {
  const {
    basketData: { orders, total }
  } = props;
  const ordersList =
    orders &&
    orders.length > 0 &&
    orders.map(order => <OrderItem key={order.id} order={order} />);

  return (
    <div>
      <h3>Basket</h3>

      {ordersList}

      <Row type="flex" align="middle">
        <Col span={12} align="left">
          <Typography.Text>Total:</Typography.Text>
        </Col>
        <Col span={12} align="right">
          <Typography.Text>{total} $</Typography.Text>
        </Col>
      </Row>

      <Button type="primary" size="large" block>
        order
      </Button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  basketData: getBasketData(state, ownProps.menu)
});

export default connect(mapStateToProps)(Order);
