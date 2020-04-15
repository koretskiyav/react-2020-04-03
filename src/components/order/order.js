import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';

import styles from './order.module.css';
import { decrement, increment, clear } from '../../redux/actions';

function Order({ order, onIncrement, onDecrement, onClear }) {
  const orderSum = useMemo(() => {
    return order.reduce((acc, cv) => acc + cv[1].count * cv[1].price, 0);
  }, [order]);

  return Object.keys(order).length > 0 ? (
    <div className={styles.basket}>
      <div>
        {order.map(product => (
          <div key={product[0]} className={styles.product}>
            <span className={styles.name}>{product[1].name}</span>
            <div onClick={() => onIncrement(product[1])}>
              <PlusCircleOutlined />
            </div>
            <div onClick={() => onDecrement(product[1])}>
              <MinusCircleOutlined />
            </div>
            <div onClick={() => onClear(product[0])}>
              <DeleteOutlined />
            </div>
            <div>{product[1].count}</div>
            <div>{product[1].count * product[1].price} $</div>
          </div>
        ))}
      </div>
      <div>
        <hr />
        <p>Order sum: {orderSum} $</p>
      </div>
    </div>
  ) : null;
}

Order.propTypes = {
  order: PropTypes.array.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onClear: PropTypes.func
};

const mapStateToProps = state => ({
  order: Object.entries(state.order)
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onClear: clear
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
