import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';

import styles from './restaurant.module.css';
import { connect } from 'react-redux';

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props;

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
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(PropTypes.string)
};

export default connect((state, ownProps) => ({
  name: state.restaurants[ownProps.id].name,
  menu: state.restaurants[ownProps.id].menu,
  reviews: state.restaurants[ownProps.id].reviews
}))(Restaurant);
