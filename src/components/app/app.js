import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route path="/checkout" component={Basket} />
              <Route path="/restaurants/:id" component={Restaurants} />
              <Route path="/" component={NotFoundPage} />
            </Switch>
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

function NotFoundPage() {
  return <div>404 - not found</div>;
}

export default App;
