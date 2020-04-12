import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dish from '../dish';
import { Typography } from 'antd';

class Dishes extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
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
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    );
  }
}

Dishes.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Dishes;
