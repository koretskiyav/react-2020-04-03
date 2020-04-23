import React, { useEffect } from 'react';
import Product from '../product';
import { Col, Row } from 'antd';
import Basket from '../basket';
import { DISHES_COLLECTION } from '../../redux/constants';
import { loadCollection } from '../../redux/actions';
import { connect } from 'react-redux';
import { loadingSelector } from '../../redux/selectors';

function Menu({ menu, load, isLoading }) {
  useEffect(() => {
    load();
  }, [load, menu]);

  if (isLoading) return <h3>Loading...</h3>;

  // TODO error selector
  // if (this.error) {
  //   return <Typography>{this.error.message}</Typography>;
  // }

  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={15} lg={12}>
        {menu.map(id => (
          <Product key={id} id={id} />
        ))}
      </Col>
      <Col xs={0} md={7} lg={6}>
        <Basket />
      </Col>
    </Row>
  );
}
export default connect(
  (state, ownProps) => {
    return {
      menu: ownProps.menu,
      isLoading: loadingSelector(state, DISHES_COLLECTION)
    };
  },
  { load: loadCollection(DISHES_COLLECTION) }
)(Menu);
