import React from 'react';
import { Button } from 'antd';
import counter from '../hocs/counter';
import { findByLabelText } from '@testing-library/react';

const styles = {
  root: {
    paddingTop: 40
  },
  button: {
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <div style={styles.root}>
      <p>{props.dish.name}</p>
      <p>{props.dish.price} руб.</p>
      <div style={styles.button}>
        <Button type="primary" size="small" onClick={decrement}>
          -
        </Button>
        <Button type="primary" size="small" onClick={increment}>
          +
        </Button>
      </div>
      {count} шт.
    </div>
  );
}

export default counter(Dish);
