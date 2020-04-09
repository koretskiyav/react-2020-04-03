import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

const styles = {
  root: {
    padding: 10
  }
};

export default class App extends PureComponent {
  render() {
    return (
      <div style={styles.root}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
