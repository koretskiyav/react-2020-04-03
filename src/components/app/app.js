import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Restaurants from '../restaurants';
import Header from '../header';

class App extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default App;
