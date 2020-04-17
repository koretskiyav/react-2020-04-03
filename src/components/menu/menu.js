import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { Col, Row, Typography } from 'antd';
import Basket from '../basket';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <Typography>{this.state.error.message}</Typography>;
    }
    return (
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={15} lg={12}>
          {menu.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Col>
        <Col xs={0} md={7} lg={6}>
          <Basket />
        </Col>
      </Row>
    );
  }
}

export default Menu;
