import { useState } from 'react';
import PropTypes from 'prop-types';

export function useAmount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

useAmount.propTypes = {
  initialCount: PropTypes.number
};
