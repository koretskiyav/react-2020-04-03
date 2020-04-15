import React from 'react';
import PropTypes from 'prop-types';

import styles from './restaurants-navigation.module.css';

export default function RestaurantsNavigation(props) {
  const { restaurants, onRestaurantChange } = props;

  return (
    <div className={styles.list}>
      {restaurants.map(({ id, name }) => (
        <span
          key={id}
          className={styles.restaurant}
          onClick={() => onRestaurantChange(id)}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

RestaurantsNavigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onRestaurantChange: PropTypes.func.isRequired
};
