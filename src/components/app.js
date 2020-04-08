import React, { PureComponent } from 'react';
import Restaurants from './restaurants/restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <h1>Order Delivery</h1>
        <h2>Pick a restaurant:</h2>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
