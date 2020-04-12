import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dishes from '../dishes';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import styles from './restaurant.module.css';

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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.object,
    image: PropTypes.string,
    menu: PropTypes.array.isRequired,
    reviews: PropTypes.array
  })
};

export default Restaurant;
