import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';
import AddReview from '../add-review';

import styles from './restaurant.module.css';
class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;

    const contentItems = [
      {
        tabTitle: 'Menu',
        tabContent: <Menu menu={menu} />
      },
      {
        tabTitle: 'Reviews',
        tabContent: (
          <div>
            <Reviews reviews={reviews} />
            <AddReview restaurantId={id} />
          </div>
        )
      }
    ];

    return (
      <div>
        <Hero heading={name}>
          <AverageRating reviewIds={reviews} />
        </Hero>
        <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
      </div>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array
};

Restaurant.mapStateToProps = (state, { id }) => ({
  restaurant: state.restaurants[id]
});

export default connect(Restaurant.mapStateToProps)(Restaurant);
