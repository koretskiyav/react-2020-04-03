import React from 'react';
import { Button } from 'antd';
import { Counter } from '../hocs';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <p>{props.dish.name}</p>
      <p>
        {count === 0 ? props.dish.price + '$' : props.dish.price * count + '$'}{' '}
      </p>
      <Button type="primary" onClick={decrement}>
        -
      </Button>
      {count}
      <Button type="primary" onClick={increment}>
        +
      </Button>
    </div>
  );
}

export default Counter(Dish);
