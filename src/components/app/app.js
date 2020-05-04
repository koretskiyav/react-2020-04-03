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
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <Layout>
        <UserProvider value={{ userName, setName }}>
          <CurrencyProvider value={{ currency, setCurrency }}>
            <Header />
            <Layout.Content>
              <Switch>
                <Route path="/checkout" component={Basket} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route
                  path="/checkout-success"
                  render={() => (
                    <div>
                      <h1>Thank you for your order!</h1>
                      <h2>We will contact you shortly</h2>
                    </div>
                  )}
                />
                <Route path="/error" render={() => <h1>Error page</h1>} />
                <Redirect from="/" to="/restaurants/" />
              </Switch>
            </Layout.Content>
          </CurrencyProvider>
        </UserProvider>
      </Layout>
    </div>
  );
}

export default App;
