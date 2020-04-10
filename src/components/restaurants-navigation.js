import React from 'react';
const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  button: {
    padding: 10
  }
};

export default function RestaurantsNavigation(props) {
  return (
    <div style={styles.root}>
      {props.restaurants.map(restaurant => (
        <div key={restaurant.id} style={styles.button}>
          <button onClick={() => props.onRestaurantChange(restaurant.id)}>
            {restaurant.name}
          </button>
        </div>
      ))}
    </div>
  );
}
