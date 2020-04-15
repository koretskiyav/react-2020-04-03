import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement, clear } from '../../../redux/actions';
function Order(props) {
  const { id, name, price, count, onIncrement, onDecrement, onClear } = props;
  return (
    <div>
      <div>
        {name}
        <button onClick={() => onClear(id)}>Очистить</button>
      </div>
      <div>{price * count}</div>
      <div>
        {count}
        <button onClick={() => onDecrement(id, name, price)}>-</button>
        <button onClick={() => onIncrement(id, name, price)}>+</button>
      </div>
    </div>
  );
}

Order.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onClear: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onClear: clear
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
