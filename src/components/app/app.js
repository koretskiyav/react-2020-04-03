import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Restaurants from '../restaurants';
import { Layout } from 'antd';
import Header from '../header';
import Basket from '../basket';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

export default App;
