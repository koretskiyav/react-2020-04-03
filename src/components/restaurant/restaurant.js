import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';
import { loadReviews } from '../../redux/actions';

import styles from './restaurant.module.css';

function Restaurant({ restaurant, loadReviews }) {
  useEffect(() => {
    loadReviews(restaurant.id);
  }, [restaurant.id]);

  const contentItems = [
    {
      tabTitle: 'Menu',
      tabContent: <Menu restaurantId={restaurant.id} />
    },
    {
      tabTitle: 'Reviews',
      tabContent: (
        <Reviews reviews={restaurant.reviews} restaurantId={restaurant.id} />
      )
    }
  ];

  return (
    <div>
      <Hero heading={restaurant.name}>
        <AverageRating ids={restaurant.reviews} />
      </Hero>
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </div>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array
};

export default connect(null, { loadReviews })(Restaurant);
