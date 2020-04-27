import React from 'react';
import { Col, Row, Tabs } from 'antd';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContentType from '../pages/content-type';

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
                path={`/restaurants/${restaurant.id}`}
                render={routeProps => (
                  <ContentType {...routeProps} restaurant={restaurant} />
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
  ).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(state => ({
  restaurants: restaurantsListSelector(state),
  isLoading: restaurantsLoadingSelector(state)
}))(Restaurants);
