import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Restaurants from '../restaurants';
import Header from '../header';
import Order from '../order';
import styles from './app.module.css';

class App extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div className={styles.app}>
        <Layout>
          <Header />
          <Order />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
