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

    const contentItems = [
      {
        tabTitle: 'menu',
        tabContent: <Menu menu={menu} restaurantId={id} />
      },
      {
        tabTitle: 'reviews',
        tabContent: <Reviews reviews={reviews} restaurantId={id} />
      }
    ];

    return (
      <div>
        <Hero heading={name}>
          <AverageRating ids={reviews} />
        </Hero>
        <Tabs
          activeKey={match?.params?.contentItem || contentItems[0].tabTitle}
          tabPosition="top"
          animated={false}
          className={styles.contentTabs}
          onTabClick={contentItem =>
            history.push(`/restaurants/${id}/${contentItem}`)
          }
        >
          {contentItems.map(contentItem => (
            <Tabs.TabPane
              tab={contentItem.tabTitle}
              key={contentItem.tabTitle}
              className={styles.tabPane}
            >
              <Row type="flex" justify="center">
                <Col span={24}>
                  <Route
                    path={`${match.path}`}
                    render={() => contentItem.tabContent}
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
