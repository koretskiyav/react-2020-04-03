import React from 'react';
import { useAmount } from '../hooks';

export function Counter(WrappedComponent) {
  const HocComponent = ({ ...props }) => {
    // in case we want to change our 'Count' variable name
    const [count, { decrement, increment }] = useAmount({
      initialCount: 0,
      maxCount: 20
    });

    return (
      <WrappedComponent
        {...props}
        count={count}
        decrement={decrement}
        increment={increment}
      />
    );
  };

  return HocComponent;
}
