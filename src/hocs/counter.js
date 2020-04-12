import React from 'react';

import { useAmount } from '../hooks/use-amount';

function counter(WrappedComponent) {
  const HocComponent = ({ ...props }) => {
    const { count, decrement, increment } = useAmount();

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
