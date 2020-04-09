import React from 'react';
import { useNav } from '../hooks';

export const NavWrap = WrappedComponent => {
  const HocComponent = ({ ...props }) => {
    const [activeRestaurantId, setActiveRestaurant, activeRestaurant] = useNav(
      props.restaurants[0].id,
      props.restaurants,
      'restaurant'
    );

    return (
      <WrappedComponent
        {...props}
        activeRestaurantId={activeRestaurantId}
        setActiveRestaurant={setActiveRestaurant}
        activeRestaurant={activeRestaurant}
      />
    );
  };

  return HocComponent;
};
