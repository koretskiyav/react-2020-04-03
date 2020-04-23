import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';
import { connect } from 'react-redux';

import styles from './restaurant.module.css';
import { loadReviewsSectionItem } from '../../redux/actions';
import { reviewLoadedRestaurantSelector } from '../../redux/selectors';
import { Rate } from 'antd';
import { LOAD_REVIEWS } from '../../redux/constants';
function Restaurant(props) {
  const { id, name, menu, reviews } = props.restaurant;

  useEffect(() => {
    props.loadReviewsSectionItem(id, 'reviews', LOAD_REVIEWS);
  }, [id]);

  const contentItems = [
    {
      tabTitle: 'Menu',
      tabContent: <Menu menu={menu} />
    },
    {
      tabTitle: 'Reviews',
      tabContent: <Reviews reviews={reviews} restaurantId={id} />
    }
  ];

  return (
    <div>
      <Hero heading={name}>
        {!props.isLoaded ? (
          <Rate value={5} />
        ) : (
          <AverageRating ids={reviews} restaurantId={id} />
        )}
      </Hero>
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </div>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array
};

export default connect(
  (state, props) => ({
    isLoaded: state.reviews.loaded[props.restaurant.id]
  }),
  {
    loadReviewsSectionItem
  }
)(Restaurant);
