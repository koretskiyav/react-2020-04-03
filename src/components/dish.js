import React from 'react';
import { Button, Card, Space } from 'antd';
import counter from '../hocs/counter';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <Card type="inner" title={props.dish.name}>
      <p>Price: {props.dish.price}</p>
      <p>
        <Space>
          Count:{count}
          <Button type="primary" onClick={decrement}>
            -
          </Button>
          <Button type="primary" onClick={increment}>
            +
          </Button>
        </Space>
      </p>
    </Card>
  );
}

export default counter(Dish);
