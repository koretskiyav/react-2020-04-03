import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import { Col, Row, Tabs } from 'antd';

import cx from 'classnames';
import styles from './restaurant.module.css';

const { TabPane } = Tabs;
const tabPaneClassName = styles.tabPane;

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { page, history } = this.props;

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Tabs
          activeKey={page}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={tabId => history.push(`/restaurants/${id}/${tabId}`)}
        >
          <TabPane
            tab="Menu"
            key="menu"
            className={cx(styles.tabPane, tabPaneClassName)}
          >
            <Row type="flex" justify="center">
              <Col span={24}>
                {' '}
                <Menu menu={menu} restaurantId={id} />
              </Col>
            </Row>
          </TabPane>
          <TabPane
            tab="Reviews"
            key="reviews"
            className={cx(styles.tabPane, tabPaneClassName)}
          >
            <Row type="flex" justify="center">
              <Col span={24}>
                <Reviews reviews={reviews} restaurantId={id} />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
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
