import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './orderItem.module.css';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';

import { increment, decrement, deleteItem } from '../../redux/actions';
import { selectDishAmount } from '../../redux/selectors';
function OrderItem(props) {
  const { dish, count, onIncrement, onDecrement, onDelete } = props;

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
                onClick={() => onDecrement(dish.id)}
                data-id="dish-decrement"
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={() => onIncrement(dish.id)}
                data-id="dish-increment"
              />
              <Button
                className={styles.button}
                icon={<DeleteOutlined />}
                onClick={() => onDelete(dish.id)}
                data-id="dish-delete"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

OrderItem.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  deleteItem: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  count: selectDishAmount(state, ownProps.dish.id)
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onDelete: deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
