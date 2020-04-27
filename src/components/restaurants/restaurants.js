import React from 'react';
import { Col, Row, Tabs } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';

import styles from './restaurants.module.css';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../redux/selectors';

const { TabPane } = Tabs;

function Restaurants({ restaurants, isLoading, restaurantId, page, history }) {
  return (
    <Tabs
      activeKey={restaurantId}
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
      onTabClick={id => history.push(`/restaurants/${id}`)}
    >
      {restaurants.map(restaurant => (
        <TabPane
          tab={restaurant.name}
          key={restaurant.id}
          className={styles.tabPane}
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <Restaurant
                restaurant={restaurant}
                page={page}
                history={history}
              />
            </Col>
          </Row>
        </TabPane>
      ))}
    </Tabs>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(state => ({
  restaurants: restaurantsListSelector(state),
  isLoading: restaurantsLoadingSelector(state)
}))(Restaurants);
