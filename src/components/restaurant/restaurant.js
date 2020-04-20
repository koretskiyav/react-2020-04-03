import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import ContentTabs from '../content-tabs';
import { connect } from 'react-redux';

import styles from './restaurant.module.css';
class Restaurant extends Component {
  render() {
    const { name, menu, reviews } = this.props.restaurant;
    console.log(reviews);

    const contentItems = [
      {
        tabTitle: 'Menu',
        tabContent: <Menu menu={menu} />
      },
      {
        tabTitle: 'Reviews',
        tabContent: <Reviews reviews={reviews} />
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
  menu: PropTypes.array,
  reviews: PropTypes.array
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch({
    type: 'selectRestaurant',
    payload: {
      id: ownProps.restaurant.id
    }
  });
  return {};
};

export default connect(null, mapDispatchToProps)(Restaurant);
