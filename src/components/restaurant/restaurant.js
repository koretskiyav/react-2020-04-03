import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';

import styles from './restaurant.module.css';
class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;

    const contentItems = [
      {
        tabTitle: 'Menu',
        tabContent: <Menu menu={menu} restaurantid={id} />
      },
      {
        tabTitle: 'Reviews',
        tabContent: <Reviews reviews={reviews} restaurantId={id} />
      }
    ];

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} restaurantId={id} />
        </Hero>
        {<ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />}
      </div>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  id: PropTypes.string
};

export default Restaurant;
