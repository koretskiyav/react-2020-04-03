import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';

import styles from './restaurant.module.css';
import { connect } from 'react-redux';

function Restaurant({ name, menu, reviews, id }) {
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
        <AverageRating reviews={reviews} />
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

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.restaurants[ownProps.restaurant];
  return {
    name: restaurant.name,
    menu: restaurant.menu,
    reviews: restaurant.reviews,
    id: restaurant.id
  };
};

export default connect(mapStateToProps)(Restaurant);
