import React from 'react';
import { Button, Card } from 'antd';
import counter from '../../../../../../hocs/counter';
import './style.css'

function Dish(props) {
  const { count, decrement, increment } = props;

  const countControl = (
      <div className="dishCount">
        <div>&nbsp;</div>
        <div>{count}</div>
        <div>
          <Button type="primary" onClick={decrement}>
          -
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={increment}>
          +
          </Button>
        </div>
      </div>
    );
  const priceInfo = (
    <span><b>{props.dish.price} $</b></span>
  );

  return (
    <Card hoverable title={props.dish.name}
          extra={priceInfo}
          bordered={true} style={{ width: 350 }}>
      {countControl}
    </Card>
 );
}

export default counter(Dish);
