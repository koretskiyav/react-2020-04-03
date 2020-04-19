export const normalize = arr =>
  arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
