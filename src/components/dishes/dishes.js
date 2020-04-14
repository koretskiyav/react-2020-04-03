import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import Dish from '../dish';

class Dishes extends Component {
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
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Dishes;
