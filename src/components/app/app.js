import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
import { Layout } from 'antd';
import Header from '../header';
import Basket from '../basket';

import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';

function App() {
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('$');

  const recalculate = value => {
    switch (currency) {
      case '$':
        return value;
      case '€':
        return (value * 1.3).toFixed(2);
      default:
        return value;
    }
  };

  return (
    <div>
      <Layout>
        <UserProvider value={{ userName, setName }}>
          <CurrencyProvider value={{ currency, setCurrency, recalculate }}>
            <Header />
            <Layout.Content>
              <Switch>
                <Route path="/checkout" component={Basket} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route path="/error" render={() => <h1>Error page</h1>} />
                <Route
                  path="/checkout-done"
                  render={() => <h1>Thank you for your order!</h1>}
                />
                <Redirect to="restaurants" />
              </Switch>
            </Layout.Content>
          </CurrencyProvider>
        </UserProvider>
      </Layout>
    </div>
  );
}

export default App;
