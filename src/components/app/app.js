import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
import { Layout } from 'antd';
import Header from '../header';
import Basket from '../basket';

import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';

function App() {
  const [userName, setUser] = useState('Ivan');
  const [currency, setCurrency] = useState('USD');

  const calcCurrency = value => {
    switch (currency) {
      case 'USD':
        return value;
      case 'EUR':
        return 0.9 * value;
      case 'RUB':
        return 70 * value;
      default:
        return value;
    }
  };

  return (
    <div>
      <Layout>
        <UserProvider value={{ userName, setUser }}>
          <CurrencyProvider value={{ currency, setCurrency, calcCurrency }}>
            <Header />
            <Layout.Content>
              <Switch>
                <Route path="/checkout" component={Basket} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route path="/error" render={() => <h1>Error page</h1>} />
                <Route
                  path="/orderSucces"
                  render={() => (
                    <h1 style={{ textAlign: 'center' }}>
                      Thanks for your order!
                    </h1>
                  )}
                />
                <Redirect to="/restaurants" />
              </Switch>
            </Layout.Content>
          </CurrencyProvider>
        </UserProvider>
      </Layout>
    </div>
  );
}

export default App;
