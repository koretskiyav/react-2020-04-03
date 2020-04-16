import React from 'react';
import { increment, decrement, deleteItem } from '../../../redux/actions';
import { connect } from 'react-redux';
const styles = {
  margin: '10px'
};
function OrderedItem({
  name,
  amount,
  price,
  id,
  onIncrement,
  onDecrement,
  onDelete
}) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <span>{name}</span>
      <span style={{ marginLeft: '10px' }}> {price * amount} $ </span>

      <span>
        <button onClick={() => onIncrement(id)}>+</button>
        <span style={styles}>{amount}</span>
        <button onClick={() => onDecrement(id)}>-</button>
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.id] || 0
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onDelete: deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedItem);
