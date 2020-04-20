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
    const { restaurant } = this.props;

    const contentItems = [
      {
        tabTitle: 'Menu',
        tabContent: <Menu menu={restaurant.menu} />
      },
      {
        tabTitle: 'Reviews',
        tabContent: <Reviews reviews={restaurant.reviews} />
      }
    ];

    return (
      <div>
        <Hero heading={restaurant.name}>
          <AverageRating reviews={restaurant.reviews} />
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

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.id]
});

export default connect(mapStateToProps)(Restaurant);
