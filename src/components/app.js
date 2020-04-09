import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
