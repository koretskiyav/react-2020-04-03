import React, { Component, useEffect } from 'react';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';

import styles from './restaurant.module.css';
import { connect } from 'react-redux';
import { loadCollectionScoped } from '../../redux/actions';
import { REVIEWS_COLLECTION } from '../../redux/constants';
function Restaurant({
  id,
  name = '',
  menu = [],
  reviews = [],
  loadReviews,
  isLoading
}) {
  useEffect(() => {
    loadReviews(id);
  }, [loadReviews, id]);

  if (isLoading) return <h3>Loading...</h3>;

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
        <AverageRating ids={reviews} />
      </Hero>
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </div>
  );
}

export default connect(
  (state, ownProps) => ({
    id: ownProps.restaurant.id,
    name: ownProps.restaurant.name,
    menu: ownProps.restaurant.menu,
    reviews: ownProps.restaurant.reviews
  }),
  { loadReviews: loadCollectionScoped(REVIEWS_COLLECTION) }
)(Restaurant);
