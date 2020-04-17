import React from 'react';
import { decrement, increment, remove } from '../../../redux/actions';
import { connect } from 'react-redux';
import styles from '../../dish/dish.module.css';
import { Button, Card, Col, Row, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function Order(props) {
  const { id, name, price, count, onIncrement, onDecrement, onRemove } = props;
  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {name}
          </Typography.Title>
          <div className={styles.price}>Price: {price} $</div>
          <div className={styles.price}>Total: {price * count} $</div>
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
                onClick={() => onDecrement(id, name, price)}
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={() => onIncrement(id, name, price)}
              />
              <Button className={styles.button} onClick={() => onRemove(id)}>
                Remove
              </Button>
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

Order.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onRemove: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  count: state.order[ownProps.id] ? state.order[ownProps.id].count : 0
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onRemove: remove
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
