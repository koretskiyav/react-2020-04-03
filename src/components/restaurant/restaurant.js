import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';
import { Col, Row, Tabs } from 'antd';

import styles from './restaurant.module.css';

const { TabPane } = Tabs;

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { match, history } = this.props;

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Tabs
          activeKey={match.params.item}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={item =>
            history.push(`/restaurants/${match.params.id}/${item}`)
          }
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
