import { useState, useEffect } from 'react';

export const useToggle = (initial, data) => {
  const [isToggledID, setToggledId] = useState(initial, data);
  useEffect(() => {
    setToggledId(0);
    return () => {};
  }, [data]);

  return [isToggledID, setToggledId];
};
