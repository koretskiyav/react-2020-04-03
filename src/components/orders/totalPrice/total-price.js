import React, { useMemo } from 'react';
import { Card, Col, Row } from 'antd';
import styles from '../../dish/dish.module.css';
import PropTypes from 'prop-types';

function TotalPrice(props) {
  const { orders } = props;
  const totalPrice = useMemo(
    () =>
      Object.entries(orders).reduce(
        (sum, [, order]) => sum + order.count * order.price,
        0
      ),
    [orders]
  );

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <div className={styles.price}>Total: {totalPrice} $</div>
        </Col>
      </Row>
    </Card>
  );
}

TotalPrice.propTypes = {
  orders: PropTypes.shape({
    price: PropTypes.number,
    count: PropTypes.number
  }).isRequired
};

export default TotalPrice;
