import React from 'react';
import PropTypes from 'prop-types';
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

counter.propTypes = {
  WrappedComponent: PropTypes.node.isRequired
};

export default counter;
