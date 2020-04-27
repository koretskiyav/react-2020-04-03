import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Tabs } from 'antd';

import Menu from '../menu';
import AverageRating from '../average-rating';
import Reviews from '../reviews';
import Hero from '../hero';

import styles from './restaurant.module.css';

class Restaurant extends Component {
  render() {
    const { id, name, menu, reviews } = this.props.restaurant;
    const { TabPane } = Tabs;
    const { history, match } = this.props;
    console.log(history, match);

    const contentItems = [
      {
        tabTitle: 'Menu',
        tabContent: <Menu menu={menu} restaurantId={id} />,
        tabKey: 'menu'
      },
      {
        tabTitle: 'Reviews',
        tabContent: <Reviews reviews={reviews} restaurantId={id} />,
        tabKey: 'reviews'
      }
    ];

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
          onTabClick={tabKey =>
            history.push(history.push(`/restaurants/${id}/${tabKey}`))
          }
        >
          {contentItems.map(item => (
            <TabPane
              tab={item.tabTitle}
              key={item.tabKey}
              className={styles.tabPane}
            >
              <Row type="flex" justify="center">
                <Col span={24}>{item.tabContent}</Col>
              </Row>
            </TabPane>
          ))}
        </Tabs>
        ;
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
