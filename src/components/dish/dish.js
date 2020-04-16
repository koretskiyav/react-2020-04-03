import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './dish.module.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { increment, decrement } from '../../redux/actions';

function Dish(props) {
  const { dish, count, fetchData, onIncrement, onDecrement } = props;

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
                onClick={() => onDecrement(dish)}
                data-id="dish-decrement"
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={() => onIncrement(dish)}
                data-id="dish-increment"
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
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.dish.id]?.count || 0
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
