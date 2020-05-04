import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Col, Row, Typography } from 'antd';
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './basket-item.module.css';

import { increment, decrement, remove } from '../../../redux/actions';
import { Consumer as CurrencyConsumer } from '../../../contexts/currency';

function BasketItem({
  product,
  amount,
  subtotal,
  restaurantId,
  increment,
  decrement,
  remove
}) {
  return (
    <Row type="flex" align="middle" className={styles.basketItem}>
      <Col span={12} align="left">
        <Link to={`/restaurants/${restaurantId}/menu`}>
          <Typography.Text>{product.name}</Typography.Text>
        </Link>
      </Col>
      <Col span={12} align="right">
        <div className={styles.counter}>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon={<MinusOutlined />}
            onClick={() => decrement(product.id)}
          />
          <Typography.Text className={styles.count}>{amount}</Typography.Text>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon={<PlusOutlined />}
            onClick={() => increment(product.id)}
          />
          <Typography.Text className={styles.count}>
            <CurrencyConsumer>
              {({ cur }) => `${cur(subtotal)}`}
            </CurrencyConsumer>
          </Typography.Text>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon={<CloseOutlined />}
            onClick={() => remove(product.id)}
          />
        </div>
      </Col>
    </Row>
  );
}

export default connect(null, { increment, decrement, remove })(BasketItem);
