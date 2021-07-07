import React, { useMemo } from 'react';
import { Rate } from 'antd';

export default function AverageRate({reviews}) {


  const roundAverage = useMemo(
    () => {

      const rateSum = reviews
        .map(review=>review.rating)
        .reduce((a,b)=> a+b, 0);

      const average =
        (reviews.length ?  Math.round(rateSum) : 0) /
        reviews.length;

      return  Math.round(average*2)/2;
    },

    [reviews]
  );


  return (
     <Rate allowHalf disabled value={roundAverage} />
  );
}
