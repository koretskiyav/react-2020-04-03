import React from 'react';
import { useToggle } from '../hooks';

export const RestaurantWrap = WrappedComponent => {
  const HocComponent = ({ ...props }) => {
    const [isToggledID, setToggleID] = useToggle('', props.selectedRestaurant);
    return (
      <WrappedComponent
        {...props}
        isToggledID={isToggledID}
        toggleID={setToggleID}
      />
    );
  };
  return HocComponent;
};
