import React, { Component } from 'react';
import { Col, Row, Tabs } from 'antd';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';

import styles from './restaurant.module.css';
class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { match, history } = this.props.routeProps;
    console.log(match);
    const defaultActiveKey =
      match?.params.page.toLowerCase() === 'reviews' ? 'reviews' : 'menu';
    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Tabs
          defaultActiveKey={defaultActiveKey}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
        >
          <Tabs.TabPane tab="Menu" key="menu" className={styles.tabPane}>
            <Row type="flex" justify="center">
              <Col span={24}>
                <Menu menu={menu} restaurantId={id} />
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Reviews" key="reviews" className={styles.tabPane}>
            <Row type="flex" justify="center">
              <Col span={24}>
                <Reviews reviews={reviews} restaurantId={id} />
              </Col>
            </Row>
          </Tabs.TabPane>
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
//onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
