import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Tabs } from 'antd';
import { Route } from 'react-router-dom';
import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';

import styles from './restaurant.module.css';

const { TabPane } = Tabs;

class Restaurant extends Component {
  render() {
    const { name, menu, reviews } = this.props.restaurant;

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Route
          path="/restaurants/:id/:tab"
          render={({ match, history }) => {
            const { id, tab } = match.params;

            return (
              <Tabs
                activeKey={tab}
                onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
                tabPosition="top"
                animated={false}
                className={styles.contentTabs}
              >
                <TabPane tab="Menu" key="menu" className={styles.tabPane}>
                  <Row type="flex" justify="center">
                    <Col span={24}>
                      <Menu menu={menu} restaurantId={id} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Reviews" key="reviews" className={styles.tabPane}>
                  <Row type="flex" justify="center">
                    <Col span={24}>
                      <Reviews reviews={reviews} restaurantId={id} />
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            );
          }}
        />
      </div>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array
};

export default Restaurant;
