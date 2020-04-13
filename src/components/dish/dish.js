import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './dish.module.css';
import counter from '../../hocs/counter';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function Dish(props) {
  const { dish, count, decrement, increment, fetchData } = props;

  useEffect(() => {
    fetchData && fetchData(dish.id);
    // eslint-disable-next-line
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
                className={styles.button}
                icon={<MinusOutlined />}
                onClick={decrement}
                data-id="dish-decrement"
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={increment}
                data-id="dish-increment"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

const dishType = (Dish.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
});

export const menuTypes = dishType.dish;

export default counter(Dish);
