import React, { useState, useMemo } from 'react';
import { Layout } from 'antd';
import RestaurantsNavigation from './restaurants-navigation';
import Restaurant from './restaurant';

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

  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <RestaurantsNavigation
          restaurants={props.restaurants}
          onRestaurantChange={id => setActiveRestaurant(id)}
        />
      </Header>
      <Content>
        <Restaurant restaurant={activeRestaurant} style={{ height: '!00%' }} />
      </Content>
    </Layout>
  );
}
