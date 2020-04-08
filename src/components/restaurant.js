import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import { Rate, PageHeader, Col, Row } from 'antd';

export default function Restaurant({ restaurant }) {
  const rateSum = restaurant.reviews.reduce((acc, val) => acc + val.rating, 0);
  const ratesLength = restaurant.reviews.length;
  const averageRate = Math.floor((rateSum / ratesLength) * 2) / 2;
  return (
    <div className="site-card-wrapper">
      <PageHeader
        title={restaurant.name}
        subTitle={
          <div>
            rate: <Rate disabled allowHalf value={averageRate} />
          </div>
        }
      ></PageHeader>

      <Row gutter={16}>
        <Col span={12}>
          <Menu restaurant={restaurant} />
        </Col>

        <Col span={12}>
          <Reviews restaurant={restaurant} />
        </Col>
      </Row>
    </div>
  );
}
