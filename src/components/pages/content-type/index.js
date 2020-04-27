import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Typography } from 'antd';
import Restaurant from '../../restaurant';

function ContentType({ match, restaurant }) {
  console.log(match);
  if (match.isExact) {
    return (
      <div>
        <Typography.Title>Select </Typography.Title>
        <div>
          <Link to={`${match.path}/menu`}>Menu</Link>
        </div>
        <div>
          <Link to={`${match.path}/reviews`}>Reviews</Link>
        </div>
      </div>
    );
  }

  return (
    <Route
      path={`/restaurants/${restaurant.id}/:type`}
      render={routeProps => (
        <Restaurant {...routeProps} restaurant={restaurant} />
      )}
    />
  );
}

export default ContentType;
