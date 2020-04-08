import React from 'react';
import { Button, Menu, Row, Col, Space } from 'antd';

export default function RestaurantsNavigation(props) {
  return (
    <Menu theme={'dark'} mode="horizontal">
      <Row justify="center">
        <Space>
          {props.restaurants.map(restaurant => (
            <Col>
              <Menu.Item key={'item' + restaurant.id}>
                <Button
                  type="primary"
                  key={restaurant.id}
                  onClick={() => props.onRestaurantChange(restaurant.id)}
                >
                  {restaurant.name}
                </Button>
              </Menu.Item>
            </Col>
          ))}
        </Space>
      </Row>
    </Menu>
  );
}
