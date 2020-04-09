import { useState } from 'react';

export function useAmount({ initialCount = 0, maxCount = 10, minCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const decrement = () =>
    setCount(prevCount => (prevCount > minCount ? prevCount - 1 : minCount));
  const increment = () =>
    setCount(prevCount => (prevCount >= maxCount ? maxCount : prevCount + 1));
  return [count, { decrement, increment }];
}
