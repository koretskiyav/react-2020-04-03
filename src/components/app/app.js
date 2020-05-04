import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
import SuccessOrder from '../pages/success-order';
import { Layout } from 'antd';
import Header from '../header';
import Basket from '../basket';

import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';

function App() {
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('usd');
  const cur = function(value) {
    switch (currency) {
      case 'eur':
        return (value * 0.91).toFixed(2) + ' €';
      case 'rub':
        return (value * 75.1).toFixed(2) + ' ₽';
      default:
        return value + ' $';
    }
  };

  return (
    <div>
      <Layout>
        <CurrencyProvider value={{ currency, setCurrency, cur }}>
          <UserProvider value={{ userName, setName }}>
            <Header />
            <Layout.Content>
              <Switch>
                <Route path="/checkout" component={Basket} />
                <Route path="/restaurants" component={RestaurantPage} />
                <Route path="/success-order" component={SuccessOrder} />
                <Route path="/error" render={() => <h1>Error page</h1>} />
                <Redirect from="/" to={`/restaurants`} />
              </Switch>
            </Layout.Content>
          </UserProvider>
        </CurrencyProvider>
      </Layout>
    </div>
  );
}

export default App;
