import React from 'react';
import { useAmount } from '../hooks/use-amount';

function counter(WrappedComponent) {
  const HocComponent = ({ initialCount, ...props }) => {
    const { count, decrement, increment } = useAmount(initialCount);

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

export default counter;
