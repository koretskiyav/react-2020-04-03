import React from 'react';
import { Col, Row, Tabs } from 'antd';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';

import styles from './restaurants.module.css';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector
} from '../../redux/selectors';

const { TabPane } = Tabs;

function Restaurants({ restaurants, match, history }) {
  return (
    <Tabs
      activeKey={match.params.id}
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
      onTabClick={id => history.push(`/restaurants/${id}/menu`)}
    >
      {restaurants.map(restaurant => (
        <TabPane
          tab={restaurant.name}
          key={restaurant.id}
          className={styles.tabPane}
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <Route
                path={`/restaurants/${restaurant.id}/:contentItem`}
                render={routeProps => (
                  <Restaurant {...routeProps} restaurant={restaurant} />
                )}
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
