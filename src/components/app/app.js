import React, { Component } from 'react';
import Restaurants from '../restaurants';
import { Layout } from 'antd';
import Header from '../header';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

export default App;
