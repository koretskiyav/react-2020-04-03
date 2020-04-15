import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import { Layout, Row, Col } from 'antd';
import Header from '../header';
import Order from '../order';

class App extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Row>
              <Col flex={3}>
                <Restaurants restaurants={restaurants} />
              </Col>
              <Col flex={2}>
                <Order />
              </Col>
            </Row>
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
