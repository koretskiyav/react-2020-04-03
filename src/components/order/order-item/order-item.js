import React, { useMemo } from 'react';
import styles from './order-item.module.css';
import { Card, Typography, Button, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { increment, decrement, remove } from '../../../redux/actions';

function OrderItem(props) {
  const { item, onDecrement, onIncrement, onRemove } = props;
  const totalPrice = useMemo(() => item.count * item.price, [item]);

  return (
    item.count && (
      <Card className={styles.productDetailedOrderCard}>
        <Row type="flex" justify="space-between">
          <Col xs={16} md={16} lg={20} align="left">
            <Typography.Title level={4} className={styles.title}>
              {item.name}
            </Typography.Title>
            <Typography.Paragraph className={styles.description}>
              {item.ingredients.join(', ')}
            </Typography.Paragraph>
            <div className={styles.price}>{item.price} $</div>
          </Col>
          <Col xs={8} md={6} lg={4} align="right">
            <div className={styles.counter}>
              <div className={styles.count} data-id="dish-amount">
                {item.count}
              </div>
              <Button.Group>
                <Button
                  className={styles.button}
                  icon={<MinusOutlined />}
                  onClick={() => onDecrement(item)}
                  data-id="dish-decrement"
                />
                <Button
                  className={styles.button}
                  icon={<PlusOutlined />}
                  onClick={() => onIncrement(item)}
                  data-id="dish-increment"
                />
                <Button
                  className={styles.button}
                  onClick={() => onRemove(item)}
                  data-id="dish-increment"
                >
                  Удалить
                </Button>
              </Button.Group>
              <div className={styles.count}>Cost: {totalPrice}$</div>
            </div>
          </Col>
        </Row>
      </Card>
    )
  );
}

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onRemove: remove
};

export default connect(() => ({}), mapDispatchToProps)(OrderItem);
