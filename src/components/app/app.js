import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
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
            <Switch>
              <Route path="/checkout" component={Basket} />
              <Route path="/restaurants" component={RestaurantPage} />
              <Route path="/" render={() => <div>404 - not found</div>} />
            </Switch>
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

export default App;
