import React, { Component } from 'react';
import Restaurants from '../restaurants';
import { Layout } from 'antd';
import Header from '../header';
import propTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    restaurants: propTypes.array.isRequired
  };

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

export default App;
