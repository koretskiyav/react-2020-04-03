import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantPage from '../pages/restaurant-page';
import { Layout } from 'antd';
import Header from '../header';
import Basket from '../basket';

import { Provider as UserProvider } from '../../contexts/user';

function App() {
  const [userName, setName] = useState('Ivan');

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <Layout>
        <UserProvider value={{ userName, setName }}>
          <Header />
          <Layout.Content>
            <Switch>
              <Route path="/checkout" component={Basket} />
              <Route path="/restaurants" component={RestaurantPage} />
              <Route
                path="/order-success"
                render={() => (
                  <h1 style={{ textAlign: 'center', margin: 150 }}>
                    Congratulations! Your order has been successfully created!
                  </h1>
                )}
              />
              <Route path="/error" render={() => <h1>Error page</h1>} />
              <Redirect exact from="/" to="/restaurants" />
              <Route path="/" render={() => <div>404 - not found</div>} />
            </Switch>
          </Layout.Content>
        </UserProvider>
      </Layout>
    </div>
  );
}

export default App;
