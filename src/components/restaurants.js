import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './restaurants-navigation';
//import Menu from './menu';
import Restaurant from './restaurant';
import { Layout } from 'antd';

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
    <Layout className="layout">
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
}
