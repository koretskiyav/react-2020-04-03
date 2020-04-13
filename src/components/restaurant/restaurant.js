import React, { Component } from 'react';
import Dishes from '../dishes';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import styles from './restaurant.module.css';
import PropTypes from 'prop-types';

class Restaurant extends Component {
  render() {
    const { name, menu, reviews } = this.props.restaurant;

    return (
      <div>
        <Hero heading={name}>
          <AverageRating reviews={reviews} />
        </Hero>
        <div className={styles.restaurantContent}>
          <Reviews reviews={reviews} />
          <Dishes menu={menu} />
        </div>
      </div>
    );
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    reviews: PropTypes.array,
    menu: PropTypes.array
  }).isRequired
};

export default Restaurant;
