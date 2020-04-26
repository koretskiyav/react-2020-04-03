import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { Col, Row, Typography } from 'antd';
import Basket from '../basket';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector
} from '../../redux/selectors';
import Loader from '../loaded';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  state = {
    error: null
  };

  componentDidMount() {
    const { loadProducts, restaurantId, loading, loaded } = this.props;
    if (!loading && !loaded) {
      loadProducts(restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return <Typography>{this.state.error.message}</Typography>;
    }
    return (
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={15} lg={12}>
          {menu.map(id => (
            <Product key={id} id={id} />
          ))}
        </Col>
        <Col xs={0} md={7} lg={6}>
          <Basket />
        </Col>
      </Row>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state, props),
    loaded: productsLoadedSelector(state, props)
  }),
  { loadProducts }
)(Menu);
