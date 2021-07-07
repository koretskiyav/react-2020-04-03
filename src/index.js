import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import store from './redux/store';
import history from './history';
import { MoneyProvider } from './contexts/money';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MoneyProvider>
        <App />
      </MoneyProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
