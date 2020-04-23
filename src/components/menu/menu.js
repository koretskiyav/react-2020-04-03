import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { Col, Row, Typography } from 'antd';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';
import { connect } from 'react-redux';
import { productsLoadedSelector } from '../../redux/selectors';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error });
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <Typography>{this.state.error.message}</Typography>;
    }

    if (this.props.loaded) {
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
    } else return <h3>Products loading...</h3>;
  }
}

export default connect(
  state => ({
    loaded: productsLoadedSelector(state)
  }),
  { fetchProducts: loadProducts }
)(Menu);
