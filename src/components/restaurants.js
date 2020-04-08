import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './restaurants-navigation';
import Restaurant from './restaurant';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        restaurant => restaurant.id === activeRestaurantId
      ),
    [props.restaurants, activeRestaurantId]
  );

  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Header>
        <RestaurantsNavigation
          restaurants={props.restaurants}
          onRestaurantChange={id => setActiveRestaurant(id)}
        />
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Restaurant restaurant={activeRestaurant} />
      </Content>
    </Layout>
  );
}
