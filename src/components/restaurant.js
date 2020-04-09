import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Layout, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function Restaurant(props) {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <h1>{props.restaurant.name}</h1>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Menu restaurant={props.restaurant}></Menu>
      <Reviews reviews={props.restaurant.reviews}></Reviews>
    </Content>
  );
}
