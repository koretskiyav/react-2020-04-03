import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { Col, Row, Typography } from 'antd';
import Basket from '../basket';
import { connect } from 'react-redux';
import { existMenuSelector, menuLoadingSelector } from '../../redux/selectors';
import { loadMenu } from '../../redux/actions';
import Spinner from '../spinner';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  state = {
    error: null
  };

  componentDidMount() {
    this.props.loadMenu(this.props.restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, isLoading } = this.props;

    if (this.state.error) {
      return <Typography>{this.state.error.message}</Typography>;
    }

    if (isLoading) return <Spinner size="small" />;

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

const mapStateToProps = (state, props) => ({
  menu: existMenuSelector(state, props),
  isLoading: menuLoadingSelector(state)
});

export default connect(mapStateToProps, { loadMenu })(Menu);
