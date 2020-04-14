import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import styles from './dish.module.css';
import counter from '../../hocs/counter';

function Dish({ dish, count, decrement, increment, fetchData }) {
  useEffect(() => {
    fetchData && fetchData(dish.id);
  }, []);

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-id="dish-amount">
              {count}
            </div>
            <Button.Group>
              <Button
                data-id="dish-decrement"
                className={styles.button}
                icon={<MinusOutlined />}
                onClick={decrement}
              />
              <Button
                data-id="dish-increment"
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={increment}
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

Dish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  fetchData: PropTypes.func
};

export default counter(Dish);
