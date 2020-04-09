import React from 'react';
import { Button, Menu, Row, Col, Space } from 'antd';

export default function RestaurantsNavigation(props) {
  return (
    <Menu theme={'dark'} mode="horizontal">
      <Row justify="center">
        <Space>
          {props.restaurants.map(restaurant => (
            <Col key={restaurant.id}>
              <Menu.Item>
                <Button
                  type="primary"
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
