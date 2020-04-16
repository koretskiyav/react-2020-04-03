import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { increment, decrement, clear } from '../../../redux/actions';
import styles from './order.module.css';

function Order(props) {
  const { id, name, price, count, onIncrement, onDecrement, onClear } = props;
  return (
    <div className={styles.order}>
      <Row>
        <Col span={16}>
          <div>
            <div>{name}</div>
            <div>
              <Button
                onClick={() => onClear(id)}
                size="small"
                className={styles.inlineBlockCenter}
              >
                Clear
              </Button>
            </div>
          </div>
        </Col>
        <Col span={5}>
          <div className={styles.inlineBlock}>
            <div>{count}</div>
            <Button.Group>
              <Button
                size="small"
                icon={<MinusOutlined />}
                onClick={() => onDecrement(id, name, price)}
              />
              <Button
                size="small"
                icon={<PlusOutlined />}
                onClick={() => onIncrement(id, name, price)}
              />
            </Button.Group>
          </div>
        </Col>
        <Col span={3}>
          <div style={{ textAlign: 'center', padding: '1em 0' }}>
            {price * count} $
          </div>
        </Col>
      </Row>
    </div>
  );
}

Order.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onClear: clear
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
