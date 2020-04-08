import React from 'react';
import { Button } from 'antd';
import { Card } from 'antd';
import counter from '../hocs/counter';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <Card
        title={props.dish.name}
        extra={<strong>${props.dish.price}</strong>}
        style={{ width: 300 }}
      >
        <Button type="primary" shape="circle" onClick={decrement}>
          -
        </Button>
        <span className="dish-count">{count}</span>
        <Button type="primary" shape="circle" onClick={increment}>
          +
        </Button>
      </Card>
    </div>
  );
}

export default counter(Dish);
