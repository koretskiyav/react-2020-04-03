import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './order.module.css';
import {
  PlusOutlined,
  MinusOutlined,
  CommentOutlined,
  CloseOutlined
} from '@ant-design/icons';

import { increment, decrement, clearAmount } from '../../redux/actions';
function Order(props) {
  const { dishKey, dish, onIncrement, onDecrement, onClearAmount } = props;
  console.log(dishKey);

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {dish.name}
          </Typography.Title>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-id="dish-amount">
              {dish.amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon={<MinusOutlined />}
                onClick={() => onDecrement(dishKey, dish.name, dish.price)}
                data-id="dish-decrement"
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={() => onIncrement(dishKey, dish.name, dish.price)}
                data-id="dish-increment"
              />
              <Button
                className={styles.button}
                icon={<CloseOutlined />}
                onClick={() => onClearAmount(dishKey)}
                data-id="dish-clearamount"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

Order.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onClearAmount: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onClearAmount: clearAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
