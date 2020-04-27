import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Col, Row, Tabs } from 'antd';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';

import styles from './restaurant.module.css';

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { history, match } = this.props;

    console.log(match);
    const contentTypes = [
      {
        tabTitle: 'Menu',
        tabPath: 'menu',
        tabContent: <Menu menu={menu} restaurantId={id} />
      },
      {
        tabTitle: 'Reviews',
        tabPath: 'reviews',
        tabContent: <Reviews reviews={reviews} restaurantId={id} />
      }
    ];
    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Tabs
          activeKey={match?.params?.type}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={type => history.push(`/restaurants/${id}/${type}`)}
        >
          {contentTypes.map(type => (
            <Tabs.TabPane
              tab={type.tabTitle}
              key={type.tabPath}
              className={styles.tabPane}
            >
              <Row type="flex" justify="center">
                <Col span={24}>
                  <Route
                    path={`/restaurants/${id}`}
                    render={() => type.tabContent}
                  />
                </Col>
              </Row>
            </Tabs.TabPane>
          ))}
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
