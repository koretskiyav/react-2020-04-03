import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';

import Product from '../product';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';
import {
  productsListSelector,
  productsLoadingSelector
} from '../../redux/selectors';

function Menu({ menu, loadProducts, isLoading, restaurantId }) {
  useEffect(() => {
    loadProducts(restaurantId);
  }, [restaurantId]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={15} lg={12}>
        {menu.map(product => (
          <Product key={product.id} id={product.id} />
        ))}
      </Col>
      <Col xs={0} md={7} lg={6}>
        <Basket />
      </Col>
    </Row>
  );
}

Menu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  loadProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  menu: productsListSelector(state),
  isLoading: productsLoadingSelector(state)
});

export default connect(mapStateToProps, { loadProducts })(Menu);
