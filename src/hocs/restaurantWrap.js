import React from 'react';
import { useToggle } from '../hooks';

export const RestaurantWrap = WrappedComponent => {
  const HocComponent = ({ ...props }) => {
    const [isToggled, setToggle] = useToggle('', props.selectedRestaurant);
    return (
      <WrappedComponent {...props} isToggled={isToggled} toggle={setToggle} />
    );
  };
  return HocComponent;
};
