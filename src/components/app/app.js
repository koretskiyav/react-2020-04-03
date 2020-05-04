import React, { useState, useEffect, useMemo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
import { Layout } from 'antd';

import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import {
  Provider as CurrencyProvider,
  currencies
} from '../../contexts/currency';

function App() {
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('usd');

  const withCurrency = value => {
    return value * currencies[currency].ratio;
  };

  const sign = useMemo(() => {
    return currencies[currency].sign;
  }, [currency, currencies]);

  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <Layout>
        <CurrencyProvider
          value={{ currency, setCurrency, withCurrency, sign, currencies }}
        >
          <UserProvider value={{ userName, setName }}>
            <Header />
            <Layout.Content>
              <Switch>
                <Route path="/checkout" component={Basket} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route path="/error" render={() => <h1>Error page</h1>} />
                <Route
                  path="/checkoutDone"
                  render={() => <h1>Thanks for your order!</h1>}
                />
                <Redirect exact from="/" to="/restaurants" />
                <Route path="/" render={() => <div>404 - not found</div>} />
              </Switch>
            </Layout.Content>
          </UserProvider>
        </CurrencyProvider>
      </Layout>
    </div>
  );
}

export default App;
