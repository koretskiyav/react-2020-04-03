import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './product.module.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { increment, decrement } from '../../redux/actions';
import { productAmountSelector, productSelector } from '../../redux/selectors';

function Product(props) {
  const { product, amount = 0, onIncrement, onDecrement } = props;

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {product.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {product.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{product.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon={<MinusOutlined />}
                onClick={() => onDecrement(product.id)}
                data-id="product-decrement"
              />
              <Button
                className={styles.button}
                icon={<PlusOutlined />}
                onClick={() => onIncrement(product.id)}
                data-id="product-increment"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  amount: productAmountSelector(state, props),
  product: productSelector(state, props)
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
