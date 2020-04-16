import React from 'react';
import { connect } from 'react-redux';
import {
  getOrderedItems,
  showOrderedSum
} from '../../redux/selectors/menuSelectors';
import OrderedItem from './ordered-item/orderedItem';
import { deleteAll } from '../../redux/actions';

const styles = {
  position: 'fixed',
  top: 0,
  right: 0,
  backgroundColor: 'white',
  zIndex: 2
};

function OrderList({ orderedItemsList, totalSum, onRemoveAll }) {
  return (
    <div style={styles}>
      {orderedItemsList.map(orderedItemData => (
        <OrderedItem {...orderedItemData} key={orderedItemData.id} />
      ))}
      {orderedItemsList.length > 0 && (
        <center style={{ marginTop: '10px' }}>
          <button onClick={onRemoveAll}>Delete All</button>
          Total: {totalSum} $
        </center>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  orderedItemsList: getOrderedItems(state),
  totalSum: showOrderedSum(state)
});

const mapDispatchToProps = {
  onRemoveAll: deleteAll
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
