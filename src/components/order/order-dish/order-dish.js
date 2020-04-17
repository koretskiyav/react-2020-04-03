import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './order-dish.module.css';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';

import { increment, decrement, deleteOrderItem } from '../../../redux/actions';

function OrderDish(props) {
  const { dish, count, onIncrement, onDecrement, onDeleteOrderItem } = props;

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
              <Button
                className={styles.button}
                icon={<DeleteOutlined />}
                onClick={() => onDeleteOrderItem(dish)}
                data-id="dish-increment"
              />
            </Button.Group>
            <div className={styles.price}>Сумма {dish.price * count} $</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

OrderDish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired, // для Redux
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDeleteOrderItem: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.dish.id]
    ? state.order[ownProps.dish.id].amount || 0
    : 0
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onDeleteOrderItem: deleteOrderItem
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDish);
