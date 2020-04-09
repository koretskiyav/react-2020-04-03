import React from 'react';
import { Button, Card } from 'antd';
import counter from '../hocs/counter';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <Card
      title={props.dish.name}
      extra={`${props.dish.price} rub`}
      style={{ width: 300 }}
    >
      <p>Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="primary" onClick={decrement}>
          -
        </Button>
        <Button type="primary" onClick={increment}>
          +
        </Button>
      </div>
    </Card>
  );
}

export default counter(Dish);
