import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import { Rate, Tabs } from 'antd';

export default function Restaurant({ restaurant }) {
  const rate = Math.round(
    Math.round(
      (restaurant.reviews.reduce((acc, elem) => acc + elem.rating, 0) /
        restaurant.reviews.length) *
        2
    ) / 2
  );
  const { TabPane } = Tabs;

  return (
    <div>
      <div style={{ 'text-align': 'center' }}>
        <h1>{restaurant.name} Restaurant</h1>
        <Rate disabled value={rate} />
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Menu" key="1">
          <Menu menu={restaurant.menu} />
        </TabPane>
        <TabPane tab="Reviews" key="2">
          <Reviews reviews={restaurant.reviews} />
        </TabPane>
      </Tabs>
    </div>
  );
}
