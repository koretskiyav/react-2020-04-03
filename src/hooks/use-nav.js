import { useState, useMemo, useEffect } from 'react';

export const useNav = (initial, data, selectedItemType) => {
  const [activeItemId, setActiveItem] = useState(
    initial,
    data,
    selectedItemType
  );

  const selectedItem = useMemo(
    () => data.find(data => data.id === activeItemId),
    [data, activeItemId]
  );

  useEffect(() => {
    const currentItem = selectedItem.name;
    console.log('---', `you are visiting ${currentItem} ${selectedItemType}`);

    return () => {}; // eslint-disable-next-line
  }, [activeItemId]);

  return [activeItemId, setActiveItem, selectedItem];
};
