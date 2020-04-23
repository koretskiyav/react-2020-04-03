import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { Col, Row, Typography } from 'antd';
import Basket from '../basket';
import { connect } from 'react-redux';
import { productsLoadingSelector } from '../../redux/selectors';

import { loadProducts } from '../../redux/actions';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    loadProducts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    restaurantId: PropTypes.string
  };

  state = {
    error: null
  };

  componentDidMount() {
    this.props.loadProducts(this.props.restaurantid);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.props.isLoading) return <h3>...Loading</h3>;
    const { menu } = this.props;
    if (this.state.error) {
      return <Typography>{this.state.error.message}</Typography>;
    }

    if (!menu) return <h3> Loading...</h3>;

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
    isLoading: productsLoadingSelector(state)
  }),
  { loadProducts }
)(Menu);
