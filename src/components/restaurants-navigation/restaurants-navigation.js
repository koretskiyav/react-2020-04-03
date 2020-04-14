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
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onRestaurantChange: PropTypes.func.isRequired
};
