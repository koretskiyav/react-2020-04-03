import React from 'react';
import styles from './restaurants-navigation.module.css';
import PropTypes from 'prop-types';
import { menuTypes } from '../dish/dish';
import { reviewsTypes } from '../reviews/reviews';

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
  onRestaurantChange: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.exact({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }),
      image: PropTypes.string,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          ...menuTypes
        })
      ),
      reviews: reviewsTypes
    })
  )
};
