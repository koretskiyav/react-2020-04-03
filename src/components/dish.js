import React from 'react';
import { Button } from 'antd';
import counter from '../hocs/counter';
import { Card } from 'antd';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <Card title={props.dish.name} style={{ width: 300, margin: 20 }}>
        <p>Ingredients: {props.dish.ingredients.join()}.</p>
        <p>Price: {props.dish.price}</p>
        Count: {count}
        <div>
          <Button
            type="primary"
            onClick={decrement}
            style={{ 'margin-right': 5 }}
          >
            -
          </Button>
          <Button type="primary" onClick={increment}>
            +
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default counter(Dish);
