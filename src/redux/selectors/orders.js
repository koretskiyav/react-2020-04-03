export const getOrders = state =>
  state.order ? Object.entries(state.order) : [];
export const getBasketData = (state, menu) => {
  const orders = getOrders(state).map(([id, count]) => {
    const currentItem = menu.find(menu => menu.id === id);

    return {
      ...currentItem,
      subtotal: currentItem.price * count,
      count
    };
  });

  const total = orders.reduce((acc, order) => acc + order.subtotal, 0);

  return {
    orders,
    total
  };
};
