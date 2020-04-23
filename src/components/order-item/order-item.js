import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Typography } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

import { increment, decrement, removeOrder } from '../../redux/actions';

function OrderItem(props) {
  const { order, onIncrement, onDecrement, onRemoveOrder } = props;

  return (
    <Row type="flex" align="middle">
      <Col span={12} align="left">
        <Typography.Text>{order.name}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <div>
          <Button
            type="default"
            size="small"
            icon={<MinusOutlined />}
            onClick={onDecrement}
          />
          <Typography.Text>{order.count}</Typography.Text>
          <Button
            type="default"
            size="small"
            icon={<PlusOutlined />}
            onClick={onIncrement}
          />
          <Button
            type="danger"
            size="small"
            icon={<CloseOutlined />}
            onClick={onRemoveOrder}
          />
        </div>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => dispatch(increment(ownProps.order.id)),
  onDecrement: () => dispatch(decrement(ownProps.order.id)),
  onRemoveOrder: () => dispatch(removeOrder(ownProps.order.id))
});

export default connect(null, mapDispatchToProps)(OrderItem);
