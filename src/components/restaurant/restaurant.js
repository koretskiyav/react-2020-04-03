import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import AverageRating from '../average-rating';
import Hero from '../hero';
import { Col, Row, Tabs } from 'antd';
import styles from './restaurant.module.css';
const { TabPane } = Tabs;

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { history, match } = this.props;

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>

        <Tabs
          activeKey={match.params.tabKey}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={tabKey => {
            history.push(`/restaurants/${id}/${tabKey}`);
          }}
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
